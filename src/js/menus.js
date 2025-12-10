// objects
const header = 
{
    bgColor: "bg-cyan-950",
    textColor: "text-neutral-50",
    letterSpacing: "tracking-widest",
    width: "full",
    minHeight: "min-h-[60px]",
    padding: 2,
    displayType: "flex",
    align: "items-center",
    
    getBgColor: function() {return this.bgColor;},
    getTextColor: function() {return this.textColor;},
    getLetterSpacing: function() {return this.letterSpacing;},
    getWidth: function() {return this.width;},
    getMinHeight: function() {return this.minHeight;},
    getPadding: function() {return this.padding;},
    getDisplayType: function() {return this.displayType;},
    getAlign: function() {return this.align;},

    setBgColor: function(value)
    {
        document.querySelector("header").classList.replace(this.bgColor, value);
        this.bgColor = value;
    },
    setTextColor: function(value)
    {
        document.querySelector("header").classList.replace(this.textColor, value);
        this.textColor = value;
    },
}
const sidebar = 
{
    width: 0,
    isOpen: false,
    bgColor: "bg-cyan-950",
    bgHoverColor: "hover:bg-cyan-900",
    classA: ["fixed", "top-0", "right-0", "z-[1000]", "h-full", "w-[0vw]"],
    classB: ["fixed", "top-0", "left-0", "z-[1000]", "h-full", "w-[0vw]"],

    getWidth: function() {return this.width;},
    setWidth: function(value)
    {
        this.width = value;

        const sidebarMenu = document.querySelector("#sidebar-menu");
        const sidebarPane = document.querySelector("#sidebar-pane");
        const widthClasses = ["w-[0vw]", "w-[50vw]"];

        widthClasses.forEach(w => 
        {
            sidebarMenu.classList.remove(w);
            sidebarPane.classList.remove(w);
        });

        let newWidth;
        if (value === 0)
        {
            newWidth = "w-[0vw]";
        }
        else
        {
            newWidth = "w-[50vw]";
        }

        sidebarMenu.classList.add(newWidth);
        sidebarPane.classList.add(newWidth);
    },
    getBgColor: function() {return this.bgColor;},
    getBgHoverColor: function() {return this.bgHoverColor;},
    setBgColor: function(value, hoverValue)
    {
        const sidebarMenu = document.querySelector("#sidebar-menu");
        const sidebarList = document.querySelector("#sidebar-menu-list");
        const sidebarItems = sidebarList.querySelectorAll("li a");
        
        sidebarMenu.classList.replace(this.getBgColor(), value);

        for (let i = 0; i < sidebarItems.length; i++)
        {
            sidebarItems[i].classList.replace(this.getBgHoverColor(), hoverValue);
        }

        this.bgColor = value;
        this.bgHoverColor = hoverValue;
    },
    setOpen: function(value)
    {
        this.isOpen = value;

        // create custom event
        document.dispatchEvent(new CustomEvent("toggleSB", 
        {
            detail: {isOpen: value},
        }));
    },
    getClass: function(category, index)
    {
        if (index == null)
        {
            // print error message if second parameter isn't called
            return "Index number not entered";
        }
        else
        {
            if (category === "classA" || category === "a" || category === "A")
            {
                if (!(this.classA[index] === undefined))
                {
                    return this.classA[index];
                }
                else
                {
                    return "Array index " + index + " not found.";
                }
            }
            else if (category === "classB" || category === "b" || category === "B")
            {
                if (!(this.classB[index] === undefined))
                {
                    return this.classB[index];
                }
                else
                {
                    return "Array index " + index + " not found.";
                }
            }
            else
            {
                return "Class category not found";
            }
        }
    },
    getClassList: function(category)
    {
        switch (category)
        {
            case "a":
                return this.classA; break;
            case "A":
                return this.classA; break;
            case "classA":
                return this.classA; break;
            case "b":
                return this.classB; break;
            case "B":
                return this.classB; break;
            case "classB":
                return this.classB; break;
            default:
                return "Class category not found"; break;
        }
    },
    getClassLength: function(category)
    {
        switch (category)
        {
           case "a": 
                return this.classA.length; break;
           case "A": 
                return this.classA.length; break;
           case "classA": 
                return this.classA.length; break;
           case "b": 
                return this.classB.length; break;
            case "B":
                return this.classB.length; break;
            case "classB":
                return this.classB.length; break;
            default:
                return "Class category not found"; break; 
        }
    },
}
const dropdown =
{
    bgColor: "bg-cyan-950",
    bgHoverColor: "hover:bg-cyan-900",

    getBgColor: function() {return this.bgColor;},
    getBgHoverColor: function() {return this.bgHoverColor;},
    setBgColor: function(value, hoverValue) 
    {
        const dropdownMenu = document.querySelector("#themes-dropdown");
        const dropdownList = document.querySelector("#themes-dropdown-list");
        const dropdownItems = dropdownList.querySelectorAll("li");

        // update dropdown background
        dropdownMenu.classList.replace(this.getBgColor(), value);

        for (let i = 1; i < dropdownItems.length; i++) 
        {
            dropdownItems[i].classList.remove(this.getBgHoverColor());
            dropdownItems[i].classList.add(hoverValue);
        }

        this.bgColor = value;
        this.bgHoverColor = hoverValue;
    },
}
const main = 
{
    gradientType: "bg-radial",
    gradientStart: "from-cyan-100",
    gradientEnd: "to-cyan-700",
    gradientDepth: "from-50%",

    getGradientType: function() {return this.gradientType;},
    getGradientStart: function() {return this.gradientStart;},
    getGradientEnd: function() {return this.gradientEnd;},
    getGradientDepth: function() {return this.gradientDepth;},

    setGradient: function(startColor, endColor, depth)
    {
        const m = document.getElementsByTagName("main")[0];

        m.classList.replace(this.getGradientStart(), startColor);
        m.classList.replace(this.getGradientEnd(), endColor);
        m.classList.replace(this.getGradientDepth(), depth);

        this.gradientStart = startColor;
        this.gradientEnd = endColor;
        this.gradientDepth = depth;
    },
}
const footer = 
{
    bgColor: "bg-cyan-950",
    textColor: "text-zinc-300",
    letterSpacing: "tracking-widest",
    width: "full",
    minHeight: 60,
    paddingX: 0,
    paddingY: 2,

    getBgColor: function() {return this.bgColor;},
    getTextColor: function() {return this.textColor;},
    getLetterSpacing: function() {return this.letterSpacing;},
    getWidth: function() {return this.width;},
    getMinHeight: function() {return this.minHeight;},
    getPaddingX: function() {return this.paddingX;},
    getPaddingY: function() {return this.paddingY;},

    setBgColor: function(value)
    {
        document.querySelector("footer").classList.replace(this.bgColor, value);
        this.bgColor = value;
    },
    setTextColor: function(value)
    {
        document.querySelector("footer").classList.replace(this.textColor, value);
        this.textColor = value;
    },
}

