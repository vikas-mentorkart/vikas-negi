import React from "react";

function Footer() {
  return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a rel="noreferrer" href="#top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div className="social-links">
          <a
            rel="noreferrer"
            href="https://twitter.com/VikasNe97228772?t=6aLf9uhcINc5ElsRu-_RLw&s=35"
            target="_blank"
          >
            <i className="fa fa-twitter fa-inverse"></i>
          </a>
          <a
            rel="noreferrer"
            href="https://linkedin.com/in/vikas-negi-770116252"
            target="_blank"
          >
            <i className="fa fa-linkedin fa-inverse"></i>
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/vikas-mentorkart"
            target="_blank"
          >
            <i className="fa fa-github fa-inverse"></i>
          </a>
        </div>

        <hr />

        <p className="footer__text">
          © 2023 -
          <a
            rel="noreferrer"
            href="https://github.com/vikas-mentorkart"
            target="_blank"
          >
            Vikas Negi
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
