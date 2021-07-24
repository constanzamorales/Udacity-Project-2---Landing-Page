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
    link.setAttribute('href', '');
    link.textContent = titles[i].innerText;
    item.appendChild(link);
    navBar.appendChild(item);
}

// Linking menu items with sections
const sections = document.querySelectorAll('section');
const listItems = document.querySelectorAll('a');

for (i = 0; i < sections.length; i++){
    listItems[i].setAttribute('href', `#${sections[i].id}`);
}


// Scroll to section on link click

// Set sections as active


for (i = 0; i < listItems.length; i++){
    listItems[i].addEventListener('click', function(){
        listItems[i].preventDefault();
        listItems[i].scrollIntoView({behavior: "smooth"});
    })
}