// arrow functions
const createHeader = () => 
{
    const headerQ = document.querySelector("header");
    const headerClass = 
    [
        header.getMinHeight(),
        `w-${header.getWidth()}`,
        `p-${header.getPadding()}`,
        header.getBgColor(),
        header.getTextColor(),
        header.getDisplayType(),
        header.getAlign(),
        header.getLetterSpacing()
    ];

    for (let i = 0; i < headerClass.length; i++)
    {
        headerQ.classList.add(headerClass[i]);
    }

    headerQ.innerHTML =
    `
    <nav class="flex justify-around w-full">
        <div id="logo">
            <a href="index.html" class="text-3xl font-bold text-fuchsia-400 text-shadow-lg text-shadow-fuchsia-950 vast-shadow-regular tracking-normal text-[20px] md:text-2xl">
                <i class="fa-regular fa-clock"></i> Dual<span class="text-fuchsia-300">Timer</span>
            </a>
        </div>
        <div id="nav-items">
            <ul class="text-2xl flex gap-10 lg:gap-20">
                <li><a href="timer.html" 
                    class="text-zinc-300 hover:text-zinc-500 duration-300 ease-in-out hidden md:block text-2xl">
                    Timer
                </a></li>
                <li><a href="stopwatch.html" 
                    class="text-zinc-300 hover:text-zinc-500 duration-300 ease-in-out hidden md:block text-2xl">
                    Stopwatch
                </a></li>
                <li class="relative">
                    <button id="themes-button" class="cursor-pointer text-zinc-300 hover:text-zinc-500 duration-300 ease-in-out block text-[20px]">
                        <i class="fa-solid fa-palette"></i> <i id="dd-arrow-themes" class="fa-solid fa-caret-down"></i>
                    </button>
                    <div id="themes-dropdown" 
                    class="absolute right-0 z-[1000] mt-2 text-zinc-200 rounded shadow-lg border border-zinc-700 hidden">
                        <ul id="themes-dropdown-list" class="flex flex-col">
                            <li class="px-4 py-2 text-amber-500 whitespace-nowrap">Themes:</li>
                            <li id="cyan-button" class="px-4 py-2 cursor-pointer whitespace-nowrap">Cyan Mode (default)</li>
                            <li id="emerald-button" class="px-4 py-2 cursor-pointer whitespace-nowrap">Emerald Mode</li>
                            <li id="yellow-button" class="px-4 py-2 cursor-pointer whitespace-nowrap">Yellow Mode</li>
                            <li id="indigo-button" class="px-4 py-2 cursor-pointer whitespace-nowrap">Indigo Mode</li>
                            <li id="rose-button" class="px-4 py-2 cursor-pointer whitespace-nowrap">Rose Mode</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <button id="sidebar-button" 
                    class="cursor-pointer text-zinc-300 hover:text-zinc-500 duration-300 ease-in-out block md:hidden text-[20px]">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </li>
            </ul>
        </div>
    </nav>
    `;
    const dropdownMenu = document.querySelector("#themes-dropdown");
    const dropdownList = document.querySelector("#themes-dropdown-list");
    const dropdownItems = dropdownList.querySelectorAll("li");

    // add default background colour to dropdown menu
    dropdownMenu.classList.add(dropdown.getBgColor());
    
    for (let i = 1; i < dropdownItems.length; i++) 
    {
        // add default hover background colour to list items
        dropdownItems[i].classList.add(dropdown.getBgHoverColor());
    }
}
const createSidebar = () => 
{
    const sidebarQ = document.querySelector("#sidebar");

    sidebarQ.innerHTML = 
    `
    <div id="sidebar-menu">
        <ul id="sidebar-menu-list" class="text-zinc-200 text-2xl">
        <li><a href="index.html" class="${sidebar.getBgHoverColor()} block text-center p-2">Home</a></li>
            <li><a href="timer.html" class="${sidebar.getBgHoverColor()} block text-center p-2">Timer</a></li>
            <li><a href="stopwatch.html" class="${sidebar.getBgHoverColor()} block text-center p-2">Stopwatch</a></li>
        </ul>
    </div>
    <div id="sidebar-pane"></div>
    `;

    const sidebarMenuQ = document.getElementById("sidebar-menu");
    const sidebarPaneQ = document.getElementById("sidebar-pane");

    sidebarMenuQ.classList.add(sidebar.getBgColor());

    let x = 0; let y = 0;

    do
    {
        sidebarMenuQ.classList.add(sidebar.getClass("classA", x));
        x++;
    }
    while (x < sidebar.getClassLength("classA"));

    do
    {
        sidebarPaneQ.classList.add(sidebar.getClass("classB", y));
        y++;
    }
    while (y < sidebar.getClassLength("classB"));
}
const createFooter = () =>
{
    const footerQ = document.querySelector("footer");
    const footerClass = 
    [
        footer.getBgColor(), 
        footer.getTextColor(), 
        footer.getLetterSpacing(), 
        `min-h-[${footer.getMinHeight()}px]`, 
        `w-${footer.getWidth()}`, 
        `py-${footer.getPaddingY()}`
    ];

    for (let i = 0; i < footerClass.length; i++) 
    {
        footerQ.classList.add(footerClass[i]);
    }

    footerQ.innerHTML =
    `
    <nav class="flex justify-center w-full gap-10 py-1">
        <div class="text-2xl">
            <a href="https://github.com/vkumar251/DualTimer"
            target="_blank"
            class="${footer.textColor} hover:text-zinc-500 duration-300 ease-in-out">
                <i class="fa-solid fa-code"></i>
            </a>
        </div>
        <div class="text-2xl">
            <a href="https://tailwindcss.com"
            target="_blank"
            class="${footer.textColor} hover:text-zinc-500 duration-300 ease-in-out">
                <i class="devicon-tailwindcss-original"></i>
            </a>
        </div>
    </nav>
    <div class="text-center">
        <p class="text-2xl text-fuchsia-200">&copy; 2023 DualTimer Project</p>
        <p class="text-xl text-fuchsia-50">Built with Tailwind 4.1</p>
    </div>
    `;
}

// generate header and footer
createHeader();
createSidebar();
appendMain();
createFooter();

let sbButton = document.getElementById("sidebar-button");
let sbPane = document.getElementById("sidebar-pane");

// event listeners
sbButton.addEventListener("click", () => {toggleSidebar();});
sbPane.addEventListener("click", () => {toggleSidebar();});
document.addEventListener("toggleSB", (e) => 
{
    if (e.detail.isOpen)
    {
        sidebar.setWidth(50);
    }
    else
    {
        sidebar.setWidth(0);
    }
});

// other functions
function appendMain()
{
    const m = document.getElementsByTagName("main")[0];
    m.classList.add("flex-1");

    // apply default gradient
    m.classList.add(main.getGradientType());
    m.classList.add(main.getGradientStart());
    m.classList.add(main.getGradientEnd());
    m.classList.add(main.getGradientDepth());
}
function toggleSidebar()
{
    if (sidebar.isOpen)
    {
        sidebar.setOpen(false);
    }
    else
    {
        sidebar.setOpen(true);
    }
}