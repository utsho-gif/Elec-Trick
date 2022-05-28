import React from "react";

const About = () => {
  return (
    <div className="my-5">
      <img
        width="200"
        height="200"
        className="img-fluid my-5"
        style={{ borderRadius: "50%" }}
        src="https://i.ibb.co/9qCppVZ/IMG-20191111-121405-2.jpg"
        alt=""
      />
      <div className="container font-semibold">
        <h1>Name: Iftekaar Alam Utsa</h1>
        <h1>Email: future.slangsta76@gmail.com</h1>
        <h2 className="mt-7">
          Skills:{" "}
          <ul>
            <li>ReactJS</li>
            <li>Front-End</li>
            <li>MongoDB</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
          </ul>
        </h2>
        <h2 className="mt-7">
          My Websites:{" "}
          <ul>
            <li><a className="link text-accent" href="https://hike-server.web.app/">Hike Serve</a></li>
            <li><a className="link text-accent" href="https://double-click-9f53a.web.app/">Double CLick</a></li>
          </ul>
        </h2>
      </div>
    </div>
  );
};

export default About;
