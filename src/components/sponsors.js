import { React, Component } from "react";
import "../components/css/sponsors.scss";
import Aos from "aos";
import "aos/dist/aos.css";

import { Sponsors, CommunityPartners, PlatformPartners } from "./js/homeData";
import bgImage from "../components/img/bg-team.svg";

class Sponsors2023 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      randomColor: ["#fff"],
      activeStack: "",
      scrollStamp: 0,
      modalDisplay: "none",
      bodyOverflow: "initial",
    };
  }

  handleResize = (e) => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  handleScroll = (e) => {
    this.setState({ scrollStamp: document.documentElement.scrollTop });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    Aos.init({
      duration: 500,
    });

    document.querySelector(".main-nav").classList.add("nav-scrolled");
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <>
        <span hidden="true" id="page-name">
          Sponsors
        </span>
        <header className="header">
          <div className="sponsor-header-content">
            <div className="header-text">
              <h1 className="sponsor-header-title">Our Sponsors</h1>
              <p className="sponsor-header-description">
                Discover the amazing companies that support us.
              </p>
              <a
                href="https://drive.google.com/file/d/1MTdrzl0jZ8YiWXWytSJ_LCUmY15nyNmH/view?usp=sharing"
                target="_blank" // Optional: Open link in a new tab
                rel="noopener noreferrer" // Recommended for security when opening in a new tab
              >
                <button className="header-btn">Sponsor Us</button>
              </a>
            </div>
            <div className="header-image">
              <img src={bgImage} alt="Team" />
            </div>
          </div>
        </header>
        <div className="section">
          <h3>Our Sponsors</h3>
          <div className="sponsor-container">
            {Sponsors.map((sponsor, index) => (
              <div className="sponsor-item" key={index}>
                <img
                  className="sponsor-img"
                  src={sponsor.sponsorImg}
                  alt={`Sponsor ${index}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="section">
          <h3>Community Partners</h3>
          <div className="sponsor-container">
            {CommunityPartners.map((sponsor, index) => (
              <div className="sponsor-item" key={index}>
                <img
                  className="sponsor-img"
                  src={sponsor.sponsorImg}
                  alt={`Sponsor ${index}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="section">
          <h3>Platform Partners</h3>
          <div className="sponsor-container">
            {PlatformPartners.map((sponsor, index) => (
              <div className="sponsor-item" key={index}>
                <img
                  className="sponsor-img"
                  src={sponsor.sponsorImg}
                  alt={`Sponsor ${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Sponsors2023;
