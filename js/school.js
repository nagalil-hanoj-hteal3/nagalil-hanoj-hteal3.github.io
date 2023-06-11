window.addEventListener('scroll', function() {
    var card = document.querySelector('.card');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // var scrollPercent = scrollTop / (document.documentElement.scrollHeight - window.innerHeight);
    var minOpacity = 0.2; // Adjust this value to control the minimum opacity
    
    // Get the position and height of the card
    var cardPosition = card.offsetTop;
    var cardHeight = card.offsetHeight;

    // Calculate the position at which the card starts fading away
    var fadeStart = cardPosition + cardHeight * 1.9;

    // Check if the user has scrolled past the card
    if (scrollTop > fadeStart) {
        card.style.opacity = minOpacity; // Set minimum opacity
    } else {
        // Calculate the opacity based on scroll position
        var opacity = 1 - (scrollTop - cardPosition) / (fadeStart - cardPosition);
        card.style.opacity = opacity;
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
"below is the following classes that I have taken in my high school career.\n\n<b>Freshmen Year:</b>\n<u>Fall " +
" Semester</u> - World Geography-A, PE High School Course I-A (9), Integrated Math I-A, Biology-A, Spanish 3-A, English 9-A\n"+
"Reflection: Went smooth and went with the flow to see how high school will play out." +
"\n\n<u>Spring Semester</u> - World Geography-B, PE High School Course I-B (9), Integrated Math I-B, Biology-B, Spanish 4-B, English 9-B"+
"\nReflection: Would end up going rough as I would not take school as serious and just to play around.\n\n<u>Summer Semester</u> - " +
"Comprehensive Health\nReflection: Despite the learning curve, it would be a challenge to be understand the material, but was passable.\n\n"+
"<b>Sophomore Year:</b>\n<u>Fall Semester</u> - Art Beginning-A, English 10-A, Chemistry-A, Integrated Math II-A, PE High School " +
"Couse II-A (10), World History & Culture-A\nReflection: Slowly putting myself to understand certain concepts from other classes and somewhat " +
"understanding which courses best interests/suits me moving forward.\n\n<u>Spring Semester</u> - Art Beginning-B, English 10-B, Chemistry-B, "+
"Integrated Math II-B, PE High School Course II-B(10), World History & Culture-B\nReflection: Despite the neutral experience that I have endured, "+
"I began to realize that some of the courses such as art and chem were not part of my interests as it had no value to me, but the other four classes "+
"is where I excelled at and had to learn to find the balance when entering future courses.\n\n<b>Junior Year:</b>\n<u>Fall Semester:</u> - English 11-A, "+
"Integrated Math III-A, Introduction to Design-A, AP Computer Science Principles, US History-A, CTE Sports Medicine 1-A\nReflection: Exposing myself "+
"to a variety of STEM career pathways to expand my experience and knowledge to know what I plan to do. In addition, this would eventually build up my "+
"interest with doing hardware architecture, do coding which at the time would be difficult, or be a kinesiologist. As fresh as it was at the time, it was "+
"a hard decision with which path I should pursue given how easily I excelled.\n\n<u>Spring Semester</u> - English 11-B, Integrated Math III-B, " +
"Introduction to Design-B, AP Computer Science Principles, US History-B, CTE Sports Medicine 1-B\nReflection: As mentioned previously, this would be crucial for " +
"me to choose as I would have to choose to lean towards my friends at high school (medical) or the computer/hardware aspect to commit myself to as I would enter my senior year. "+
"\nFun Fact: I got creditted for an Autodesk Inventor license for my Introduction to Design-B course, which shows how proficient I am with utilizing the platform as well as knowing "+
"how to design project based hardware prototypes.\n\n<b>Senior Year:</b>\n<u>Fall Semester</u> - CSU Expository Reading/Writing-A, Physics Honors-A, Precalculus Honors-A, "+
"Computer Art-A, Economics, PLTW Digital Electronics HN-A.\nReflection: Tossed in a few honors classes to prep myself for college classes and get an idea of what I will be handling "+
"and determine which pathway I will commit myself to. So far this semester has been a fun and interesting layout where I would know everyone in my classes as well as getting hands on "+
"with my applications with college and tackling certain pre-requisites to enroll to college(s).\n\n<u>Spring Semester</u> - CSU Expository Reading/Writing-B, Physics Honors-B, Precalculus "+
"Honors-B, Computer Art-B, US Government, PLTW Digital Electronics HN-B.\nReflection: With this being my final semester of high school was very unexpecting for me to comprehend what I should "+
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
const cardWrapper = document.querySelector('.card-wrapper');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
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