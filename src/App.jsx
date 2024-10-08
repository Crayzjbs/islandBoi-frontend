import React from "react";
import ButtonGradient from "./Assets/svg/ButtonGradient";
import Button from "./Components/Button";
import mainPageImage from "./assets/media/main Page.jpg"; // Ensure the image is imported
import "./App.css"; // Import the CSS file

const App = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="text-lg font-bold" style={{ color: "#115D81" }}>
            Island Boi
          </div>
          <div className="space-x-4">
            <a href="#home" className="navbar-link">
              Home
            </a>
            <a href="#about" className="navbar-link">
              About
            </a>
            <a href="#services" className="navbar-link">
              Services
            </a>
            <a href="#contact" className="navbar-link">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main
        className="main"
        style={{ backgroundImage: `url(${mainPageImage})` }}
      >
        <div className="button-container">
          <Button className="button" href="#book-now">
            Book Now
          </Button>
          <Button className="button" href="#pricing">
            Pricing
          </Button>
        </div>
      </main>

      <section className="activities-available">
        <h2>Activities Available</h2>
        <ul>
          <li>Snorkeling</li>
          <li>Hiking</li>
          <li>Kayaking</li>
          <li>Beach Volleyball</li>
        </ul>
      </section>

      <section className="Main-About ">
        <div>About</div>
      </section>

      <section className="Main-Featured">
        <div>Features</div>
      </section>

      <section className="Main-Calendar">
        <div>Calendar</div>
      </section>

      <section className=""></section>
    </>
  );
};

export default App;
