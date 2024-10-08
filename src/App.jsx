import React from "react";
import ButtonGradient from "./Assets/svg/ButtonGradient";
import Button from "./Components/Button";
import mainPageImage from "./assets/media/mainPage.png";
import "./App.css";
import act1 from "./assets/media/act 1.png";
import act2 from "./assets/media/act 2.png";
import act3 from "./assets/media/act 3.png";

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

      <section
        className="section activities-available"
        style={{ backgroundImage: `url(${mainPageImage})` }}
      >
        <h2>Activities Available</h2>
        <ul className="activities-list">
          <li
            className="enjoy-activities"
            style={{ backgroundImage: `url(${act1})` }}
          ></li>
          <li className="faq" style={{ backgroundImage: `url(${act2})` }}></li>
          <li
            className="seasonal-offers"
            style={{ backgroundImage: `url(${act3})` }}
          ></li>
        </ul>
      </section>

      <section className="section Main-About">
        <h2>About</h2>
        <div>About content goes here...</div>
      </section>

      <section className="section Main-Featured">
        <h2>Features</h2>
        <div>Features content goes here...</div>
      </section>

      <section className="section Main-Calendar">
        <h2>Calendar</h2>
        <div>Calendar content goes here...</div>
      </section>

      <section className="section Main-ReadyToBook">
        <h2>Ready to Book</h2>
        <div>Ready to book content goes here...</div>
      </section>

      <section className="section Main-Location">
        <h2>Location</h2>
        <div>Location content goes here...</div>
      </section>

      <footer className="footer Main-Footer">
        <div>Footer content goes here...</div>
      </footer>
    </>
  );
};

export default App;
