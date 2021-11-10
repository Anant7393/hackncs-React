import React from "react";

function Club() {
  return (
    <div className="clubsection">
      <h1>Clubs</h1>
      <div className="clubs">
        <div className="clubup">
          <div className="club1">
            <img src="https://hackncs.com/img/monitor.svg"></img>
          </div>
          <br />
          <div>
            <h2>Programming</h2>
            <br />
            <p>
              We at programming club are a bunch of lazy people who love to find
              easy workaround and easy solutions to real life problems.
            </p>
          </div>
        </div>

        <div className="clubup">
          <div className="club2">
            <img src="https://hackncs.com/img/code.svg"></img>
          </div>
          <br />
          <div>
            <h2>Web</h2>
            <br />
            <p>
              We don’t hunt for spiders at web club…seriously! Our members are
              mostly involved in development of both frontend and backend parts
              of web based application.
            </p>
          </div>
        </div>

        <div className="clubup">
          <div className="club3">
            <img src="https://hackncs.com/img/pen.svg"></img>
          </div>
          <br />
          <div>
            <h2>Design</h2>
            <br />
            <p>
              We are a bunch of creative headed geeks who love to create digital
              art and designs. Photoshop, Illustrator and more are the canvas
              for our imaginations!
            </p>
          </div>
        </div>

        <div className="clubup">
          <div className="club4">
            <img src="https://hackncs.com/img/github.svg"></img>
          </div>
          <br />
          <div>
            <h2>Technical</h2>
            <br />
            <p>
              We love open source products and try our best to contribute to the
              open source community in any way possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Club;
