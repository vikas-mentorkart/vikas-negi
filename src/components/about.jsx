import React from "react";
import { Fade } from "react-reveal";
const profile =
  "https://firebasestorage.googleapis.com/v0/b/vikas-negi-3e0ef.appspot.com/o/profile.299525863367b2dfe1b8.jpg?alt=media&token=683387ac-5b28-45e1-8666-7ee81fa9af34";
const resume =
  "https://firebasestorage.googleapis.com/v0/b/vikas-negi-3e0ef.appspot.com/o/vikas_resume.pdf?alt=media&token=5a8230c2-3dfe-4c57-b377-00fbc38dc18f";

function About() {
  return (
    <section id="about">
      <div className="container">
        <Fade bottom>
          <h2 className="section-title load-hidden">About me</h2>
        </Fade>

        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__image load-hidden">
              <Fade>
                <img
                  src={profile}
                  alt="Profile"
                  className="img-fluid rounded shadow-lg"
                  width="300px"
                  height="auto"
                  style={{ borderRadius: "50%" }}
                />
              </Fade>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info load-hidden">
              <Fade right>
                <p className="about-wrapper__info-text">
                  Hey I am Vikas. I am a Full Stack Web Developer specialized in
                  MERN stack and skilled in writing efficient and scalable code.
                </p>
                <p className="about-wrapper__info-text">
                  I am experienced in Integrating APIs, validatation and Setting
                  up the user flow. I have worked on MERN stack, NextJS, Redux,
                  Firebase, APIs etc. I tend to focus on " What to do " rather
                  than " How to do ". It really helps me in learning and
                  implementing new technologies really quick.
                </p>
                <p className="about-wrapper__info-text">
                  Critical thinking, working under pressure and problem solving
                  are some of my key skills. In the free time I like to learn
                  new things and imporve my skills.
                </p>
              </Fade>
              <span className="d-flex mt-3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--resume"
                  href={resume}
                >
                  View Resume
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
