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
import Calendar from "./components/calendar";
import R2B_1 from "./assets/media/R2B_pic1.png";
import R2B_2 from "./assets/media/R2B_2.png";
import LocBox from "./assets/media/location box.png";

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
        <h2>About</h2>
        <div>About content goes here...</div>
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
        <div className="calendar-container">
          <Calendar /> {/* Render the Calendar component */}
        </div>
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
        <div className="R2B_1-container">
          <div className="R2B_1">
            <img src={R2B_1} alt="Picture 1" />
          </div>
          <div className="R2B-text">
            <h2>
              READY TO BOOK? <br />
            </h2>
          </div>
          <div>
            <p className="R2B-p">
              Island Boi Beach House is your exclusive vacation home rental of
              choice! The beach boasts of pristine waters, white sand shoreline,
              and a beautiful view of Talikud Island. It is a perfect getaway
              for every adventurer, family, and friends!
            </p>
          </div>
        </div>

        <div className="R2B_2-container">
          <div className="R2B_2-text">
            <h2>CHOOSE A DATE!</h2>
          </div>
          <p className="R2B_2-p">
            Island Boi Beach House is your exclusive vacation home rental of
            choice! The beach boasts of pristine waters, white sand shoreline,
            and a beautiful view of Talikud Island. It is a perfect getaway for
            every adventurer, family, and friends!
          </p>
          <div className="R2B_2">
            <img src={R2B_2} alt="Picture 2" />
          </div>
        </div>
      </section>

      <section className="section Main-Location">
        <div className="location-container">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.497888681944!2d125.7275393152044!3d7.073056994892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f94a1f1f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2sBabak%20-%20Samal%20-%20Kaputian%20Rd%2C%20Kaputian%2C%20Island%20Garden%20City%20of%20Samal%2C%20Davao%20del%20Norte!5e0!3m2!1sen!2sph!4v1611811234567!5m2!1sen!2sph&maptype=satellite"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
          <div className="location-details">
            <h1>
              WHERE <br /> TO FIND US!
            </h1>
          </div>
          <div className="absolute-description">
            <p>
              Island Boi Beach House is your exclusive vacation home rental of
              choice! The beach boasts of pristine waters, white sand shoreline,
              and a beautiful view of Talikud Island. It is a perfect getaway
              for every adventurer, family, and friends!
            </p>
          </div>
          <div className="Location_locBox">
            <img src={LocBox} alt="location box" />
          </div>
        </div>
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
