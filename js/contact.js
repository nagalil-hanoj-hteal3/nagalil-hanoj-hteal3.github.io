// JavaScript code to create auto-typing effect
const textElement = document.querySelector('.typing-text');
const skipButton = document.querySelector('.skip-button');

const text = "What's up! I welcome you to contact me with the following four communication "+
"outlets below in case email may not be your cup of tea. Feel free to reach out to me if " +
"you want to learn more about me in real-time.\n\nIt has been a pleasure for you to stop by and " +
"learn about me in my website. I look forward to learn and connect with you in the future! 😄😁✌️";

let skip = false; // Flag variable to track if skip button is clicked

function type() {
    let substring = text.substring(0, index);
    textElement.textContent = substring;
    index++;
    if (index <= text.length && !skip) {
        setTimeout(type, 35); // Adjust typing speed (milliseconds)
    } else{
        skipButton.style.display = 'none'; //hide the skip button
    }
}

// Function to skip the typing animation
function skipTyping() {
    skip = true;
    textElement.textContent = text;
    index = text.length; // Set the index to the end of the text
    skipButton.style.display = 'none';
}

// Attach event listener to the skip button
skipButton.addEventListener('click', skipTyping);

// Start the auto-typing effect
let index = 0;
type();