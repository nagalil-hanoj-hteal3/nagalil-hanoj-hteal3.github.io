document.addEventListener("DOMContentLoaded", function() {
  const fadeElements = document.querySelectorAll(".fade-in");
  for (let i = 0; i < fadeElements.length; i++) {
    fadeElements[i].style.animationDelay = i * 0.2 + "s";
  }
});

const textElement1 = document.querySelector('.fresh-text');
const textContent1 = "Well... this is where it all started before my journey to college. Entering high school, " +
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
"When doing Java, I found it resourceful where it wouldn't require much maintenance or hardware to function something compared to breadboarding, which caught my interest to be a Software Engineer."+
"\n\n<hr>\n<div class='rotc'>My Experience:</div>"+
"";
let index1 = 0;
let skip1 = false;

function type1() {
  let substring = textContent1.substring(0, index1);
  textElement1.innerHTML = substring;
  index1++;
  if (index1 <= textContent1.length && !skip1) {
    setTimeout(type1, 25);
  }
}

function skipTyping1() {
  skip1 = true;
  textElement1.innerHTML = textContent1;
  index1 = textContent1.length;
}

//===========================================================================================================================================================================================================================

const textElement2 = document.querySelector('.csusm-text');
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
"& Digital Circuits\nCS-311 -> Data Structures & Algorithms\nMATH-270 -> Basic Discrete Math\n\nReflection: Transitioning back to in person training and classes would "+
"be rough and unprecedented as it has been two years that I have went back to school in person. Although my anxiety of coming back kicks in, I was also excited to see "+
"and experience the life of a college student and to meet new people. Given that this would be a rough semester with adjusting my schedule, it would continue to be my "+
"challenge that I would have to build and sooner or later would be simple for me to handle.\n\n<u>Spring Semester</u>\nCS-351 -> Programming Languages\nMATH-242 -> "+
"Introduction to Statistics\nPHIL-110 -> Critical Thinking\nPHYS-101 -> Introduction to Physics I\nSE-370 -> Introduction to Software Engineering\n\nReflection: Entering "+
"upper division courses as well as adding in general ed requirements. Not only was that a challenge, but involving training during draft selection would be crucial. "+
"Unfortunately, it would not be possible for me to balance between training and school at the same time due to commute and time conflicts. It would then force me to "+
"focus myself with academics rather than prioritizing training as well to keep myself competitive in draft selection. From here, this was where I chose to pursue my education."+
"\n\n<b>Junior Year:</b>\n<u>Fall Semester</u>\nCS-331 -> Computer Architecture\nCS-433 -> Operating Systems\nCS-443 -> Database Systems\nMATH-264 -> Introduction to Linear "+
"Algebra\nSE-451 -> Software Requirements and Design\n\nReflection: With my first semester out of ROTC, this sparked a new journey to explore my options with my education "+
"career. Going heavy into my software engineering major to learn which types of computer classes that interests me. For the meantime, I decided to take CS courses that would "+
"be prerequisites for other courses to see if I can obtain that same interest into the future courses. As far as I can say, it was easy to say that the CS courses that I "+
"would take are mainly software instead of hardware due to its flexibility and mantainability.\n\n<u>Spring Semester</u>\nCIS-444 -> Web Programming\nCS-446 -> Cloud Computing\n"+
"GEOG-201 -> World Regional Geography\nSE-461 -> Software Testing & Quality\nSE-471 -> Software Architecture\n\nReflection: By far one of the funnest semesters I have been a part of."+
" Not only would this be a crucial semester for me to obtain practices into future courses, but one of my successful semesters yet in college. Some projects I did here this semester "+
"would be applied into my resume and experiences for me to display for interviews and colleagues to practice more of my software engineering principles into projects. This would also "+
"be my first semester I started working as a grader and a tutor, which expanded my knowledge of how to apply more knowledge from other peers to understand concepts in different ways.\n\n"+
"<u>Summer Semester</u>\nPHYS-102 -> Introduction to Physics II\n\nReflection: \n\n<b>Senior Year:</b>\n<u>Fall Semester</u>\nCS-481 -> Intro to Mobile Programming\nPHIL-348 -> Ethics "+
"in Engineering\nSE-481 -> Software Project Plan & Management\nSE-490 -> Senior Project I\n\nReflection: to be added"+
"\n\n<hr>\n<div class='rotc'>My Experience:</div>"+
"To be added";
let index2 = 0;
let skip2 = false;

function type2() {
  let substring = textContent2.substring(0, index2);
  textElement2.innerHTML = substring;
  index2++;
  if (index2 <= textContent2.length && !skip2) {
    setTimeout(type2, 25);
  }
}

function skipTyping2() {
  skip2 = true;
  textElement2.innerHTML = textContent2;
  index2 = textContent2.length;
}

//===========================================================================================================================================================================================================================

