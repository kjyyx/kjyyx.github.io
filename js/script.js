const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.scroll-animation');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document with smooth animation
function topFunction() {
    // For modern browsers
    if (document.documentElement.scrollTo) {
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {  // For Safari
        document.body.scrollTop = 0;
    }
}

function redirectToPage(pageUrl) {
    // Perform the redirection with an animation
    // For demonstration purposes, let's use a simple redirection without animation
    window.location.href = pageUrl;
}

// Array of project URLs
var projects = ["lavacraze.html", "brisk.html", "sprint.html", "GPT.html", "railroaded.html"];

// Get current project index
var currentProjectIndex = projects.indexOf(window.location.pathname);
console.log("Current URL: " + window.location.pathname);
console.log("Current index: " + currentProjectIndex);

// Update previous project link
var prevProjectLink = document.getElementById("prevProjectLink");
prevProjectLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    if (currentProjectIndex === -1 || currentProjectIndex === 0) {
        // If current project is the first one or not found, set link to the last project
        window.location.href = projects[projects.length - 1];
    } else {
        // Otherwise, set link to the previous project
        window.location.href = projects[currentProjectIndex - 1];
    }
});

// Update next project link
var nextProjectLink = document.getElementById("nextProjectLink");
nextProjectLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    if (currentProjectIndex === -1 || currentProjectIndex === projects.length - 1) {
        // If current project is the last one or not found, set link to the first project
        window.location.href = projects[0];
    } else {
        // Otherwise, set link to the next project
        window.location.href = projects[currentProjectIndex + 1];
    }
});
