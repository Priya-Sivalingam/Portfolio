import React from "react";
import "./education&experience.css";

const EducationExperience = () => {
  return (
    <section className="education-experience">
      <h2 className="section-title">Education & Experience</h2>
      <div className="timeline-container">
        <div className="timeline-section">
          <h3 className="section-subtitle">Education</h3>
          <div className="timeline">
            <div className="timeline-card">
              <span className="timeline-date">2021 - present</span>
              <h4 className="timeline-title">B.Sc(Hons) in ENTC Engineering</h4>
              <p className="timeline-text">
                @ University of Moratuwa 
              </p>
            </div>
            <div className="timeline-card">
              <span className="timeline-date">2020 - 2021</span>
              <h4 className="timeline-title">Business Degree in CIMA</h4>
              <p className="timeline-text">@ Wisdom Business Academy</p>
            </div>
            <div className="timeline-card">
              <span className="timeline-date">2019 - 2020</span>
              <h4 className="timeline-title">Human Resource Management</h4>
              <p className="timeline-text">@ International Business Management Institude</p>
            </div>
            <div className="timeline-card">
              <span className="timeline-date">2005 - 2019</span>
              <h4 className="timeline-title">Grade 1 - G.C.E Advanced Level</h4>
              <p className="timeline-text">@ Mahajana College | Jaffna</p>
            </div>
          
          </div>
        </div>
        <div className="timeline-section">
          <h3 className="section-subtitle">Experience</h3>
          <div className="timeline">
            <div className="timeline-card">
              <span className="timeline-date">2023 - 2024</span>
              <h4 className="timeline-title">Research Assistent</h4>
              <p className="timeline-text">@ SUTD | Singapore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
