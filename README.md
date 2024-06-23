<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Website</title>
    <script type="module" src="https://unpkg.com/@splinetool/viewer@1.7.6/build/spline-viewer.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(to right, #d3e0ea, #d3e0ea);
            color: #333;
        }
        header {
            background-color: #007BFF;
            color: white;
            text-align: center;
            padding: 2em 0;
        }
        nav {
            text-align: center;
            margin: 1.5em 0;
        }
        nav a {
            margin: 0 15px;
            text-decoration: none;
            color: #007BFF;
            font-weight: bold;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
        }
        section {
            padding: 2em 0;
            border-bottom: 1px solid #ccc;
        }
        section h2 {
            color: #007BFF;
        }
        footer {
            background-color: #f4f4f4;
            text-align: center;
            padding: 1.5em 0;
            margin-top: 1em;
        }
        a {
            color: #007BFF;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .spline-section {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2em 0;
        }
    </style>
</head>
<body>
    <header>
        <h1>Hey, I'm Rafi, and Welcome to My Website (it's currently a work in progress)</h1>
    </header>
    <nav>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </nav>
    <div class="container">
        <section id="about">
            <h2>About Me</h2>
            <p>Hello! I'm Rafi, I like physics, coding, math, and football (the one with your foot). Come join me in my coding journey!</p>
        </section>
        <section id="spline" class="spline-section">
            <spline-viewer url="https://prod.spline.design/QvKVl9ccFLqYlOIk/scene.splinecode" style="width: 100%; height: 500px;"></spline-viewer>
        </section>
        <section id="projects">
            <h2>Projects</h2>
            <p>Here are some of my projects:</p>
            <ul>
                <li><a href="https://www.youtube.com/channel/UCTfL_OkPIOajXidvbWhpeww" target="_blank">Project 1</a>: I have a YouTube channel which I'm growing slowly but surely.</li>
            </ul>
        </section>
        <section id="contact">
            <h2>Contact</h2>
            <p>You can reach me at:</p>
            <ul>
                <li>Email: <a href="mailto:urafi3045@gmail.com">urafi3045@gmail.com</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/rafi-uddin-b2a1bb263/" target="_blank">LinkedIn Profile</a></li>
                <li>GitHub: <a href="https://github.com/ShinyCodez" target="_blank">GitHub Profile</a></li>
            </ul>
        </section>
    </div>
    <footer>
        <p>&copy; 2024 Rafi Uddin. All rights reserved.</p>
    </footer>
</body>
</html>
