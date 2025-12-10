const timer = new Widget('timer', 0, 0, 0, 0, ['hours', 'minutes', 'seconds', 'milliseconds']);

let digits = "";
let msInterval = null;

// event listeners
document.getElementById("start-timer").addEventListener("click", () => {start();});
document.getElementById("stop-timer").addEventListener("click", () => {stop();});
document.getElementById("reset-timer").addEventListener("click", () => {reset();});

document.addEventListener("DOMContentLoaded", () => 
{
    numberPad();

    // set timer to 00:00:00:00
    timer.setHours(0);
    timer.setMinutes(0);
    timer.setSeconds(0);
    timer.setMlseconds(0);

    // hide notification messages
    document.getElementById("message-error").classList.add("hidden");
    document.getElementById("message-reset").classList.add("hidden");
    document.getElementById("message-alert").classList.add("hidden");
});

function start()
{
    // block duplicate intervals from running
    if (msInterval !== null)
    {
        return;
    }

    // timer = 00:00:00:00
    if (timer.getHours() === 0 && timer.getMinutes() === 0 && timer.getSeconds() === 0 && timer.getMlseconds() === 0)
    {
        // display error message
        document.getElementById("message-error").classList.replace("hidden", "block");

        // remove alert message (if already displayed)
        document.getElementById("message-alert").classList.replace("block", "hidden");
        return;
    }

    // remove all visible messages
    document.getElementById("message-error").classList.replace("block", "hidden");
    document.getElementById("message-reset").classList.replace("block", "hidden");

    msInterval = setInterval(() => 
    {
        timer.subMlseconds(10);

        // rollover when ms goes below 0
        if (timer.getMlseconds() < 0)
        {
            timer.setMlseconds(990);
            timer.subSeconds(1);
        }

        // deduct 1 minute when seconds go below 0
        if (timer.getSeconds() < 0)
        {
            timer.setSeconds(59)
            timer.subMinutes(1);
        }

        // deduct 1 hour when minutes go below 0
        if (timer.getMinutes() < 0)
        {
            timer.setMinutes(59);
            timer.subHours(1);
        }

        // end timer when it reaches 00:00:00:00
        if (timer.getHours() === 0 && timer.getMinutes() === 0 && timer.getSeconds() === 0 && timer.getMlseconds() === 0)
        {
            stop();
            document.getElementById("message-alert").classList.replace("hidden", "block");
        }
    }, 10);
}
function stop()
{
    clearInterval(msInterval);
    msInterval = null;
}
function reset()
{
    stop();

    timer.setHours(0);
    timer.setMinutes(0);
    timer.setSeconds(0);
    timer.setMlseconds(0);

    digits = "";
    document.getElementById("message-reset").classList.replace("hidden", "block");
}
function numberPad()
{
    // create event listeners for buttons 0-9
    for (let i = 0; i <= 9; i++)
    {
        let button = document.getElementById(`button-${i}`);
        if (button)
        {
            button.addEventListener('click', () => 
            {
                if (digits.length < 6)
                {
                    digits += i;
                    updateDisplay();
                }
            });
        }
    }
}
function updateDisplay()
{
    const padded = digits.padStart(6, "0");

    const hours = Number(padded.substring(0, 2));
    const minutes = Number(padded.substring(2, 4));
    const seconds = Number(padded.substring(4, 6));

    timer.setHours(hours);
    timer.setMinutes(minutes);
    timer.setSeconds(seconds);
    timer.setMlseconds(0);
}