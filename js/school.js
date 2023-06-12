window.addEventListener('scroll', function() {
    var card1 = document.querySelector('.card1');
    var card2 = document.querySelector('.card2');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var minOpacity = 0.2; // Adjust this value to control the minimum opacity
    
    // Get the position and height of card1
    var card1Position = card1.offsetTop;
    var card1Height = card1.offsetHeight;

    // Calculate the position at which card1 starts fading away
    var fadeStart1 = card1Position + card1Height * 1.9;

    // Check if the user has scrolled past card1
    if (scrollTop > fadeStart1) {
        card1.style.opacity = minOpacity; // Set minimum opacity
    } else {
        // Calculate the opacity based on scroll position for card1
        var opacity1 = 1 - (scrollTop - card1Position) / (fadeStart1 - card1Position);
        card1.style.opacity = opacity1;
    }

    // Get the position and height of card2
    var card2Position = card2.offsetTop;
    var card2Height = card2.offsetHeight;

    // Calculate the position at which card2 starts fading away
    var fadeStart2 = card2Position + card2Height * 1.9;

    // Check if the user has scrolled past card2
    if (scrollTop > fadeStart2) {
        card2.style.opacity = minOpacity; // Set minimum opacity
    } else {
        // Calculate the opacity based on scroll position for card2
        var opacity2 = 1 - (scrollTop - card2Position) / (fadeStart2 - card2Position);
        card2.style.opacity = opacity2;
    }
});


//===========================================================================================================

document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".fade-in");
    for (let i = 0; i < fadeElements.length; i++) {
      fadeElements[i].style.animationDelay = i * 0.2 + "s";
    }
});
  
const textElement = document.querySelector('.fresh-text');
const skipButton = document.querySelector('.skip-button');

const textContent = "Well... this is where it all started before my journey to college. Entering high school, " +
"below is the following classes that I have taken in my high school career.\n\n<div class='hs-year'>(2016-2020)</div>\n<b>Freshmen Year:</b>\n<u>Fall " +
" Semester</u>\nWorld Geography-A\nPE High School Course I-A (9)\nIntegrated Math I-A\nBiology-A\nSpanish 3-A\nEnglish 9-A\n\n"+
"Reflection: Went smooth and went with the flow to see how high school will play out." +
"\n\n<u>Spring Semester</u>\nWorld Geography-B\nPE High School Course I-B (9)\nIntegrated Math I-B\nBiology-B\nSpanish 4-B\nEnglish 9-B\n"+
"\nReflection: Would end up going rough as I would not take school as serious and just to play around.\n\n<u>Summer Semester</u>\n" +
"Comprehensive Health\n\nReflection: Despite the learning curve, it would be a challenge to be understand the material, but was passable.\n\n"+
"<b>Sophomore Year:</b>\n<u>Fall Semester</u>\nArt Beginning-A\nEnglish 10-A\nChemistry-A\nIntegrated Math II-A\nPE High School " +
"Couse II-A (10)\nWorld History & Culture-A\n\nReflection: Slowly putting myself to understand certain concepts from other classes and somewhat " +
"understanding which courses best interests/suits me moving forward.\n\n<u>Spring Semester</u>\nArt Beginning-B\nEnglish 10-B\nChemistry-B\n"+
"Integrated Math II-B\nPE High School Course II-B(10)\nWorld History & Culture-B\n\nReflection: Despite the neutral experience that I have endured, "+
"I began to realize that some of the courses such as art and chem were not part of my interests as it had no value to me, but the other four classes "+
"is where I excelled at and had to learn to find the balance when entering future courses.\n\n<b>Junior Year:</b>\n<u>Fall Semester</u>\nEnglish 11-A\n"+
"Integrated Math III-A\nIntroduction to Design-A\nAP Computer Science Principles\nUS History-A\nCTE Sports Medicine 1-A\n\nReflection: Exposing myself "+
"to a variety of STEM career pathways to expand my experience and knowledge to know what I plan to do. In addition, this would eventually build up my "+
"interest with doing hardware architecture, do coding which at the time would be difficult, or be a kinesiologist. As fresh as it was at the time, it was "+
"a hard decision with which path I should pursue given how easily I excelled.\n\n<u>Spring Semester</u>\nEnglish 11-B\nIntegrated Math III-B\n" +
"Introduction to Design-B\nAP Computer Science Principles\nUS History-B\nCTE Sports Medicine 1-B\n\nReflection: As mentioned previously, this would be crucial for " +
"me to choose as I would have to choose to lean towards my friends at high school (medical) or the computer/hardware aspect to commit myself to as I would enter my senior year. "+
"\nFun Fact: I got creditted for an Autodesk Inventor license for my Introduction to Design-B course, which shows how proficient I am with utilizing the platform as well as knowing "+
"how to design project based hardware prototypes.\n\n<b>Senior Year:</b>\n<u>Fall Semester</u>\nCSU Expository Reading/Writing-A\nPhysics Honors-A\nPrecalculus Honors-A\n"+
"Computer Art-A\nEconomics\nPLTW Digital Electronics HN-A.\n\nReflection: Tossed in a few honors classes to prep myself for college classes and get an idea of what I will be handling "+
"and determine which pathway I will commit myself to. So far this semester has been a fun and interesting layout where I would know everyone in my classes as well as getting hands on "+
"with my applications with college and tackling certain pre-requisites to enroll to college(s).\n\n<u>Spring Semester</u>\nCSU Expository Reading/Writing-B\nPhysics Honors-B\nPrecalculus "+
"Honors-B\nComputer Art-B\nUS Government\nPLTW Digital Electronics HN-B.\n\nReflection: With this being my final semester of high school was very unexpecting for me to comprehend what I should "+
"prioritize and focus on as I entered college. With all the applications that I applied for, I was gladly accepted to be in California State University San Marcos to pursue a Software Engineer. "+
"Despite that I did Digital Electronics, that is mainly focused in electrical engineering, it would require breadboard work, as well as using Java to manuever the readings with the breadboard. "+
"When doing Java, I found it resourceful where it wouldn't require much maintenance or hardware to function something compared to breadboarding, which caught my interest to be a Software Engineer.";

