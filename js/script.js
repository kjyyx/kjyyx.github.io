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


function updateNavigation() {
    const files = ['lavacraze.html', 'brisk.html', 'sprint.html', 'GPT.html', 'railroaded.html', 'kairos.html'];
    const currentFile = location.pathname.split('/').pop(); // Get the current HTML file

    // Find the index of the current HTML file in the list
    const currentIndex = files.indexOf(currentFile);

    // Update previous link
    if (currentIndex > 0) {
        document.getElementById('prevProjectLink').href = files[currentIndex - 1];
    } else {
        // Set previous link to the last file if it's the first file
        document.getElementById('prevProjectLink').href = files[files.length - 1];
    }

    // Update next link
    if (currentIndex < files.length - 1) {
        document.getElementById('nextProjectLink').href = files[currentIndex + 1];
    } else {
        // Set next link to the first file if it's the last file
        document.getElementById('nextProjectLink').href = files[0];
    }
}

// Call the function initially
updateNavigation();

// document.querySelectorAll('.certificates-table tr').forEach(tr => {
//     tr.addEventListener('mouseenter', () => {
//         const marqueeText = tr.getAttribute('data-marquee');
//         if (marqueeText) {
//             tr.textContent = marqueeText;
//         }
//     });

//     tr.addEventListener('mouseleave', () => {
//         const originalText = tr.getAttribute('data-original-text');
//         if (originalText) {
//             tr.textContent = originalText;
//         }
//     });

//     tr.setAttribute('data-original-text', tr.textContent);
// });
