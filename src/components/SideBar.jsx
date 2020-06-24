import React from "react";
import resume from "../images/Temitope_Akinsoto _BLOOMBERG APPLICATION.pdf";

function SideBar() {
  return (
    <div className="side-bar">
      <section className="sidebar-container">
        <h2>Skills &amp; Tools</h2>
        <div className="resume-container">
          <div className="font-weight-bold" style={{ margin: "30px 0" }}>
            <h4 className="resume-skills-cat font-weight-bold">Frontend</h4>
            <ul className="list-unstyled mb-4">
              <li className="mb-2">
                <div className="resume-skill-name">React+Redux</div>
                <div
                  className="progress resume-progress"
                  style={{ height: "5px", background: "white" }}
                >
                  <div
                    role="progressbar"
                    style={{ width: "72%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </li>
              <li className="mb-2">
                <div className="resume-skill-name">JavaScript</div>
                <div
                  className="progress resume-progress"
                  style={{ height: "5px", background: "white" }}
                >
                  <div
                    role="progressbar"
                    style={{ width: "72%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </li>

              <li className="mb-2">
                <div className="resume-skill-name">Node.js</div>
                <div
                  className="progress resume-progress"
                  style={{ height: "5px", background: "white" }}
                >
                  <div
                    role="progressbar"
                    style={{ width: "52%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </li>
              <li className="mb-2">
                <div className="resume-skill-name">HTML/CSS/LESS</div>
                <div
                  className="progress resume-progress"
                  style={{ height: "5px", background: "white" }}
                >
                  <div
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </li>
            </ul>
          </div>

          <div className="font-weight-bold" style={{ margin: "30px 0" }}>
            <h4 className="resume-skills-cat font-weight-bold">Backend</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <div className="resume-skill-name">NodeJS/Express</div>
                <div
                  className="progress resume-progress"
                  style={{ height: "5px", background: "white" }}
                >
                  <div
                    role="progressbar"
                    style={{ width: "72%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </li>
              <li className="mb-2">
                <div className="resume-skill-name">Python/Django</div>
                <div
                  className="progress resume-progress"
                  style={{ height: "5px", background: "white" }}
                >
                  <div
                    role="progressbar"
                    style={{ width: "52%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </li>
            </ul>
          </div>

          <div className="other-skills-container">
            <h4
              className="resume-skills-cat font-weight-bold"
              style={{ width: "30%" }}
            >
              Others Skills
            </h4>
            <ul className="list-inline" style={{ listStyleType: "disc" }}>
              <li className="other-skills">AWS (EC2, VPC, S3, LAMBDA, etc)</li>
              <li className="other-skills">Git/Github</li>
              <li className="other-skills">Wireframing/Figma </li>
              <li className="other-skills">Wireframing </li>
              <li className="other-skills">Code Review</li>
              <li className="other-skills">Unit Testing/Jest, Supertest </li>
              <li className="other-skills">Process flow/Draw.io</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="aws-badge-container">
          <div
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id="9005357a-bfe3-40e1-a0fd-d5d1e26e04b0"
            data-share-badge-host="https://www.youracclaim.com"
          ></div>          
      </section>
      <section className="education-container">
        <h2> Education </h2>
        <div className="resume-section-content">
          <ul className="list-unstyled">
            <li className="mb-2">
              <div className="school-attended">
                Full Stack Web Development & Computer Science
              </div>
              <div className="resume-degree-org">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.lambdaschool.com"
                >
                  Lambda School, California USA
                </a>
              </div>
              <span>August 2019 - Present</span>
            </li>
            <li>
              <div className="school-attended">BSc Biochemistry</div>
              <div className="resume-degree-org">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://oauife.edu.ng/academics/faculties/sciences"
                >
                  Obafemi Awolowo University, Nigeria
                </a>
              </div>
              <span>2008 - 2012</span>
            </li>
          </ul>
        </div>
        <div className="resume-section language-section mb-5">
          <h2>Language</h2>
          <div className="resume-section-content">
            <ul className="list-unstyled">
              <li className="resume-skill-name">English</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="social-media-container">
        <button className="social-media">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/temitopeakinsoto"
          >
            Linkedin
          </a>
        </button>
        <button className="social-media">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.temitopeakinsoto.com/#featured-projects"
          >
            Projects
          </a>
        </button>
        <button className="social-media">
          <a href={resume} download="A pdf copy of my resume">
            Resume
          </a>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
