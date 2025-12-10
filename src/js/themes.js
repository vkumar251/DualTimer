// buttons
const cyanButton = document.getElementById("cyan-button");
const emeraldButton = document.getElementById("emerald-button");
const yellowButton = document.getElementById("yellow-button");
const indigoButton = document.getElementById("indigo-button");
const roseButton = document.getElementById("rose-button");

// setup cache
const themeType = "dualtimer-theme";

// event listeners
document.addEventListener("DOMContentLoaded", () =>
{
    const themesButton = document.getElementById("themes-button");
    const themesDropdown = document.getElementById("themes-dropdown");

    // toggle dropdown on click
    themesButton.addEventListener("click", () => {themesDropdown.classList.toggle("hidden")});

    // close dropdown (if clicking outside menu)
    document.addEventListener("click", (e) => 
    {
        const buttonClick = themesButton.contains(e.target);
        const dropdownClick = themesDropdown.contains(e.target);

        if (!(buttonClick) && !(dropdownClick))
        {
            themesDropdown.classList.add("hidden");
        }
    });

    try
    {
        // configure default theme if cache is empty
        if (localStorage.getItem(themeType) === null)
        {
            console.info("Loading default theme...");
            cyanMode();
        }
        else
        {
            // retrieve cached theme
            const memory = localStorage.getItem(themeType);

            switch (memory)
            {
                case "cyan":
                    cyanMode();
                    break;
                case "emerald":
                    emeraldMode();
                    break;
                case "yellow":
                    yellowMode();
                    break;
                case "indigo":
                    indigoMode();
                    break;
                case "rose":
                    roseMode();
                    break;
                default:
                    console.warn("Theme not found: Resetting to default...");
                    cyanMode();
                    break;
            }
        }
    }
    catch (exception) 
    {
    }
});

cyanButton.addEventListener("click", () => {cyanMode();});
emeraldButton.addEventListener("click", () => {emeraldMode();});
yellowButton.addEventListener("click", () => {yellowMode();});
indigoButton.addEventListener("click", () => {indigoMode();});
roseButton.addEventListener("click", () => {roseMode();});

