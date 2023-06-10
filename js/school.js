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
"is where I excelled at and had to learn to find the balance when entering future courses.\n\n<b>Junior Year:</b>\n<u>Fall Semester:</u>";

let skip = false; // Flag variable to track if skip button is clicked

function type1() {
    let substring = textContent.substring(0, index);
    textElement.innerHTML = substring;
    index++;
    if (index <= textContent.length && !skip) {
        setTimeout(type1, 25); // Adjust typing speed (milliseconds)
    } else {
        skipButton.style.display = 'none';
        setTimeout(type2, 10000);
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

