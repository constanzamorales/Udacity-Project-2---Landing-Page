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

// Saving all h2 to a variable.
const titles = document.querySelectorAll('h2');
// If I put the sectionElements and linkElements variables here, I get an error :(
/* 
const sectionElements = document.querySelectorAll('section');
const linkElements = document.querySelectorAll('a');
*/


// Looping through each h2 element and adding them to the navbar menu.
for (const title of titles) {
    const navBar = document.querySelector('#navbar__list');
    const link = document.createElement('a');
    const item = document.createElement('li');
    link.setAttribute('href', '');
    link.textContent = title.innerText;
    item.appendChild(link);
    navBar.appendChild(item);
}

// Saving all sections and anchor elements to variables.
const sectionElements = document.querySelectorAll('section');
const linkElements = document.querySelectorAll('a');

sectionElements.forEach((section, index) => {
    const link = linkElements[index];
    link.setAttribute('href', `#${section.id}`);
    link.setAttribute('class', `${section.id}`);
});


// Function to scroll to section on link click, applied to all link through a for loop.
for (const link of linkElements) {
    link.addEventListener('click', function (event) {
        const sct = document.querySelector(link.getAttribute('href'));
        event.preventDefault();
        sct.scrollIntoView({ behavior: 'smooth' });
    });
}


/* 
Function to add class 'active' to section and link when it is near top of viewport.
It also adds style to the active section so the user can see where he/she is at.
*/
const setAsActive = () => {
    const active = function(link, section) {
        section.classList.add('your-active-class');
        link.classList.add('your-active-class');
    }
    const inactive = function(link, section) {
        section.classList.remove('your-active-class');
        link.classList.remove('your-active-class');
    }
    for (const section of sectionElements) {
        const box = section.getBoundingClientRect();
        const link = document.querySelector(`.${section.id}`);
        if (box.top <= 150 && box.bottom >= 150) {
            active(link, section);
        } else {
            inactive(link, section);
        }
    }
}

document.addEventListener('scroll', function () {
    setAsActive();
});


/* 
Code by Marcel Rojas https://codepen.io/marcelrojas/pen/WNwgBRg for CSS Tricks https://css-tricks.com/how-to-make-an-unobtrusive-scroll-to-top-button/
*/

// Element to target
const target = document.querySelector('footer');
const scrollToTopBtn = document.querySelector('.scrollToTopBtn');
const rootElement = document.documentElement
// Function to be called when the element (the footer in this case) is intersected.
const callback = (entries, observer) => {
    // The callback will return an array of entries, even if you are only observing a single item
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            scrollToTopBtn.classList.add('showBtn'); // Show button
        } else {
            scrollToTopBtn.classList.remove('showBtn'); // Hide button
        }
    });
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
scrollToTopBtn.addEventListener('click', scrollToTop);

// Use IntersectionObserver to implement scroll to top button.
let observer = new IntersectionObserver(callback);
// Run the function with the footer as target.
observer.observe(target);










