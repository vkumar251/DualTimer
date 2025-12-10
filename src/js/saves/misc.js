// unused functions
function swapBg700(selector, newColor) 
{
    const elements = document.querySelectorAll(selector);

    elements.forEach(el => 
    {
        const currentBgClass = Array.from(el.classList).find(cls => cls.startsWith("bg-") && cls.endsWith("-700"));

        if (currentBgClass) 
        {
            // Replace bg-<color>-700 to bg-<newColor>-700
            el.classList.replace(currentBgClass, `bg-${newColor}-700`);
        } 
        else 
        {
            // add bg-<color>-700 if not found
            el.classList.add(`bg-${newColor}-700`);
        }
    });
}

function swapBgClass(el, newColor, palette = "700") 
{
    const currentBg = Array.from(el.classList).find(cls =>
        cls.startsWith("bg-") && cls.endsWith(`-${palette}`)
    );

    if (currentBg) 
    {
        el.classList.replace(currentBg, `bg-${newColor}-${palette}`);
    } 
    else 
    {
        el.classList.add(`bg-${newColor}-${palette}`);
    }
}
