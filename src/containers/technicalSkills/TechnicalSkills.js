import React, { Component } from "react";
import "./TechnicalSkills.css";
import { Fade } from "react-reveal";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: "logos:html-5" },
      { name: "CSS3", icon: "logos:css-3" },
      { name: "JavaScript", icon: "logos:javascript" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", icon: "logos:java" },
      { name: "Spring Boot", icon: "logos:spring-icon" },
      { name: "Spring MVC", icon: "logos:spring-icon" },
      { name: "Hibernate", icon: "logos:hibernate" },
      { name: "REST API", icon: "eos-icons:api-database" },
      { name: "JDBC", icon: "flat-color-icons:database" },
      { name: "Servlets", icon: "logos:tomcat" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: "logos:mysql" },
      { name: "SQL", icon: "carbon:sql" },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Java", icon: "logos:java" },
      { name: "Python", icon: "logos:python" },
      { name: "Object-Oriented Programming", icon: "mdi:family-tree" },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "IntelliJ IDEA", icon: "logos:intellij-idea" },
      { name: "VS Code", icon: "logos:visual-studio-code" },
    ],
  },
  {
    title: "AI Tools",
    skills: [
      { name: "ChatGPT", icon: "logos:openai-icon" },
      { name: "Claude AI", icon: "logos:claude" },
      { name: "Cursor AI", icon: "simple-icons:cursor" },
      { name: "AntiGravity AI", icon: "carbon:artificial-intelligence" },
    ],
  },
];

class TechnicalSkills extends Component {
  render() {
    return (
      <div className="skills-section-container">
        <Fade bottom duration={2000} distance="40px">
          <div className="skills-category-grid">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="skills-category-card"
                style={{
                  background: "rgba(10, 17, 34, 0.85)",
                  boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.37)`,
                  border: `1px solid rgba(255, 255, 255, 0.08)`,
                }}
              >
                <h2
                  className="skills-category-title"
                  style={{ color: "#E6E6E6" }}
                >
                  {category.title}
                </h2>
                <div className="skills-items-grid">
                  {category.skills.map((skill, sIndex) => (
                    <div
                      key={sIndex}
                      className="skill-item-card"
                      style={{
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      <div className="skill-icon-wrapper">
                        <span
                          className="iconify skill-icon"
                          data-icon={skill.icon}
                          data-inline="false"
                        ></span>
                      </div>
                      <span className="skill-name" style={{ color: "#CCCCCC" }}>
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    );
  }
}

export default TechnicalSkills;
