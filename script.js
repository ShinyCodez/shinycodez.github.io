document.addEventListener('DOMContentLoaded', function() {
    // Get references to the social media links
    const githubLink = document.getElementById('github-link');
    const instagramLink = document.getElementById('instagram-link');
    const linkedinLink = document.getElementById('linkedin-link');
    const copyEmailButton = document.getElementById('copy-email'); // Reference to Copy Email button

    // Add event listeners to each link
    githubLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action (navigation)
        window.open('https://github.com/ShinyCodez', '_blank'); // Replace with your GitHub profile URL
    });

    instagramLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.open('https://www.instagram.com/shiny.223/', '_blank'); // Replace with your Instagram profile URL
    });

    linkedinLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.open('https://www.linkedin.com/in/rafi-uddin-b2a1bb263/', '_blank'); // Replace with your LinkedIn profile URL
    });

    // Function to copy email to clipboard
    function copyEmailToClipboard() {
        const email = 'urafi3045@gmail.com'; // Your email address
        navigator.clipboard.writeText(email)
            .then(() => {
                alert('Email copied to clipboard: ' + email);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    }

    // Add click event listener to the Copy Email button
    copyEmailButton.addEventListener('click', copyEmailToClipboard);

    // Additional JavaScript code here if needed

});
