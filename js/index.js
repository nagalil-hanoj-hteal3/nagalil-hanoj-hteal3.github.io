// JavaScript code to create auto-typing effect
const textElement = document.querySelector('.typing-text');
const text = "Welcome to my website. Pick any of the following below to learn more about me.";
let index = 0;

function type() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 50); // Adjust typing speed (milliseconds)
    }
}

// Start the auto-typing effect
type();