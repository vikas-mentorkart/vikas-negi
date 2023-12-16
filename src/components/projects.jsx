import React from "react";
import { Fade } from "react-reveal";
import "../styles.scss";
import Project from "./project";

function Projects() {
  const projects = [
    {
      projectImage:"https://firebasestorage.googleapis.com/v0/b/vikas-negi-3e0ef.appspot.com/o/lms.jpg?alt=media&token=726e7e81-aa46-4cbd-8d8b-ff9094d2293b",
      projectTitle: "Mentorkart Academy",
      projectDescription:
        `Learning Management System (LMS) built on Next.js, Wrote efficent and scalable code with the help of NextJS
        and organized all the API calls with the help of Redux. The platform Offers a wide range of functionalities like, sessions, resources, 
        assessments and and features like video watch time tracking, session analytics, and attendance report etc...`,
      // projectSource: "https://github.com/vikas-mentorkart/connectX",
      projectLink: "https://academy.mentorkart.org/",
      keySkills: "NextJS, Redux, Github, Jira",
      fade: "top",
    },
    {
      projectImage:"https://firebasestorage.googleapis.com/v0/b/vikas-negi-3e0ef.appspot.com/o/jobs.jpg?alt=media&token=0b9e93a9-0ad4-4ad6-96a3-d2c202e766af",
      projectTitle: "Mentorkart Jobs",
      projectDescription:
        `Job Portal built on Next.js, Utilized NextJS's SSR for SEO optimization and wrote efficient and scalable code for API requests using Redux.
        The platform offers various featues like posting jobs, shortlisting and schduling interview of candidate. Email and whatsapp is triggered on every event. 
        like getting shortlisted of clearing interview round.`,
      // projectSource: "https://github.com/vikas-mentorkart/connectX",
      projectLink: "https://jobs.mentorkart.org/",
      keySkills: "NextJS, Redux, Github, Jira",
      fade: "top",
    },
    {
      projectImage:
        "https://firebasestorage.googleapis.com/v0/b/vikas-negi-3e0ef.appspot.com/o/connectx.bmp?alt=media&token=eff66f1b-8e98-4a0a-bb21-3cb84b1dc9eb",
      projectTitle: "Real-time Chatting Application",
      projectDescription:
        "Utilized React's component based Architecture to make a seamless real-time chatting application which utilizes firebase in backend",
      projectSource: "https://github.com/vikas-mentorkart/connectX",
      projectLink: "https://connectx-78d62.web.app/",
      keySkills: "ReactJS, Redux, Firebase",
      fade: "right",
    },
    {
      projectImage:
        "https://firebasestorage.googleapis.com/v0/b/vikas-negi-3e0ef.appspot.com/o/project2.45a65b1bb7f4e18d6530.png?alt=media&token=cf7abdbb-5ab2-445e-8778-078b51014106",
      projectTitle: "Weather Forecast",
      projectDescription:
        "Built a seemless UI with React and Utilized Openweathermap API for the purpose of weather related data ",
      projectSource: "https://github.com/vikas-mentorkart/weatherforecast",
      projectLink: "https://vikas-mentorkart.github.io/weatherforecast/",
      keySkills: "ReactJS, API",
      fade: "left",
    },
    {
      projectImage:
        "https://firebasestorage.googleapis.com/v0/b/vikas-negi-3e0ef.appspot.com/o/project3.f1c73d1aaec10592d148.png?alt=media&token=242576fe-27dc-4cc4-bcea-1184224bd3f5",
      projectTitle: "Snake Game",
      projectDescription:
        "Utilizes pure HTML, CSS and Javascript. With the help of JavaScript logic and DOM to make a snake game",
      projectSource: "https://github.com/vikas-mentorkart/snake",
      projectLink: "https://vikas-mentorkart.github.io/snake/",
      keySkills: "HTML, CSS, JavaScript and DOM",
      fade: "bottom",
    },
  ];
  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <Fade bottom>
            <h2 className="section-title dark-blue-text">Projects</h2>
          </Fade>

          <div className="row"></div>
          {projects.map((item, i) => {
            return <Project data={item} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
