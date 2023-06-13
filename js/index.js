const textElement = document.querySelector('.typing-text');
const text = "Thank you for visiting my webpage. Feel free to discover more about me based on the options below. "+
"Feel free to view the rest of the other pages of your interest! It is my pleasure to have you here! ";

let index = 0;

function type() {
    let substring = text.substring(0, index);
    textElement.textContent = substring;
    index++;
    if (index <= text.length) {
        setTimeout(type, 35); // Adjust typing speed (milliseconds)
    } else {
        // Start typing the date
        const textElem = document.querySelector('.date-type');
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        
        const today = new Date().toLocaleDateString('en-US', options);
        let index2 = 0;

        function type2() {
            if (index2 < today.length) {
                textElem.textContent += today.charAt(index2);
                index2++;
                setTimeout(type2, 50); // Adjust typing speed (milliseconds)
            }
        }

        // Start the date auto-typing effect
        type2();
    }
}
// Start the first auto-typing effect
type();

//======================================================================================================================

// // Start the clock update
// function updateClock() {
//     const clockElem = document.querySelector('.clock');
//     const currentTime = new Date();
//     const hours = currentTime.getHours();
//     const minutes = currentTime.getMinutes();
//     const seconds = currentTime.getSeconds();
//     const milliseconds = currentTime.getMilliseconds();

//     const formattedTime = `${hours}:${minutes}:${seconds}:${milliseconds}`;
//     clockElem.textContent = formattedTime;
// }

// // Update the clock every second (1000 milliseconds)
// setInterval(updateClock, 1);