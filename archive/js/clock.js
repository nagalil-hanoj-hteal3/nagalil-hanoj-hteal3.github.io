// Start the clock update
function updateClock() {
    const clockElem = document.querySelector('.clock');
    const currentTime = new Date();
    // const hours = currentTime.getHours();
    // const minutes = currentTime.getMinutes();
    // const seconds = currentTime.getSeconds();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    const milliseconds = currentTime.getMilliseconds();

    // Determine AM or PM
    const meridiem = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hours is 0, set it to 12

    // Add leading zeros if hours, minutes, or seconds are single digits
    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    const formattedTime = `${hours} : ${minutes} : ${seconds} : ${milliseconds} ${meridiem}`;
    clockElem.textContent = formattedTime;
}

// Update the clock every second (1000 milliseconds)
setInterval(updateClock, 1);

//====================================================================

function showAlert() {
    alert("Hehe nice try!");
}