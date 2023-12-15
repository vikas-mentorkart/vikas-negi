import React from "react";
import { Fade } from "react-reveal";
import Tilt from "react-parallax-tilt";
import "../styles.scss";

function Project({ data }) {
  return (
    <Fade left>
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <div className="project-wrapper__text load-hidden">
            <h3 className="project-wrapper__text-title">
              {data?.projectTitle}{" "}
            </h3>
            <div>
              <p className="mb-4">
                <b>Key Skills: {data?.keySkills}</b>
              </p>
              <p className="mb-4">
                <b>Description: </b> {data?.projectDescription}
              </p>
            </div>
            <a
              rel="noreferrer"
              target="_blank"
              className="cta-btn cta-btn--hero"
              href={data?.projectLink}
            >
              See Live
            </a>
{!!data?.projectSource?            <a
              rel="noreferrer"
              target="_blank"
              className="cta-btn text-color-main"
              href={data?.projectSource}
            >
              Source Code
            </a>:<></>}
          </div>
        </div>
        <div className="col-lg-8 col-sm-12">
          <div className="project-wrapper__image load-hidden">
            <a rel="noreferrer" href="#!" target="_blank">
              <Tilt
                glareEnable={true}
                tiltMaxAngleX={3}
                tiltMaxAngleY={3}
                perspective={1000}
                glareColor={"rgb(255,0,0)"}
              >
                <div>
                  <img
                    alt="img"
                    className="img-fluid"
                    src={data?.projectImage}
                  />
                </div>
              </Tilt>
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Project;
