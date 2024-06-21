<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #4CAF50;
            color: white;
            text-align: center;
            padding: 1em 0;
        }
        nav {
            text-align: center;
            margin: 1em 0;
        }
        nav a {
            margin: 0 15px;
            text-decoration: none;
            color: #4CAF50;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
        }
        section {
            padding: 2em 0;
            border-bottom: 1px solid #e0e0e0;
        }
        footer {
            background-color: #f4f4f4;
            text-align: center;
            padding: 1em 0;
            margin-top: 1em;
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to My Personal Website</h1>
    </header>
    <nav>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </nav>
    <div class="container">
        <section id="about">
            <h2>About Me</h2>
            <p>Hello! I'm [Your Name], a [Your Profession]. I love [brief description about your hobbies, interests, and what you do].</p>
        </section>
        <section id="projects">
            <h2>Projects</h2>
            <p>Here are some of my projects:</p>
            <ul>
                <li><a href="[Link to Project 1]">Project 1</a>: Brief description of Project 1.</li>
                <li><a href="[Link to Project 2]">Project 2</a>: Brief description of Project 2.</li>
                <li><a href="[Link to Project 3]">Project 3</a>: Brief description of Project 3.</li>
            </ul>
        </section>
        <section id="contact">
            <h2>Contact</h2>
            <p>You can reach me at:</p>
            <ul>
                <li>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank">LinkedIn Profile</a></li>
                <li>GitHub: <a href="https://github.com/yourprofile" target="_blank">GitHub Profile</a></li>
            </ul>
        </section>
    </div>
    <footer>
        <p>&copy; 2024 [Your Name]. All rights reserved.</p>
    </footer>
</body>
</html>
