// increment second when milliseconds reach 1000
if (stopwatch.getMlseconds() >= 1000)
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

            // end timer when full day passes
            if (stopwatch.getHours() >= 24)
            {
                console.warn("Full day passed: Terminating timer...");

                // reset timer
                stopwatch.setHours(0);
                stopwatch.setMinutes(0);
                stopwatch.setSeconds(0);
                stopwatch.setMlseconds(0);

                // terminate interval
                clearInterval(msInterval);
                return;
            }

            stopwatch.setHours(stopwatch.getHours());
        }

        stopwatch.setMinutes(stopwatch.getMinutes());
    }

    stopwatch.setSeconds(stopwatch.getSeconds());
}
const object = 
{
    setBgPalette: function(value)
    {
        document.getElementById(this.getId()).classList.replace(`bg-${this.getBgColor()}-${this.getBgPalette()}00`, `bg-${this.getBgColor()}-${value}00`);
    }
}
function set()
{
    if (digits.length === 0)
    {
        return;
    }

    updateDisplay();

    document.getElementById("message-set").classList.remove("hidden");
    document.getElementById("message-reset").classList.add("hidden");
}