// configurations
function cyanMode()
{
    header.setBgColor("bg-cyan-950");
    dropdown.setBgColor("bg-cyan-950", "hover:bg-cyan-900");
    sidebar.setBgColor("bg-cyan-950", "hover:bg-cyan-900");
    main.setGradient("from-cyan-100", "to-cyan-700", "from-50%");
    footer.setBgColor("bg-cyan-950");

    // index page
    if (document.getElementById("index-page"))
    {
        const switchCards = () => 
        {
            const newClasses = ["bg-cyan-950", "bg-cyan-800", "bg-cyan-600"];

            // timer card
            const timer = function()
            {
                const elements = 
                [
                    document.getElementById("timer-h1"), // elements[0]
                    document.getElementById("timer-div"), // elements[1]
                    document.getElementById("timer-button"), // elements[2]
                ];
                
                // replace all element attributes with new classes
                for (let i = 0; i < elements.length; i++)
                {
                    elements[i].classList.replace(elements[i].classList[0], newClasses[i]);
                }
                
                // update button hover
                elements[2].classList.replace(elements[2].classList[1], "hover:bg-cyan-700");
            }

            // stopwatch card
            const stopwatch = function()
            {
                const elements = 
                [
                    document.getElementById("stopwatch-h1"),
                    document.getElementById("stopwatch-div"),
                    document.getElementById("stopwatch-button"),
                ];

                for (let i = 0; i < elements.length; i++)
                {
                    elements[i].classList.replace(elements[i].classList[0], newClasses[i]);
                }
                
                elements[2].classList.replace(elements[2].classList[1], "hover:bg-cyan-700");
            }

            timer();
            stopwatch();
        }

        switchCards();
    }

    // stopwatch page
    if (document.getElementById("stopwatch-page"))
    {
        const switchCards = () => 
        {
            const bgClass = ["bg-cyan-400", "bg-cyan-500", "bg-cyan-600", "bg-cyan-700", "bg-cyan-800", "bg-cyan-900", "bg-cyan-950"];

            // progress bar
            const progressBar = () => 
            {
                const bar = document.getElementById("stopwatch-bar");
                bar.classList.replace(bar.classList[3], bgClass[6]);
            }
            // stopwatch
            const stopwatch = () =>
            {
                let widget = function()
                {
                    const w = document.getElementById("stopwatch-widget");
                    w.classList.replace(w.classList[1], "border-cyan-950");
                    w.classList.replace(w.classList[7], bgClass[5]);
                }
                let buttons = function()
                {
                    const btnList = ["start-stopwatch", "stop-stopwatch", "reset-stopwatch", "lap-stopwatch"];

                    let x = 0;
                    while (x < btnList.length)
                    {
                        document.querySelector(`#${btnList[x]}`).classList.replace(document.getElementById(btnList[x]).classList[0], bgClass[2]);
                        document.querySelector(`#${btnList[x]}`).classList.replace(document.getElementById(btnList[x]).classList[1], "hover:bg-cyan-700");
                        x++;
                    }
                }
                
                widget();
                buttons();
            }
            // lap card
            const lapCard = () => 
            {
                const x = document.querySelector("#lap-card div");
                const y = document.querySelector("#lap-card-div");

                x.classList.replace(x.classList[0], bgClass[6]);
                y.classList.replace(y.classList[0], bgClass[4]);
            }
            // set card
            const setCard = () => 
            {
                const x = document.querySelector("#set-card div");
                const y = document.querySelector("#set-card-div");

                x.classList.replace(x.classList[0], bgClass[6]);
                y.classList.replace(y.classList[0], bgClass[4]);

                const inputs = ["input-hours", "input-minutes", "input-seconds", "input-mlseconds"];

                let z = 0;
                while (z < inputs.length)
                {
                    document.querySelector(`#${inputs[z]}`).classList.replace(document.getElementById(inputs[z]).classList[0], bgClass[3]);
                    z++;
                }
            }
            // set card - button
            const setBtn = () => 
            {
                const btn = document.getElementById("set-stopwatch");
                btn.classList.replace(btn.classList[0], bgClass[2]);
                btn.classList.replace(btn.classList[1], "hover:bg-cyan-700");
            }
            
            progressBar();
            stopwatch();
            lapCard();
            setCard();
            setBtn();
        }

        switchCards();
    }

    // timer page
    if (document.getElementById("timer-page"))
    {
        const switchCards = () => 
        {
            const bgClass = ["bg-cyan-400", "bg-cyan-500", "bg-cyan-600", "bg-cyan-700", "bg-cyan-800", "bg-cyan-900", "bg-cyan-950"];

            // timer
            const timer = () => 
            {
                let widget = function()
                {
                    const w = document.getElementById("timer-widget");
                    w.classList.replace(w.classList[7], bgClass[5])
                    w.classList.replace(w.classList[1], "border-cyan-950");
                }
                let panels = function()
                {
                    const panel = 
                    [
                        document.getElementById("buttons-panel-1"),
                        document.getElementById("buttons-panel-2"),
                        document.getElementById("buttons-panel-3"),
                    ];

                    panel[0].classList.replace(panel[0].classList[0], bgClass[6]);
                    panel[1].classList.replace(panel[1].classList[0], bgClass[4]);
                    panel[2].classList.replace(panel[2].classList[0], bgClass[6]);
                }
                let buttons = function()
                {
                    let button = 
                    [
                        document.getElementById("start-timer"),
                        document.getElementById("stop-timer"),
                        document.getElementById("reset-timer"),
                    ];

                    // start button
                    button[0].classList.replace(button[0].classList[0], bgClass[2]);
                    button[0].classList.replace(button[0].classList[1], `hover:${bgClass[3]}`);

                    // stop button
                    button[1].classList.replace(button[1].classList[0], bgClass[2]);
                    button[1].classList.replace(button[1].classList[1], `hover:${bgClass[3]}`);

                    // reset button
                    button[2].classList.replace(button[2].classList[0], bgClass[2]);
                    button[2].classList.replace(button[2].classList[1], `hover:${bgClass[3]}`);
                }
                let pad = function()
                {
                    let button = [];

                    for (let i = 0; i <= 9; i++)
                    {
                        // add number pads 0-9 to array
                        button.push(document.getElementById(`button-${i}`));     
                    }

                    // change bg + hover colours of number pads 0-9
                    button.forEach((ids) => 
                    {
                        ids.classList.replace(ids.classList[0], bgClass[2]);
                        ids.classList.replace(ids.classList[1], `hover:${bgClass[3]}`);
                    });  
                }

                widget();
                panels();
                buttons();
                pad();
            }

            timer();
        }

        switchCards();
    }

    localStorage.setItem(themeType, "cyan");
}
function emeraldMode()
{
    header.setBgColor("bg-emerald-950");
    dropdown.setBgColor("bg-emerald-950", "hover:bg-emerald-900");
    sidebar.setBgColor("bg-emerald-950", "hover:bg-emerald-900");
    main.setGradient("from-emerald-100", "to-emerald-700", "from-50%");
    footer.setBgColor("bg-emerald-950");

    // index page
    if (document.getElementById("index-page"))
    {
        const switchCards = () => 
        {
            const newClasses = ["bg-emerald-950", "bg-emerald-800", "bg-emerald-600"];

            // timer card
            const timer = function()
            {
                const elements = 
                [
                    document.getElementById("timer-h1"),
                    document.getElementById("timer-div"),
                    document.getElementById("timer-button"),
                ];
                
                // replace all element attributes with new classes
                for (let i = 0; i < elements.length; i++)
                {
                    elements[i].classList.replace(elements[i].classList[0], newClasses[i]);
                }
                
                // update button hover
                elements[2].classList.replace(elements[2].classList[1], "hover:bg-emerald-700");
            }

            // stopwatch card
            const stopwatch = function()
            {
                const elements = 
                [
                    document.getElementById("stopwatch-h1"),
                    document.getElementById("stopwatch-div"),
                    document.getElementById("stopwatch-button"),
                ];

                for (let i = 0; i < elements.length; i++)
                {
                    elements[i].classList.replace(elements[i].classList[0], newClasses[i]);
                }

                elements[2].classList.replace(elements[2].classList[1], "hover:bg-emerald-700");
            }

            timer();
            stopwatch();
        }

        switchCards();
    }

    // stopwatch page
    if (document.getElementById("stopwatch-page"))
    {
        const switchCards = () => 
        {
            const bgClass = ["bg-emerald-400", "bg-emerald-500", "bg-emerald-600", "bg-emerald-700", "bg-emerald-800", "bg-emerald-900", "bg-emerald-950"];

            // progress bar
            const progressBar = () => 
            {
                const bar = document.getElementById("stopwatch-bar");
                bar.classList.replace(bar.classList[3], bgClass[6]);
            }
            // stopwatch
            const stopwatch = () =>
            {
                let widget = function()
                {
                    const w = document.getElementById("stopwatch-widget");
                    w.classList.replace(w.classList[1], "border-emerald-950");
                    w.classList.replace(w.classList[7], bgClass[5]);
                }
                let buttons = function()
                {
                    const btnList = ["start-stopwatch", "stop-stopwatch", "reset-stopwatch", "lap-stopwatch"];

                    let x = 0;
                    while (x < btnList.length)
                    {
                        document.querySelector(`#${btnList[x]}`).classList.replace(document.getElementById(btnList[x]).classList[0], bgClass[2]);
                        document.querySelector(`#${btnList[x]}`).classList.replace(document.getElementById(btnList[x]).classList[1], "hover:bg-emerald-700");
                        x++;
                    }
                }
                
                widget();
                buttons();
            }
            // lap card
            const lapCard = () => 
            {
                const x = document.querySelector("#lap-card div");
                const y = document.querySelector("#lap-card-div");

                x.classList.replace(x.classList[0], bgClass[6]);
                y.classList.replace(y.classList[0], bgClass[4]);
            }
            // set card
            const setCard = () => 
            {
                const x = document.querySelector("#set-card div");
                const y = document.querySelector("#set-card-div");

                x.classList.replace(x.classList[0], bgClass[6]);
                y.classList.replace(y.classList[0], bgClass[4]);

                const inputs = ["input-hours", "input-minutes", "input-seconds", "input-mlseconds"];

                let z = 0;
                while (z < inputs.length)
                {
                    document.querySelector(`#${inputs[z]}`).classList.replace(document.getElementById(inputs[z]).classList[0], bgClass[3]);
                    z++;
                }
            }
            // set card - button
            const setBtn = () => 
            {
                const btn = document.getElementById("set-stopwatch");
                btn.classList.replace(btn.classList[0], bgClass[2]);
                btn.classList.replace(btn.classList[1], "hover:bg-emerald-700");
            }
            
            progressBar();
            stopwatch();
            lapCard();
            setCard();
            setBtn();
        }

        switchCards();
    }

    // timer page
    if (document.getElementById("timer-page"))
    {
        const switchCards = () => 
        {
            const bgClass = ["bg-emerald-400", "bg-emerald-500", "bg-emerald-600", "bg-emerald-700", "bg-emerald-800", "bg-emerald-900", "bg-emerald-950"];

            // timer
            const timer = () => 
            {
                let widget = function()
                {
                    const w = document.getElementById("timer-widget");
                    w.classList.replace(w.classList[7], bgClass[5])
                    w.classList.replace(w.classList[1], "border-emerald-950");
                }
                let panels = function()
                {
                    const panel = 
                    [
                        document.getElementById("buttons-panel-1"),
                        document.getElementById("buttons-panel-2"),
                        document.getElementById("buttons-panel-3"),
                    ];

                    panel[0].classList.replace(panel[0].classList[0], bgClass[6]);
                    panel[1].classList.replace(panel[1].classList[0], bgClass[4]);
                    panel[2].classList.replace(panel[2].classList[0], bgClass[6]);
                }
                let buttons = function()
                {
                    let button = 
                    [
                        document.getElementById("start-timer"),
                        document.getElementById("stop-timer"),
                        document.getElementById("reset-timer"),
                    ];

                    // start button
                    button[0].classList.replace(button[0].classList[0], bgClass[2]);
                    button[0].classList.replace(button[0].classList[1], `hover:${bgClass[3]}`);

                    // stop button
                    button[1].classList.replace(button[1].classList[0], bgClass[2]);
                    button[1].classList.replace(button[1].classList[1], `hover:${bgClass[3]}`);

                    // reset button
                    button[2].classList.replace(button[2].classList[0], bgClass[2]);
                    button[2].classList.replace(button[2].classList[1], `hover:${bgClass[3]}`);
                }
                let pad = function()
                {
                    let button = [];

                    for (let i = 0; i <= 9; i++)
                    {
                        // add number pads 0-9 to array
                        button.push(document.getElementById(`button-${i}`));     
                    }

                    // change bg + hover colours of number pads 0-9
                    button.forEach((ids) => 
                    {
                        ids.classList.replace(ids.classList[0], bgClass[2]);
                        ids.classList.replace(ids.classList[1], `hover:${bgClass[3]}`);
                    });  
                }

                widget();
                panels();
                buttons();
                pad();
            }

            timer();
        }

        switchCards();
    }

    localStorage.setItem(themeType, "emerald");
}
function yellowMode()
{
    header.setBgColor("bg-yellow-950");
    dropdown.setBgColor("bg-yellow-950", "hover:bg-yellow-900");
    sidebar.setBgColor("bg-yellow-950", "hover:bg-yellow-900");
    main.setGradient("from-yellow-100", "to-yellow-700", "from-50%");
    footer.setBgColor("bg-yellow-950");

    // index page
    if (document.getElementById("index-page"))
    {
        const switchCards = () => 
        {
            const newClasses = ["bg-yellow-950", "bg-yellow-800", "bg-yellow-600"];

            // timer card
            const timer = function()
            {
                const elements = 
                [
                    document.getElementById("timer-h1"),
                    document.getElementById("timer-div"),
                    document.getElementById("timer-button"),
                ];
                
                // replace all element attributes with new classes
                for (let i = 0; i < elements.length; i++)
                {
                    elements[i].classList.replace(elements[i].classList[0], newClasses[i]);
                }
                
                // update button hover
                elements[2].classList.replace(elements[2].classList[1], "hover:bg-yellow-700");
            }

            // stopwatch card
            const stopwatch = function()
            {
                const elements = 
                [
                    document.getElementById("stopwatch-h1"),
                    document.getElementById("stopwatch-div"),
                    document.getElementById("stopwatch-button"),
                ];

                for (let i = 0; i < elements.length; i++)
                {
                    elements[i].classList.replace(elements[i].classList[0], newClasses[i]);
                }

                elements[2].classList.replace(elements[2].classList[1], "hover:bg-yellow-700");
            }

            timer();
            stopwatch();
        }

        switchCards();
    }

    // stopwatch page
    if (document.getElementById("stopwatch-page"))
    {
        const switchCards = () => 
        {
            const bgClass = ["bg-yellow-400", "bg-yellow-500", "bg-yellow-600", "bg-yellow-700", "bg-yellow-800", "bg-yellow-900", "bg-yellow-950"];

            // progress bar
            const progressBar = () => 
            {
                const bar = document.getElementById("stopwatch-bar");
                bar.classList.replace(bar.classList[3], bgClass[6]);
            }
            // stopwatch
            const stopwatch = () =>
            {
                let widget = function()
                {
                    const w = document.getElementById("stopwatch-widget");
                    w.classList.replace(w.classList[1], "border-yellow-950");
                    w.classList.replace(w.classList[7], bgClass[5]);
                }
                let buttons = function()
                {
                    const btnList = ["start-stopwatch", "stop-stopwatch", "reset-stopwatch", "lap-stopwatch"];

                    let x = 0;
                    while (x < btnList.length)
                    {
                        document.querySelector(`#${btnList[x]}`).classList.replace(document.getElementById(btnList[x]).classList[0], bgClass[2]);
                        document.querySelector(`#${btnList[x]}`).classList.replace(document.getElementById(btnList[x]).classList[1], "hover:bg-yellow-700");
                        x++;
                    }
                }
                
                widget();
                buttons();
            }
            // lap card
            const lapCard = () => 
            {
                const x = document.querySelector("#lap-card div");
                const y = document.querySelector("#lap-card-div");

                x.classList.replace(x.classList[0], bgClass[6]);
                y.classList.replace(y.classList[0], bgClass[4]);
            }
            // set card
            const setCard = () => 
            {
                const x = document.querySelector("#set-card div");
                const y = document.querySelector("#set-card-div");

                x.classList.replace(x.classList[0], bgClass[6]);
                y.classList.replace(y.classList[0], bgClass[4]);

                const inputs = ["input-hours", "input-minutes", "input-seconds", "input-mlseconds"];

                let z = 0;
                while (z < inputs.length)
                {
                    document.querySelector(`#${inputs[z]}`).classList.replace(document.getElementById(inputs[z]).classList[0], bgClass[3]);
                    z++;
                }
            }
            // set card - button
            const setBtn = () => 
            {
                const btn = document.getElementById("set-stopwatch");
                btn.classList.replace(btn.classList[0], bgClass[2]);
                btn.classList.replace(btn.classList[1], "hover:bg-yellow-700");
            }
            
            progressBar();
            stopwatch();
            lapCard();
            setCard();
            setBtn();
        }

        switchCards();
    }

    // timer page
    if (document.getElementById("timer-page"))
    {
        const switchCards = () => 
        {
            const bgClass = ["bg-yellow-400", "bg-yellow-500", "bg-yellow-600", "bg-yellow-700", "bg-yellow-800", "bg-yellow-900", "bg-yellow-950"];

            // timer
            const timer = () => 
            {
                let widget = function()
                {
                    const w = document.getElementById("timer-widget");
                    w.classList.replace(w.classList[7], bgClass[5])
                    w.classList.replace(w.classList[1], "border-yellow-950");
                }
                let panels = function()
                {
                    const panel = 
                    [
                        document.getElementById("buttons-panel-1"),
                        document.getElementById("buttons-panel-2"),
                        document.getElementById("buttons-panel-3"),
                    ];

                    panel[0].classList.replace(panel[0].classList[0], bgClass[6]);
                    panel[1].classList.replace(panel[1].classList[0], bgClass[4]);
                    panel[2].classList.replace(panel[2].classList[0], bgClass[6]);
                }
                let buttons = function()
                {
                    let button = 
                    [
                        document.getElementById("start-timer"),
                        document.getElementById("stop-timer"),
                        document.getElementById("reset-timer"),
                    ];

                    // start button
                    button[0].classList.replace(button[0].classList[0], bgClass[2]);
                    button[0].classList.replace(button[0].classList[1], `hover:${bgClass[3]}`);

                    // stop button
                    button[1].classList.replace(button[1].classList[0], bgClass[2]);
                    button[1].classList.replace(button[1].classList[1], `hover:${bgClass[3]}`);

                    // reset button
                    button[2].classList.replace(button[2].classList[0], bgClass[2]);
                    button[2].classList.replace(button[2].classList[1], `hover:${bgClass[3]}`);
                }
                let pad = function()
                {
                    let button = [];

                    for (let i = 0; i <= 9; i++)
                    {
                        // add number pads 0-9 to array
                        button.push(document.getElementById(`button-${i}`));     
                    }

                    // change bg + hover colours of number pads 0-9
                    button.forEach((ids) => 
                    {
                        ids.classList.replace(ids.classList[0], bgClass[2]);
                        ids.classList.replace(ids.classList[1], `hover:${bgClass[3]}`);
                    });  
                }

                widget();
                panels();
                buttons();
                pad();
            }

            timer();
        }

        switchCards();
    }

    localStorage.setItem(themeType, "yellow");
}
function indigoMode()
{
    header.setBgColor("bg-indigo-950");
    dropdown.setBgColor("bg-indigo-950", "hover:bg-indigo-900");
    sidebar.setBgColor("bg-indigo-950", "hover:bg-indigo-900");
    main.setGradient("from-indigo-100", "to-indigo-700", "from-50%");
    footer.setBgColor("bg-indigo-950");

    // index page
    if (document.getElementById("index-page"))
    {
        const switchCards = () => 
        {
            const newClasses = ["bg-indigo-950", "bg-indigo-800", "bg-indigo-600"];

            // timer card
            const timer = function()
            {
                const elements = 
                [
                    document.getElementById("timer-h1"),
                    document.getElementById("timer-div"),
                    document.getElementById("timer-button"),
                ];
                
                // replace all element attributes with new classes
                for (let i = 0; i < elements.length; i++)
                {
                    elements[i].classList.replace(elements[i].classList[0], newClasses[i]);
                }
                
                // update button hover
                elements[2].classList.replace(elements[2].classList[1], "hover:bg-indigo-700");
            }

            // stopwatch card
            const stopwatch = function()
            {
                const elements = 
                [
                    document.getElementById("stopwatch-h1"),
                    document.getElementById("stopwatch-div"),
                    document.getElementById("stopwatch-button"),
                ];

                for (let i = 0; i < elements.length; i++)
                {
                    elements[i].classList.replace(elements[i].classList[0], newClasses[i]);
                }

                elements[2].classList.replace(elements[2].classList[1], "hover:bg-indigo-700");
            }

            timer();
            stopwatch();
        }

        switchCards();
    }

    // stopwatch page
    if (document.getElementById("stopwatch-page"))
    {
        const switchCards = () => 
        {
            const bgClass = ["bg-indigo-400", "bg-indigo-500", "bg-indigo-600", "bg-indigo-700", "bg-indigo-800", "bg-indigo-900", "bg-indigo-950"];

            // progress bar
            const progressBar = () => 
            {
                const bar = document.getElementById("stopwatch-bar");
                bar.classList.replace(bar.classList[3], bgClass[6]);
            }
            // stopwatch
            const stopwatch = () =>
            {
                let widget = function()
                {
                    const w = document.getElementById("stopwatch-widget");
                    w.classList.replace(w.classList[1], "border-indigo-950");
                    w.classList.replace(w.classList[7], bgClass[5]);
                }
                let buttons = function()
                {
                    const btnList = ["start-stopwatch", "stop-stopwatch", "reset-stopwatch", "lap-stopwatch"];

                    let x = 0;
                    while (x < btnList.length)
                    {
                        document.querySelector(`#${btnList[x]}`).classList.replace(document.getElementById(btnList[x]).classList[0], bgClass[2]);
                        document.querySelector(`#${btnList[x]}`).classList.replace(document.getElementById(btnList[x]).classList[1], "hover:bg-indigo-700");
                        x++;
                    }
                }
                
                widget();
                buttons();
            }
            // lap card
            const lapCard = () => 
            {
                const x = document.querySelector("#lap-card div");
                const y = document.querySelector("#lap-card-div");

                x.classList.replace(x.classList[0], bgClass[6]);
                y.classList.replace(y.classList[0], bgClass[4]);
            }
            // set card
            const setCard = () => 
            {
                const x = document.querySelector("#set-card div");
                const y = document.querySelector("#set-card-div");

                x.classList.replace(x.classList[0], bgClass[6]);
                y.classList.replace(y.classList[0], bgClass[4]);

                const inputs = ["input-hours", "input-minutes", "input-seconds", "input-mlseconds"];

                let z = 0;
                while (z < inputs.length)
                {
                    document.querySelector(`#${inputs[z]}`).classList.replace(document.getElementById(inputs[z]).classList[0], bgClass[3]);
                    z++;
                }
            }
            // set card - button
            const setBtn = () => 
            {
                const btn = document.getElementById("set-stopwatch");
                btn.classList.replace(btn.classList[0], bgClass[2]);
                btn.classList.replace(btn.classList[1], "hover:bg-indigo-700");
            }
            
            progressBar();
            stopwatch();
            lapCard();
            setCard();
            setBtn();
        }

        switchCards();
    }

    // timer page
    if (document.getElementById("timer-page"))
    {
        const switchCards = () => 
        {
            const bgClass = ["bg-indigo-400", "bg-indigo-500", "bg-indigo-600", "bg-indigo-700", "bg-indigo-800", "bg-indigo-900", "bg-indigo-950"];

            // timer
            const timer = () => 
            {
                let widget = function()
                {
                    const w = document.getElementById("timer-widget");
                    w.classList.replace(w.classList[7], bgClass[5])
                    w.classList.replace(w.classList[1], "border-indigo-950");
                }
                let panels = function()
                {
                    const panel = 
                    [
                        document.getElementById("buttons-panel-1"),
                        document.getElementById("buttons-panel-2"),
                        document.getElementById("buttons-panel-3"),
                    ];

                    panel[0].classList.replace(panel[0].classList[0], bgClass[6]);
                    panel[1].classList.replace(panel[1].classList[0], bgClass[4]);
                    panel[2].classList.replace(panel[2].classList[0], bgClass[6]);
                }
                let buttons = function()
                {
                    let button = 
                    [
                        document.getElementById("start-timer"),
                        document.getElementById("stop-timer"),
                        document.getElementById("reset-timer"),
                    ];

                    // start button
                    button[0].classList.replace(button[0].classList[0], bgClass[2]);
                    button[0].classList.replace(button[0].classList[1], `hover:${bgClass[3]}`);

                    // stop button
                    button[1].classList.replace(button[1].classList[0], bgClass[2]);
                    button[1].classList.replace(button[1].classList[1], `hover:${bgClass[3]}`);

                    // reset button
                    button[2].classList.replace(button[2].classList[0], bgClass[2]);
                    button[2].classList.replace(button[2].classList[1], `hover:${bgClass[3]}`);
                }
                let pad = function()
                {
                    let button = [];

                    for (let i = 0; i <= 9; i++)
                    {
                        // add number pads 0-9 to array
                        button.push(document.getElementById(`button-${i}`));     
                    }

                    // change bg + hover colours of number pads 0-9
                    button.forEach((ids) => 
                    {
                        ids.classList.replace(ids.classList[0], bgClass[2]);
                        ids.classList.replace(ids.classList[1], `hover:${bgClass[3]}`);
                    });  
                }

                widget();
                panels();
                buttons();
                pad();
            }

            timer();
        }

        switchCards();
    }

    localStorage.setItem(themeType, "indigo");
}
function roseMode()
{
    header.setBgColor("bg-rose-950");
    dropdown.setBgColor("bg-rose-950", "hover:bg-rose-900");
    sidebar.setBgColor("bg-rose-950", "hover:bg-rose-900");
    main.setGradient("from-rose-100", "to-rose-700", "from-50%");
    footer.setBgColor("bg-rose-950");

    // index page
    if (document.getElementById("index-page"))
    {
        const switchCards = () => 
        {
            const newClasses = ["bg-rose-950", "bg-rose-800", "bg-rose-600"];

            // timer card
            const timer = function()
            {
                const elements = 
                [
                    document.getElementById("timer-h1"),
                    document.getElementById("timer-div"),
                    document.getElementById("timer-button"),
                ];
                
                // replace all element attributes with new classes
                for (let i = 0; i < elements.length; i++)
                {
                    elements[i].classList.replace(elements[i].classList[0], newClasses[i]);
                }
                
                // update button hover
                elements[2].classList.replace(elements[2].classList[1], "hover:bg-rose-700");
            }

            // stopwatch card
            const stopwatch = function()
            {
                const elements = 
                [
                    document.getElementById("stopwatch-h1"),
                    document.getElementById("stopwatch-div"),
                    document.getElementById("stopwatch-button"),
                ];

                for (let i = 0; i < elements.length; i++)
                {
                    elements[i].classList.replace(elements[i].classList[0], newClasses[i]);
                }

                elements[2].classList.replace(elements[2].classList[1], "hover:bg-rose-700");
            }

            timer();
            stopwatch();
        }

        switchCards();
    }

    // stopwatch page
    if (document.getElementById("stopwatch-page"))
    {
        const switchCards = () => 
        {
            const bgClass = ["bg-rose-400", "bg-rose-500", "bg-rose-600", "bg-rose-700", "bg-rose-800", "bg-rose-900", "bg-rose-950"];

            // progress bar
            const progressBar = () => 
            {
                const bar = document.getElementById("stopwatch-bar");
                bar.classList.replace(bar.classList[3], bgClass[6]);
            }
            // stopwatch
            const stopwatch = () =>
            {
                let widget = function()
                {
                    const w = document.getElementById("stopwatch-widget");
                    w.classList.replace(w.classList[1], "border-rose-950");
                    w.classList.replace(w.classList[7], bgClass[5]);
                }
                let buttons = function()
                {
                    const btnList = ["start-stopwatch", "stop-stopwatch", "reset-stopwatch", "lap-stopwatch"];

                    let x = 0;
                    while (x < btnList.length)
                    {
                        document.querySelector(`#${btnList[x]}`).classList.replace(document.getElementById(btnList[x]).classList[0], bgClass[2]);
                        document.querySelector(`#${btnList[x]}`).classList.replace(document.getElementById(btnList[x]).classList[1], "hover:bg-rose-700");
                        x++;
                    }
                }
                
                widget();
                buttons();
            }
            // lap card
            const lapCard = () => 
            {
                const x = document.querySelector("#lap-card div");
                const y = document.querySelector("#lap-card-div");

                x.classList.replace(x.classList[0], bgClass[6]);
                y.classList.replace(y.classList[0], bgClass[4]);
            }
            // set card
            const setCard = () => 
            {
                const x = document.querySelector("#set-card div");
                const y = document.querySelector("#set-card-div");

                x.classList.replace(x.classList[0], bgClass[6]);
                y.classList.replace(y.classList[0], bgClass[4]);

                const inputs = ["input-hours", "input-minutes", "input-seconds", "input-mlseconds"];

                let z = 0;
                while (z < inputs.length)
                {
                    document.querySelector(`#${inputs[z]}`).classList.replace(document.getElementById(inputs[z]).classList[0], bgClass[3]);
                    z++;
                }
            }
            // set card - button
            const setBtn = () => 
            {
                const btn = document.getElementById("set-stopwatch");
                btn.classList.replace(btn.classList[0], bgClass[2]);
                btn.classList.replace(btn.classList[1], "hover:bg-rose-700");
            }
            
            progressBar();
            stopwatch();
            lapCard();
            setCard();
            setBtn();
        }

        switchCards();
    }

    // timer page
    if (document.getElementById("timer-page"))
    {
        const switchCards = () => 
        {
            const bgClass = ["bg-rose-400", "bg-rose-500", "bg-rose-600", "bg-rose-700", "bg-rose-800", "bg-rose-900", "bg-rose-950"];

            // timer
            const timer = () => 
            {
                let widget = function()
                {
                    const w = document.getElementById("timer-widget");
                    w.classList.replace(w.classList[7], bgClass[5])
                    w.classList.replace(w.classList[1], "border-rose-950");
                }
                let panels = function()
                {
                    const panel = 
                    [
                        document.getElementById("buttons-panel-1"),
                        document.getElementById("buttons-panel-2"),
                        document.getElementById("buttons-panel-3"),
                    ];

                    panel[0].classList.replace(panel[0].classList[0], bgClass[6]);
                    panel[1].classList.replace(panel[1].classList[0], bgClass[4]);
                    panel[2].classList.replace(panel[2].classList[0], bgClass[6]);
                }
                let buttons = function()
                {
                    let button = 
                    [
                        document.getElementById("start-timer"),
                        document.getElementById("stop-timer"),
                        document.getElementById("reset-timer"),
                    ];

                    // start button
                    button[0].classList.replace(button[0].classList[0], bgClass[2]);
                    button[0].classList.replace(button[0].classList[1], `hover:${bgClass[3]}`);

                    // stop button
                    button[1].classList.replace(button[1].classList[0], bgClass[2]);
                    button[1].classList.replace(button[1].classList[1], `hover:${bgClass[3]}`);

                    // reset button
                    button[2].classList.replace(button[2].classList[0], bgClass[2]);
                    button[2].classList.replace(button[2].classList[1], `hover:${bgClass[3]}`);
                }
                let pad = function()
                {
                    let button = [];

                    for (let i = 0; i <= 9; i++)
                    {
                        // add number pads 0-9 to array
                        button.push(document.getElementById(`button-${i}`));     
                    }

                    // change bg + hover colours of number pads 0-9
                    button.forEach((ids) => 
                    {
                        ids.classList.replace(ids.classList[0], bgClass[2]);
                        ids.classList.replace(ids.classList[1], `hover:${bgClass[3]}`);
                    });  
                }

                widget();
                panels();
                buttons();
                pad();
            }

            timer();
        }

        switchCards();
    }

    localStorage.setItem(themeType, "rose");
}