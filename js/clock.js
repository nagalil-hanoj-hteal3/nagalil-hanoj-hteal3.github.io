// Start the clock update
function updateClock() {
    const clockElem = document.querySelector('.clock');
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const milliseconds = currentTime.getMilliseconds();

    const formattedTime = `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
    clockElem.textContent = formattedTime;
}

// Update the clock every second (1000 milliseconds)
setInterval(updateClock, 1);