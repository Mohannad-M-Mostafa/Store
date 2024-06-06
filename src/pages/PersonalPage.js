import React from "react";

function PersonalPage() {
  return (
    <div>
      <header>
        <h1>John Doe</h1>
        <nav>
          <ul>
            <li> <a href="#about">About Me</a> </li>
            <li><a href="#portfolio">Portfolio</a> </li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            I'm a passionate web developer with experience in React.js, Node.js,
            and other web technologies.
          </p>
        </section>
        <section id="portfolio">
          <h2>Portfolio</h2>
          <div className="project">
            <h3>Project 1</h3>
            <p>Description of project 1.</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>Description of project 2.</p>
          </div>
          {/* Add more projects as needed */}
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default PersonalPage;
