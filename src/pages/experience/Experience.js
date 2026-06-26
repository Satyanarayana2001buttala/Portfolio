import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import TechnicalSkills from "../../containers/technicalSkills/TechnicalSkills";
import "./Experience.css";
import { Fade } from "react-reveal";
import FullStackImg from "../../containers/skills/FullStackImg";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <FullStackImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  Technologies
                </h1>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText, marginTop: "20px" }}
                >
                  My technical toolbox for building scalable, secure, and
                  high-performance applications
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <TechnicalSkills theme={theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
