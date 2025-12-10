// create objects
const stopwatch = new Widget('stopwatch', 0, 0, 0, 0, ['hours', 'minutes', 'seconds', 'milliseconds']);
const observer = new MutationObserver(() => {barPalette();});

// global variables
const hours = document.getElementById(stopwatch.getElement(0));
const minutes = document.getElementById(stopwatch.getElement(1));
const seconds = document.getElementById(stopwatch.getElement(2));
const mlseconds = document.getElementById(stopwatch.getElement(3));

// buttons and event listeners
document.getElementById("start-stopwatch").addEventListener("click", () => {start();});
document.getElementById("stop-stopwatch").addEventListener("click", () => {stop();});
document.getElementById("reset-stopwatch").addEventListener("click", () => {reset();});
document.getElementById("set-stopwatch").addEventListener("click", () => {configure();});
document.getElementById("lap-stopwatch").addEventListener("click", () => {lap();});

let lapCounter = 1;
let ms = document.getElementById(stopwatch.getElement(3));
let msInterval = null;
let observeCounter = 3;
let observeReverse = false;
let barCounter;

// event listen #seconds text content
observer.observe(seconds, 
{
    characterData: true,
    childList: true,
    subtree: true
});

function barPalette()
{
    if (observeReverse === false)
    {
        // cycle through green-300 -> green-900
        observeCounter++;
        if (observeCounter >= 9)
        {
            observeReverse = true;
        }

        progressBar.setBgPalette(observeCounter);
    }
    else
    {
        // reverse cycle from green-900 -> green-300
        observeCounter--;
        if (observeCounter <= 3)
        {
            observeReverse = false;
        }

        progressBar.setBgPalette(observeCounter);
    }
}
function start()
{
    barCounter = 0;
    progressBar.setBgPalette(observeCounter);
    progressBar.setEnabled(true);

    // remove all duplicate intervals (if already active)
    clearInterval(msInterval);

    // stopwatch
    msInterval = setInterval(() => 
    {
        stopwatch.addMlseconds(10);
        let currentMs = stopwatch.getMlseconds();
        if (currentMs >= 1000)
        {
            barCounter = 100;
        }
        else
        {
            barCounter = Math.floor(currentMs / 10);
        }

        // rollover when 1000 ms is hit
        if (currentMs >= 1000)
        {
            stopwatch.setMlseconds(0);
            stopwatch.addSeconds(1);

            // increment minute when seconds reach 60
            if (stopwatch.getSeconds() >= 60)
            {
                stopwatch.setSeconds(0);
                stopwatch.addMinutes(1);

                // increment hour when minutes reach 60
                if (stopwatch.getMinutes() >= 60)
                {
                    stopwatch.setMinutes(0);
                    stopwatch.addHours(1);

                    // terminate stopwatch when full day passes
                    if (stopwatch.getHours() >= 24)
                    {
                        console.warn("Full day passed: Terminating timer...");

                        stopwatch.setHours(0);
                        stopwatch.setMinutes(0);
                        stopwatch.setSeconds(0);
                        stopwatch.setMlseconds(0);

                        clearInterval(msInterval);
                        return;
                    }

                    stopwatch.setHours(stopwatch.getHours());
                }

                stopwatch.setMinutes(stopwatch.getMinutes());
            }

            stopwatch.setSeconds(stopwatch.getSeconds());
        }
        if (currentMs >= 1000)
        {
            ms.textContent = "00";
        }
        else
        {
            ms.textContent = String(barCounter).padStart(2, "0");
        }

        progressBar.setWidth(barCounter);
    }, 10);
}
function stop()
{
    progressBar.setEnabled(false);
    clearInterval(msInterval);
}
function set(hours, minutes, seconds, mlseconds)
{
    if (!(isNaN(hours) || isNaN(minutes) || isNaN(seconds) || isNaN(mlseconds)))
    {
        stopwatch.setHours(hours);
        stopwatch.setMinutes(minutes);
        stopwatch.setSeconds(seconds);
        stopwatch.setMlseconds(mlseconds);
    }
}
function reset()
{
    clearInterval(msInterval);

    stopwatch.setHours(0);
    stopwatch.setMinutes(0);
    stopwatch.setSeconds(0);
    stopwatch.setMlseconds(0);

    barCounter = 0;
    observeCounter = 3;
    observeReverse = false;
    progressBar.setBgPalette(observeCounter);
    progressBar.setWidth(barCounter);
}
function configure()
{
    const hrs = parseFloat(document.getElementById("input-hours").value);
    const mins = parseFloat(document.getElementById("input-minutes").value);
    const secs = parseFloat(document.getElementById("input-seconds").value);
    const mlsecs = parseFloat(document.getElementById("input-mlseconds").value);

    // error messages
    const error = document.createElement("p");
    error.id = "error-message";
    error.style.color = "red";
    error.style.textAlign = "center";

    if (hrs < 0 || mins < 0 || secs < 0 | mlsecs < 0)
    {
        if (document.getElementById("error-message")) {document.getElementById("error-message").remove();}

        error.innerText = "Error: One or more inputs are a negative number!";
        document.getElementById("set-card-div").appendChild(error);
    }
    else if (hrs >= 24)
    {
        if (document.getElementById("error-message")) {document.getElementById("error-message").remove();}

        error.innerText = "Error: Hours must be less than 24.";
        document.getElementById("set-card-div").appendChild(error);
    }
    else if (mins >= 60)
    {
        if (document.getElementById("error-message")) {document.getElementById("error-message").remove();}

        error.innerText = "Error: Minutes must be less than 60.";
        document.getElementById("set-card-div").appendChild(error);
    }
    else if (secs >= 60)
    {
        if (document.getElementById("error-message")) {document.getElementById("error-message").remove();}

        error.innerText = "Error: Seconds must be less than 60.";
        document.getElementById("set-card-div").appendChild(error);
    }
    else if (mlsecs >= 60)
    {
        if (document.getElementById("error-message")) {document.getElementById("error-message").remove();}

        error.innerText = "Error: Miliseconds must be less than 60.";
        document.getElementById("set-card-div").appendChild(error);
    }
    else
    {
        if (document.getElementById("error-message")) {document.getElementById("error-message").remove();}

        set(hrs, mins, secs, mlsecs);
    } 
}
function lap()
{
    let lapDiv = document.createElement("div");

    lapDiv.id = "lap-" + lapCounter;
    lapDiv.classList.add("flex", "justify-between", "mx-2", "text-xl");

    const h  = String(stopwatch.getHours()).padStart(2, "0");
    const m  = String(stopwatch.getMinutes()).padStart(2, "0");
    const s  = String(stopwatch.getSeconds()).padStart(2, "0");
    const ms = String(Math.floor(stopwatch.getMlseconds() / 10)).padStart(2, "0");

    lapDiv.innerHTML = 
    `
    <p>Lap ${lapCounter}</p>
    <p>${h}:${m}:${s}:${ms}
        <button class="lap-remove text-red-700 font-bold cursor-pointer">
            <i class="fa-solid fa-x"></i>
        </button>
    </p>
    `;
    
    document.getElementById("lap-card-div").appendChild(lapDiv);

    // attach remove handler for added lap
    const removeBtn = lapDiv.querySelector(".lap-remove");
    removeBtn.addEventListener("click", () => 
    {
        lapDiv.remove();
        renumberLaps();
    });

    lapCounter++;
}
function renumberLaps()
{
    const lapContainer = document.getElementById("lap-card-div");
    const lapRows = lapContainer.querySelectorAll(`div[id^='lap-']`);

    lapRows.forEach((row, index) =>
    {
        const newNumber = index + 1;

        // update id
        row.id = `lap-${newNumber}`;

        // update label text, lap X
        const label = row.querySelector("p:first-child");
        if (label)
        {
            label.textContent = `Lap ${newNumber}`;
        }
    });

    // update lapCounter so next added lap gets the next number
    lapCounter = (lapRows.length + 1);
}