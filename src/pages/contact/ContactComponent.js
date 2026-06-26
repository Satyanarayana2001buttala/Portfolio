import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />

        <div className="basic-contact">
          {/* Main Contact Section */}
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  className="contact-profile-img"
                  src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                  alt="Satyanarayana"
                  style={{
                    borderRadius: "50%",
                    width: "280px",
                    height: "280px",
                    objectFit: "cover",
                    border: `4px solid ${theme.text}`,
                  }}
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <h2
                  className="contact-sub-heading"
                  style={{ color: theme.text }}
                >
                  Let's Connect
                </h2>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
              </div>
            </div>
          </Fade>

          {/* Technical / Professional Contact Cards Grid */}
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-cards-container">
              <div
                className="contact-card"
                style={{
                  background: "rgba(10, 17, 34, 0.85)",
                  border: `1px solid rgba(255, 255, 255, 0.08)`,
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                }}
              >
                <div
                  className="contact-card-icon-wrapper"
                  style={{ color: "#0E6BA8" }}
                >
                  <span
                    className="iconify"
                    data-icon="lucide:phone"
                    data-inline="false"
                  ></span>
                </div>
                <div className="contact-card-content">
                  <span
                    className="contact-card-label"
                    style={{ color: "#7F8DAA" }}
                  >
                    Contact Number
                  </span>
                  <a
                    href={`tel:${phoneSection.phone}`}
                    className="contact-card-link"
                    style={{ color: "#E6E6E6" }}
                  >
                    {phoneSection.phone}
                  </a>
                </div>
              </div>

              <div
                className="contact-card"
                style={{
                  background: "rgba(10, 17, 34, 0.85)",
                  border: `1px solid rgba(255, 255, 255, 0.08)`,
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                }}
              >
                <div
                  className="contact-card-icon-wrapper"
                  style={{ color: "#0E6BA8" }}
                >
                  <span
                    className="iconify"
                    data-icon="lucide:mail"
                    data-inline="false"
                  ></span>
                </div>
                <div className="contact-card-content">
                  <span
                    className="contact-card-label"
                    style={{ color: "#7F8DAA" }}
                  >
                    Email
                  </span>
                  <a
                    href={`mailto:${phoneSection.email}`}
                    className="contact-card-link"
                    style={{ color: "#E6E6E6" }}
                  >
                    {phoneSection.email}
                  </a>
                </div>
              </div>

              <div
                className="contact-card"
                style={{
                  background: "rgba(10, 17, 34, 0.85)",
                  border: `1px solid rgba(255, 255, 255, 0.08)`,
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                }}
              >
                <div
                  className="contact-card-icon-wrapper"
                  style={{ color: "#0E6BA8" }}
                >
                  <span
                    className="iconify"
                    data-icon="lucide:linkedin"
                    data-inline="false"
                  ></span>
                </div>
                <div className="contact-card-content">
                  <span
                    className="contact-card-label"
                    style={{ color: "#7F8DAA" }}
                  >
                    LinkedIn Profile
                  </span>
                  <a
                    href={phoneSection.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card-link"
                    style={{ color: "#E6E6E6" }}
                  >
                    Satyanarayana Buttala
                  </a>
                </div>
              </div>

              <div
                className="contact-card"
                style={{
                  background: "rgba(10, 17, 34, 0.85)",
                  border: `1px solid rgba(255, 255, 255, 0.08)`,
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                }}
              >
                <div
                  className="contact-card-icon-wrapper"
                  style={{ color: "#0E6BA8" }}
                >
                  <span
                    className="iconify"
                    data-icon="fluent:location-ripple-24-regular"
                    data-inline="false"
                  ></span>
                </div>
                <div className="contact-card-content">
                  <span
                    className="contact-card-label"
                    style={{ color: "#7F8DAA" }}
                  >
                    Relocation Status
                  </span>
                  <span
                    className="contact-card-text"
                    style={{ color: "#E6E6E6" }}
                  >
                    Willing to relocate anywhere
                  </span>
                </div>
              </div>
            </div>
          </Fade>

          {/* Download Resume Button */}
          <Fade bottom duration={1000} distance="40px">
            <div className="resume-download-btn-container">
              <a
                href={`${process.env.PUBLIC_URL}/Buttala_Annavavaram_Satyanarayana.pdf`}
                download="Buttala_Annavavaram_Satyanarayana.pdf"
                className="resume-download-btn"
                style={{
                  background: theme.text,
                  color: theme.body,
                  border: `1px solid ${theme.text}`,
                }}
              >
                View my Resume
              </a>
            </div>
          </Fade>

          {/* Address Section */}
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                <AddressImg theme={theme} />
              </div>
              <div className="address-heading-text-div">
                <h1 className="address-title" style={{ color: theme.text }}>
                  {addressSection["title"]}
                </h1>

                <div className="address-glass-cards">
                  <div
                    className="address-glass-card"
                    style={{
                      background: "rgba(10, 17, 34, 0.85)",
                      border: `1px solid rgba(255, 255, 255, 0.08)`,
                      boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                    }}
                  >
                    <h3
                      className="address-card-heading"
                      style={{ color: "#E6E6E6" }}
                    >
                      Permanent Address
                    </h3>
                    <p
                      className="address-card-body"
                      style={{ color: "#CCCCCC" }}
                    >
                      Muggulla, Eluru, AndhraPradesh - 534197
                    </p>
                  </div>

                  <div
                    className="address-glass-card"
                    style={{
                      background: "rgba(10, 17, 34, 0.85)",
                      border: `1px solid rgba(255, 255, 255, 0.08)`,
                      boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                    }}
                  >
                    <h3
                      className="address-card-heading"
                      style={{ color: "#E6E6E6" }}
                    >
                      Current Address
                    </h3>
                    <p
                      className="address-card-body"
                      style={{ color: "#CCCCCC" }}
                    >
                      Hyderabad, Telangana
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
