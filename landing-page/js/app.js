/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


// Building the menu
// Select all h2 in the html file
const titles = document.querySelectorAll('h2');
const titlesArr = Array.from(titles);

// Loop through each h2 and add elements to the nav menu
for (const title of titlesArr) {
    const navBar = document.querySelector('#navbar__list');
    const link = document.createElement('a');
    const item = document.createElement('li');
    link.setAttribute('href', '');
    link.textContent = title.innerText;
    item.appendChild(link);
    navBar.appendChild(item);
}

// Selecting all sections and all anchors
const sectionElements = document.querySelectorAll('section');
const linkElements = document.querySelectorAll('a');
// Converting NodeLists to arrays
const sectionsArr = Array.from(sectionElements);
const linksArr = Array.from(linkElements);

// Giving each link its href and class
for (i = 0; i < sectionsArr.length; i++){
    linksArr[i].setAttribute('href', `#${sectionsArr[i].id}`);
    linksArr[i].setAttribute('class', `${sectionsArr[i].id}`);
}



// Scroll to section on link click
for (const link of linkElements) {
    const linkId = link.getAttribute('href');
    link.addEventListener('click', function (event) {
        const sct = document.querySelector(`${linkId}`);
        event.preventDefault();
        sct.scrollIntoView({ behavior: 'smooth' });
    });
}

// Add class 'active' to section and link when it is near top of viewport
function setAsActive() {
    for (const section of sectionElements) {
        const box = section.getBoundingClientRect();
        const link = document.querySelector(`.${section.id}`);
        if (box.top <= 150 && box.bottom >= 150) {
            section.classList.toggle('your-active-class');
            link.classList.toggle('your-active-class');
        } else {
            section.classList.remove('your-active-class');
            link.classList.remove('your-active-class');
        }
    }
}

document.addEventListener("scroll", function () {
    setAsActive();
});







