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
            <a href="#booknow" className="navbar-link">
              Book Now
            </a>
            <a href="#offers" className="navbar-link">
              Offers
            </a>
            <a href="#locations" className="navbar-link">
              Location
            </a>
            <a href="#activity" className="navbar-link">
              Activity
            </a>
            <a href="#gallery" className="navbar-link">
              Gallery
            </a>
            <a href="#about" className="navbar-link">
              About
            </a>
          </div>
        </div>
      </nav>

      <main
        className="main"
        style={{ backgroundImage: `url(${mainPageImage})` }}
      >
        <div className="content-right">
          <h2>EXPERIENCE SAMAL AT</h2>

          <h1>ISLAND BOI</h1>

          <p>
            Island Boi Beach House is your exclusive vacation home rental of
            choice! The beach boasts of pristine waters, white sand shoreline,
            and a beautiful view of Talikud Island. It is a perfect getaway for
            every adventurer, family, and friends!
          </p>

          <div className="button-container">
            <Button className="button" href="#book-now">
              Book Now
            </Button>
            <Button className="button" href="#pricing">
              Pricing
            </Button>
          </div>
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
