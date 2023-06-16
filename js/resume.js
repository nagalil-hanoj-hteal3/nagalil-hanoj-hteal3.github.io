// JavaScript code to create auto-typing effect
const textElement = document.querySelector('.typing-text');
const skipButton = document.querySelector('.skip-button');

const text = "I'm a California State University San Marcos student studying software engineering with a lot of drive. "+
"I'm now pursuing a B.S. in software engineering, and with a 3.31 GPA, I should be done in the spring of 2024. I have "+
"developed a solid foundation in software development ideas and technologies during the course of my academic career.\n\n"+
"In my position as a Stem SC Tutor at California State University San Marcos, I have had the opportunity to put my expertise "+
"to use and help other students with their studies. I have assisted students in overcoming obstacles and succeeding in their "+
"computer science courses by offering advice and helpful criticism through efficient communication and teamwork. In both lower "+
"and upper-division classes, I have successfully assisted over 100 students.\n\nAdditionally, my work as a CS433: Operating "+
"Systems Grader has allowed me to obtain useful expertise. I've had to grade homework assignments, keep up-to-date student records, "+
"and help about 60 students with their coursework and test-taking throughout my time in this job. Students have benefited from my "+
"advice and clarifications since they now comprehend the material better and do better in their coursework.\n\nIn addition, I have "+
"contributed to a number of pertinent projects that have improved my software development abilities. For instance, I created the C "+
"and C++ program Unix-Shell, which serves as a shell interface and simplifies user commands through different system calls. "+
"Furthermore, I developed BookEZ, a Java application that generates ROI tables and computes net profit to make bookkeeping for eBay "+
"sellers simpler. An SQL database for user login and a GUI for receipt uploads have to be integrated as part of this project. "+
"Additionally, I created JUnit test cases for a Tetris video game using a variety of testing methods to obtain a high code coverage "+
"of 99%.\n\nAlong with my technical abilities, I have a solid command of a number of languages, including Java, C++/C, JavaScript, "+
"HTML/CSS, and SQL. I have expertise with operating systems including Windows, Unix, and Linux, as well as tools like Visual Studio "+
"Code, JUnit4, and GitHub. I am a valued asset in the field of software engineering because of my rapid learning curve and commitment "+
"to lifelong learning.\n\nI appreciate your taking a look at my resume. I'm interested in learning more about how my qualifications "+
"fit your needs. Contact me at any time if you need further details or to arrange an interview.";

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

