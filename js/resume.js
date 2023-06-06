// JavaScript code to create auto-typing effect
const textElement = document.querySelector('.typing-text');
const text = `Hey there!👋👋\n\nAttached is my resume that highlights my experience consisting of my leadership, work experience, ` +
`and relevant projects I completed in school. Throughout my career, I have continually shown a dedication to ` +
`quality throughout my experience by providing great outcomes in teamwork and individual growth.\n\nPrior to working, I started as a cadet in Detachment 075 for the Air Force ROTC. ` +
`The reason I joined was because of my military status that runs in my family and my curiosity of where to start after high school. Being apart of something like this provided me to be ` +
`more strategic, take more risks, think critically, and to test the red. This program allowed me to build myself as a leader to guide my peers through execution phases and scenarios of ` +
`everyday situations. Unfortunately, I would not be able to stay longer due to commute and time conflicts, which led me to be discharged from the program, however, relate and applying ` +
`necessary skills and teachings my colleagues and peers have taught me will be the biggest lesson that I can ever ask.` +
`\n\nAs I no longer had any training, I started working in my school as a STEM SC tutor to assist and teach students in computer science in a range of beginner to advanced courses. ` +
`` +
`\n\nCurrently, the projects that I did consist of the following.\n1.) In my BookEZ project this involved Java and MySQL, which considered a PDF API to read files that are ` + 
`read into the GUI to display the following receipts from eBay into an ROI (Return on Investment) Table that can be sorted and ` + 
`imported. In addition, it runs concurrently with MySQL database to consistently update the following items from the GUI and database ` +
`in real-time that keeps of track of a user that logs into the GUI and lists of receipts that user imports into their account.\n` +
`2.) This project called FitRat was a shopping application that used HTML, CSS, JavaScript, and PHP. The following outside resources that were used was ChatGPT `+
`(to find alternative solutions to implement our webpage), T-Shirt Time (allowing us to create customized clothing to display), and GitHub to utilize delayed party times. ` +
`As the rest were simple to handle, PHP on the other hand was the biggest curve to jump over due to it being less used in today's time, but ended up getting it to `+
`successfully work to get login and item credentials.\n3.) Given a Tetris application from my professor, my group and I were instantly tasked to develop JUnit test cases `+
`that must be covered from the application hence allowing us to use JaCoCo (coverage tool that is covered from application and test requirements) and JUnit4 to achieve this. ` +
`Overall, the JaCoCo score would end up being 99% total, however it would vary around 97.5-99% as it fails to not keep the rotate piece testing consistently. More information can `+
`be found in my GitHub.👇👇\n4.) Finally, this was a unique project where I had to work in pairs to implement a UNIX shell in C++/C. In other words, this project was to create terminal/command ` + 
`prompt to take in commands such as grep, ps -aef, ls -l, date, redirections '<' and '>', UNIX pipe '|', adding '&' within the command line and any invalid commands. `+
`This project allowed me to practice with pair programming that can easily strengthen and improve our focus to implement the project.\nAlbeit that the number of projects that I did `+
`are minimal, this would give me a chance to build on learning all possible outlets that I can expose myself with and later on reference to in the future.`;

function type() {
    let substring = text.substring(0, index);
    textElement.textContent = substring;
    index++;
    if (index <= text.length) {
        setTimeout(type, 35); // Adjust typing speed (milliseconds)
    }
}

// Start the auto-typing effect
let index = 0;
type();

