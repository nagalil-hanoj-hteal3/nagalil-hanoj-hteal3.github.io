const textElement = document.querySelector('.typing-text');
const text = "Welcome to my website. Pick any of the following below to learn more about me.";

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