document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById("content");
    const mainHeader = document.getElementById("main-header");

    function loadHome() {
        mainHeader.textContent = "Welcome to My Personal Website";
        content.innerHTML = `
            <section>
                <p>Hello! I'm [Your Name], a [Your Profession]. Welcome to my personal website.</p>
            </section>
        `;
    }

    function loadAbout() {
        mainHeader.textContent = "About Me";
        content.innerHTML = `
            <section>
                <p>Hello! I'm [Your Name], a [Your Profession]. This page is all about me.</p>
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
                <p>You can reach me at <a href="mailto:your-email@example.com">your-email@example.com</a></p>
            </section>
        `;
    }

    document.getElementById("home-link").addEventListener("click", function(event) {
        event.preventDefault();
        loadHome();
    });

    document.getElementById("about-link").addEventListener("click", function(event) {
        event.preventDefault();
        loadAbout();
    });

    document.getElementById("projects-link").addEventListener("click", function(event) {
        event.preventDefault();
        loadProjects();
    });

    document.getElementById("contact-link").addEventListener("click", function(event) {
        event.preventDefault();
        loadContact();
    });

    // Load the home content by default
    loadHome();
});
