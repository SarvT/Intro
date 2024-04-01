import React from 'react'
import Carasoul from "./Carasoul"


export default function Projects() {
  return (
    <div>
      <h3 className="pr-head">Projects</h3>
      <div className="main-pr">
        {/* <div className="sl-show-container">
          <div className="slides fade">
            <div className="num-text">1/3</div>
            <img src="./Mockup 1.png" style={{ width: "100%" }} alt="" />
            <div className="txt">Caption</div>
          </div>
          <div className="slides fade">
            <div className="num-text">2/3</div>
            <img src="./Mockup 2.png" style={{ width: "100%" }} alt="" />
            <div className="txt">Caption</div>
          </div>
          <div className="slides fade">
            <div className="num-text">3/3</div>
            <img src="./Mockup 3.png" style={{ width: "100%" }} alt="" />
            <div className="txt">Caption</div>
          </div>
          <div className="slides fade">
            <div className="num-text">3/3</div>
            <img src="./Mockup 12.png" style={{ width: "100%" }} alt="" />
            <div className="txt">Caption</div>
          </div>

          <a onclick="slides(-1)" className="prev"></a>
          <a onclick="slides(1)" className="next"></a>
        </div>

        <br />

        <div style={{ textAlign: "center" }}>
          <span className="dot" onclick="currentSlide(1)"></span>
          <span className="dot" onclick="currentSlide(2)"></span>
          <span className="dot" onclick="currentSlide(3)"></span>
          <span className="dot" onclick="currentSlide(4)"></span>
        </div> */}

        <Carasoul/>
      </div>
    </div>
  )
}
