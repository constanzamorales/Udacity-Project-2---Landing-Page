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

// Selecting all sections and all anchors
const sectionElements = document.querySelectorAll('section');
const linkElements = document.querySelectorAll('a');
// Converting NodeLists to arrays
const sectionsArr = Array.from(sectionElements);
const linksArr = Array.from(linkElements);

/*
  Building the menu
*/
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
const setAsActive = () => {
    for (const section of sectionElements) {
        const box = section.getBoundingClientRect();
        const link = document.querySelector(`.${section.id}`);
        if (box.top <= 150 && box.bottom >= 150) {
            section.classList.toggle('your-active-class');
            link.classList.toggle('your-active-class');
            link.style.boxShadow = 'inset 0px -4px 0px 0px #0fa5eb';
            link.style.color = '#0fa5eb';
        } else {
            section.classList.remove('your-active-class');
            link.classList.remove('your-active-class');
            link.style.boxShadow = 'none';
            link.style.color = '';
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
            // Show button
            scrollToTopBtn.classList.add('showBtn');
        } else {
            // Hide button
            scrollToTopBtn.classList.remove('showBtn');
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