let skip = false; // Flag variable to track if skip button is clicked

function type1() {
    let substring = textContent.substring(0, index);
    textElement.innerHTML = substring;
    index++;
    if (index <= textContent.length && !skip) {
      setTimeout(type1, 25); // Adjust typing speed (milliseconds)
    } else {
      skipButton.style.display = 'none';
      // setTimeout(type2, 10000);
    }
}

// Function to skip the typing animation
function skipTyping() {
    skip = true;
    textElement.innerHTML = textContent; // Set the entire text content
    index = textContent.length; // Set the index to the end of the text content
    skipButton.style.display = 'none';
}

// Attach event listener to the skip button
skipButton.addEventListener('click', skipTyping);

// Start the auto-typing effect
let index = 0;
type1();

//=============================================================================
  
const textElement2 = document.querySelector('.csusm-text');
const skipButton2 = document.querySelector('.skip-button2');

const textContent2 = "Hey there! This is where my career started as a software engineering major. Currently this is my last year of my college career and is still "+
"in the process of searching/applying internships and job opportunities to expand on my work and school expertise. The following below are the courses that I did "+
"in sequence.\n\n<b>Freshmen Year:</b>\n<u>Fall Semester</u>\nCS-111 -> Computer Science I\nGEL-101 -> The Student University Community\nHIST-130 -> US History "+
"1500-1877\nMATH-160 -> Calculus with Applications I\n\nReflection: Solid semester. Getting my grasp to balance my schedule with ROTC as well as school. During COVID "+
"would let me be more flexible and aware to keep myself up to pace to knock out the prerequisites and requirements.\n\n<u>Winter Semester</u>\nLTWR 100 -> Intro to "+
"Literature\n\nReflection: Asynchronous class that gave me more time to knock out the general ed requirements as well as doing myself a favor to not take it in the "+
"future.\n\n<u>Spring Semester</u>\nCS-211 -> Computer Science II\nGEO-102 -> Oral Communication\nGEW 101B -> Writing as Rhetorical Act\nMATH-162 -> Calculus with "+
"Applications II\nSPAN-101 -> Beginning Spanish I\n\nReflection: By far one of the most difficult semesters I had since the load of classes were a majority to worry "+
"about. It would make my experience much more unbalanced as I would have to learn how to sacrifice and learn how to set my priorities. Additionally, it would force me "+
"to adjust my focus when I had to pay attention to school or with training. As this would be the final semester for online courses, this would become a difficult task "+
"for me to know how to set my schedule for future semesters.\n\n<b>Sophomore Year:</b>\n<u>Fall Semester</u>\nBIOL-104 -> Human Biology\nCS-231 -> Assembly Language "+
"& Digital Circuits\nCS-311 -> Data Structures & Algorithms\nMATH-270 -> Basic Discrete Math\n\nReflection: ";

let skip2 = false; // Flag variable to track if skip button is clicked

function type2() {
    let substring = textContent2.substring(0, index2);
    textElement2.innerHTML = substring;
    index2++;
    if (index2 <= textContent2.length && !skip2) {
      setTimeout(type2, 25); // Adjust typing speed (milliseconds)
    } else {
      skipButton2.style.display = 'none';
    }
}

// Function to skip the typing animation
function skipTyping2() {
    skip2 = true;
    textElement2.innerHTML = textContent2; // Set the entire text content
    index2 = textContent2.length; // Set the index to the end of the text content
    skipButton2.style.display = 'none';
}

// Attach event listener to the skip button
skipButton2.addEventListener('click', skipTyping2);

// Start the auto-typing effect
let index2 = 0;
type2();

//===========================================================================================================

const cardWrapper = document.querySelector('.card-wrapper');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

window.addEventListener('scroll', function() {
// Check if the user has scrolled enough to show the buttons
    if (window.scrollY > 50) {
        prevButton.style.opacity = '1';
        nextButton.style.opacity = '1';
    } else {
        prevButton.style.opacity = '0';
        nextButton.style.opacity = '0';
    }
});

const cards = Array.from(cardWrapper.getElementsByClassName('card'));
let currentIndex = 0;

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCardVisibility();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    updateCardVisibility();
  }
});

function updateCardVisibility() {
  cards.forEach((card, index) => {
    if (index === currentIndex) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Show the initial active card
updateCardVisibility();

//=====================================================================================================