// scripts.js

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    // Scroll Animation
    const revealElements = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        revealElements.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 100;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    // Scroll Animation for fade-in effect
    const revealElements = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        revealElements.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = windowHeight / 2; // Trigger when text reaches center

            if (elementTop < revealPoint) {
                element.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // Typing Effect with Restart
    const text = "Hi! I'm Johnny Bapor, a hardworking entrepreneur and Lalamove Rider. As a Vendo owner, I manage my own business while staying active and pushing my limits through fitness. Whether I'm delivering with speed and efficiency or working out to stay strong, I believe in discipline, hustle, and making every opportunity count.";
    const typingContainer = document.querySelector(".typing-container");
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typingContainer.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 50); // Speed of typing
        } else {
            setTimeout(resetTyping, 2000); // Delay before restart
        }
    }

    function resetTyping() {
        typingContainer.textContent = "";
        index = 0;
        typeText();
    }

    typeText(); // Start typing effect
});
