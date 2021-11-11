import React from "react";
import Navbar from "./Navbar";
function Project() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="projects">
        <h2>
          <b>Projects</b>
        </h2>
        <p className="para">
          We work towards a tech-smart ecosystem by organising events, creating
          experiences for college students & faculties. We build projects that
          help them find information/notices, learn problem-solving and engage
          with college culture.{" "}
        </p>
        <div className="exps">
          <div className="exp1">
            <div className="image"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
