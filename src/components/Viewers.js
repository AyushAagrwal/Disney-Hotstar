import React from "react";

//!IMPORTING ALL IMAGES
import view1 from "../Images/viewers-national.png";
import view2 from "../Images/viewers-marvel.png";
import view3 from "../Images/viewers-pixar.png";
import view4 from "../Images/viewers-disney.png";
import view5 from "../Images/viewers-starwars.png";

//! IMPORTING ALL VIDEOS
import video1 from "../videos/1564676296-national-geographic.mp4";
import video2 from "../videos/1564676115-marvel.mp4";
import video3 from "../videos/1564676714-pixar.mp4";
import video4 from "../videos/1564674844-disney.mp4";
import video5 from "../videos/1608229455-star-wars.mp4";

const Viewers = () => {
  return (
    <>
      <div className="Container">
        <div className="View-Wrap">
          <img src={view1} alt="" />
          <video
            id="play-on-hover"
            autoPlay={true}
            loop={true}
            playsInline={true}
          >
            <source src={video1} type="video/mp4" />
          </video>
        </div>
        <div className="View-Wrap">
          <img src={view2} alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={video2} type="video/mp4" />
          </video>
        </div>
        <div className="View-Wrap">
          <img src={view3} alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={video3} type="video/mp4" />
          </video>
        </div>
        <div className="View-Wrap">
          <img src={view4} alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={video4} type="video/mp4" />
          </video>
        </div>
        <div className="View-Wrap">
          <img src={view5} alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={video5} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Viewers;
