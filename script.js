document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById("content");
    const mainHeader = document.getElementById("main-header");

    function fadeOutContent(callback) {
        content.classList.add("fade-out");
        setTimeout(() => {
            callback();
            content.classList.remove("fade-out");
            content.classList.add("fade-in");
        }, 500);
    }

    function loadHome() {
        mainHeader.textContent = "Welcome to My Personal Website";
        content.innerHTML = `
            <section>
                <p>Hello! I'm Rafi Uddin, a rising senior in NYC. Welcome to my personal website.</p>
            </section>
        `;
    }

    function loadAbout() {
        mainHeader.textContent = "About Me";
        content.innerHTML = `
            <section>
                <p>Hello! I love physics, coding, math, and football (the one with your foot). This page is all about me.</p>
            </section>
        `;
    }

    function loadProjects() {
        mainHeader.textContent = "Projects";
        content.innerHTML = `
            <section>
                <p>Here are some of my recent works.</p>
                <!-- Add project details here -->
            </section>
        `;
    }

    function loadContact() {
        mainHeader.textContent = "Contact";
        content.innerHTML = `
            <section>
                <p>You can reach me at <a href="mailto:urafi3045@gmail.com">urafi3045@gmail.com</a></p>
            </section>
        `;
    }

    document.getElementById("home-link").addEventListener("click", function(event) {
        event.preventDefault();
        fadeOutContent(loadHome);
    });

    document.getElementById("about-link").addEventListener("click", function(event) {
        event.preventDefault();
        fadeOutContent(loadAbout);
    });

    document.getElementById("projects-link").addEventListener("click", function(event) {
        event.preventDefault();
        fadeOutContent(loadProjects);
    });

    document.getElementById("contact-link").addEventListener("click", function(event) {
        event.preventDefault();
        fadeOutContent(loadContact);
    });

    // Load the home content by default
    loadHome();
});
