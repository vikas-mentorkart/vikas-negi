import React from "react";
import Fade from "react-reveal/Fade";

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <Fade>
          <h2 className="section-title">Contact</h2>
        </Fade>
        <Fade bottom>
          <div className="contact-wrapper load-hidden">
            <p className="contact-wrapper__text">negivikas201@gmail.com</p>
            <a
              rel="noreferrer"
              target="_blank"
              className="cta-btn cta-btn--resume"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=negivikas201@gmail.com"
            >
              Call to Action
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Contact;
