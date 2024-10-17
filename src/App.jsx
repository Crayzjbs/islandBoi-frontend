import React from "react";
import ButtonGradient from "./Assets/svg/ButtonGradient";
import Button from "./Components/Button";
import mainPageImage from "./assets/media/mainPage.png";
import "./App.css";
import act1 from "./assets/media/act 1.png";
import act2 from "./assets/media/act 2.png";
import act3 from "./assets/media/act 3.png";
import aboutBg from "./assets/media/About page.png";
import featureBg from "./assets/media/featured.png";
import featureImg1 from "./assets/media/feature1.png";
import featureImg2 from "./assets/media/feature2.png";
import featureImg3 from "./assets/media/feature3.png";
import featuretop from "./assets/media/unnamed infos.png";
import calendarBG from "./assets/media/calendarBg1.png";
import ReadyToBook from "./assets/media/RTB_BG.png";
import FooterBG from "./assets/media/footerBG.png";

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
            <Button className="button-2" href="#offers">
              OFFERS
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

      <section
        className="section Main-About"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2></h2>
        <div></div>
      </section>

      <section
        className="section Main-Featured"
        style={{
          backgroundImage: `url(${featureBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center -5%",
        }}
      >
        <div className="feature-top">
          <img src={featuretop} alt="top" />
        </div>
        <div className="feature-container">
          <div className="feature-image">
            <img src={featureImg1} alt="Feature 1" />
            Features content goes here...
          </div>
          <div className="feature-image2">
            <img src={featureImg2} alt="Feature 2" />
            Features content goes here..
          </div>
          <div className="feature-image3">
            <img src={featureImg3} alt="Feature 3" />
            Features content goes here..
          </div>
        </div>
      </section>

      <section
        className="section Main-Calendar"
        style={{
          backgroundImage: `url(${calendarBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 0%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2>Calendar</h2>
        <div>text placeholder</div>
      </section>

      <section
        className="section Main-ReadyToBook"
        style={{
          backgroundImage: `url(${ReadyToBook})`,
          backgroundSize: "cover",
          backgroundPosition: "center 0%",
          padding: "2rem",
        }}
      >
        <h2>Ready to Book</h2>
        <div>Ready to book content goes here...</div>
      </section>

      <section className="section Main-Location">
        <h2>Location</h2>
        <div>Location content goes here...</div>
      </section>

      <footer
        className="footer Main-Footer"
        style={{
          backgroundImage: `url(${FooterBG})`,
          backgroundSize: "cover",
          padding: "2rem",
        }}
      >
        <div className="footer-content-container">
          <div className="Footer-logo">Footer content goes here... asdada</div>
          <div className="Footer-navbar">
            Footer content goes here... asdada
          </div>
          <div className="Footer-Contacts">
            Footer content goes here... asdada
          </div>
        </div>
      </footer>

      <footer
        className="footer"
        style={{
          backgroundColor: "#021924",
          padding: "1rem",
          margin: "0",
          height: "auto",
        }}
      >
        <h2 style={{ margin: "0" }}>ALL RIGHTS RESERVED</h2>
      </footer>
    </>
  );
};

export default App;
