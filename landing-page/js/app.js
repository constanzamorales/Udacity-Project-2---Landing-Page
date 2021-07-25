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


/**
 * End Main Functions
 * Begin Events
 * 
*/
// Build menu
// Select all h2 in the html file
const titles = document.querySelectorAll('h2');

// Loop through each h2 and add elements to the nav menu
for (i = 0; i < titles.length; i++){
    const navBar = document.querySelector('#navbar__list');
    const link = document.createElement('a');
    const item = document.createElement('li');
    item.setAttribute('id', `item${i}`);
    link.setAttribute('href', '');
    link.textContent = titles[i].innerText;
    item.appendChild(link);
    navBar.appendChild(item);
}

// Linking menu items with sections
const sectionElements = document.querySelectorAll('section');
const linkElements = document.querySelectorAll('a');

const sectionsArr = Array.from(sectionElements);
const linksArr = Array.from(linkElements);

for (i = 0; i < sectionsArr.length; i++){
    linksArr[i].setAttribute('href', `#${sectionsArr[i].id}`);
}


// Scroll to section on link click

// Set sections as active


/*
function clickLink() {
    const menuItem = document.querySelector('a');
    menuItem.addEventListener('click', function(event) {
        console.log('hello');
        event.preventDefault();
        menuItem.scrollIntoView({ behavior: "smooth" });
    });
}
*/

for (i = 0; i < linkElements.length; i++) {
    const linkId = linkElements[i].getAttribute('href');
    console.log(linkId);
    linkElements[i].addEventListener('click', function(event) {
        const sct = document.querySelector(`${linkId}`);
        event.preventDefault();
        sct.scrollIntoView({ behavior: 'smooth' });
        sct.classList.toggle('your-active-class');
    });
}

console.log(linkElements[0]);