const textElement3 = document.querySelector('.sdsu-text');
const textContent3 = "Standby. Area-tenchut!\n\nAt ease. Ladies & Gentlemen, this is where my training career has been established. First off, let's begin how I was "+
"a part of this detachment.\n\nFun story, I began this program three weeks when it first started since I was not offically enrolled into SDSU as I am a student in CSUSM. "+
"Since I was not 'enrolled' into campus, I had to get the process complete to be in SDSU, however, since this was during COVID, this would allow me to start training.\n\n"+
"<div class='sdsu-year'>(2020-2022)</div>\n<b>Freshmen Year:</b> Start of IMT also known as Introductory Training for ROTC.\n\n<u>Fall Semester</u>\nLeadership Labratory\nAS-100-A\nNovember"+
"Flight\nRank: C/4C\n\nReflection: Being apart of a leadership program for the first time would be a very interesting position as there are people with different perspective of "+
"how to approach situations. At times it can be a success or failure depending on the team as some people can get along versus others. Learning how to swallow my pride was the "+
"one thing I had to do for not preventing any friction and sour in a team. Given that this was online, it would lack on the in person experience of controlling the flow and "+
"not having that in person camaraderie of meeting the other cadets in person would be the drawback of this experience.\n\n<u>Spring Semester</u>\nLeadership Labratory\n"+
"AS-100-B\nMike Flight\nRank: C/4C\n\nReflection: With a new semester means a new team and new adjustments. While this would still be an online experience, same expectations "+
"were still applied here. This semester would be an introduction to next year's training for draft selection to get selected into Field Training. This would prepare myself to "+
"go to the next step and know what must be expected as we head back in person at SDSU to continue training.\n\n<b>Sophomore Year: </b> Start of FTP also known as Field Training "+
"Preparation.\n\n<u>Fall Semester</u>\nLeadership Labratory\nAS-200-A\nHotel Flight\nRank: C/3C\n\nReflection: Back in person! Meeting my previous teams from online would be "+
"amazing. Especially seeing others through a mask and what they would look like in person is mind blowing. Other than that, it would be back to training and refresh material from "+
"IMT to in person training to relearn all the stuff taught online. Although it may seem simple, it would be difficult in person as there are more obstacles to deal with as in online. "+
"By far, in person training would be much of a blast than it was online as camaraderie would be strong and lively as well as meeting new people and create connections along the way. "+
"As I would be more fond with training, I would also have to balance my focus with my school, which would be difficult as it would also be back in person. This would be where I have to "+
"sacrifice school or training depending on the situation. Time would teach me a valuable lesson to know what I should prioritize more during a certain timeframe.\n\n<u>Spring Semester</u>"+
"\nLeadership Labratory\nAS-200-B\nGolf Flight\nRank: C/3C\nJBB Org: Demon Flight for one day :)\n\nReflection: Knowing that this might be my last semester for training, I learned that it "+
"would not be possible to do training and commuting in the same semester. Being apart of this detachment has been a great honor for me to experience. Meeting new people has helped me to "+
"learn and grow individually to challenge my limitations to the next level whether if it is physically or mentally. This experience would also allow me to learn how to effectively lead a "+
"team no matter the size and environment. Unfortuantely, I would not make the draft selection as I would not be present most of the time due to commuting and school work as I have entered "+
"my upper division courses."+
"\n\n<hr>\n<div class='rotc'>My Experience:</div>"+
"";
let index3 = 0;
let skip3 = false;

function type3() {
  let substring = textContent3.substring(0, index3);
  textElement3.innerHTML = substring;
  index3++;
  if (index3 <= textContent3.length && !skip3) {
    setTimeout(type3, 25);
  }
}

function skipTyping3() {
  skip3 = true;
  textElement3.innerHTML = textContent3;
  index3 = textContent3.length;
}

//===========================================================================================================================================================================================================================

const textElement4 = document.querySelector('.swc-text');
const textContent4 = "Hey there! This one will be a short one. I attended Southwestern for completing my university general ed "+
"requirements in a cheaper cost. Down below will be what I did.\n\n<b>Summer Semester 2021</b>:\nAMD-100 -> INTRO TO ART, MEDIA "+
"& DESIGN\nPSCI-100 -> US GOVERNMENT & POLITICS\n\nReflection: Easy credits to complete as it is fully asynchronous to complete "+
"the course material at any time. In addition, it would be flexible to do my courses as it would easily fit in my schedule.";;
let index4 = 0;
let skip4 = false;

function type4() {
  let substring = textContent4.substring(0, index4);
  textElement4.innerHTML = substring;
  index4++;
  if (index4 <= textContent4.length && !skip4) {
    setTimeout(type4, 25);
  }
}

function skipTyping4() {
  skip4 = true;
  textElement4.innerHTML = textContent4;
  index4 = textContent4.length;
}

//===========================================================================================================================================================================================================================

const cardWrapper = document.querySelector('.card-wrapper');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const cards = Array.from(cardWrapper.getElementsByClassName('card'));
let currentIndex = 0;

prevButton.addEventListener('click', () => {
  goToPreviousCard();
});

nextButton.addEventListener('click', () => {
  goToNextCard();
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

function updateIndex() {
  if (currentIndex < 0) {
    currentIndex = cards.length - 1;
  } else if (currentIndex >=   cards.length) {
    currentIndex = 0;
  }
}

function goToPreviousCard() {
  currentIndex--;
  updateIndex();
  updateCardVisibility();
}

function goToNextCard() {
  currentIndex++;
  updateIndex();
  updateCardVisibility();
}

//===========================================================================================================================================================================================================================

// Attach event listeners to skip buttons
const skipButton1 = document.querySelector('.skip-button');
skipButton1.addEventListener('click', skipTyping1);

const skipButton2 = document.querySelector('.skip-button2');
skipButton2.addEventListener('click', skipTyping2);

const skipButton3 = document.querySelector('.skip-button3');
skipButton3.addEventListener('click', skipTyping3);

const skipButton4 = document.querySelector('.skip-button4');
skipButton4.addEventListener('click', skipTyping4);

// Start the auto-typing effects
type1();
type2();
type3();
type4();

// Show the initial active card
updateCardVisibility();

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