/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "../assets/css/about.css";
import tomesImage from "../assets/imgs/tomes.jpg"
import nileImage from "../assets/imgs/nile.jpg";

const creators = [
  { name: "tomes Doe", image: tomesImage },
  { name: "nile stevenson", image: nileImage },
];

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="creators">
        {creators.map((creator, index) => (
          <div className="creator" key={index}>
            <img src={creator.image} alt={creator.name} />
            <p>{creator.name}</p>
          </div>
        ))}
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.1952649977547!2d31.213111025859522!3d30.031255419198096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584781682635a3%3A0x8e276197b00990b8!2z2YPZhNmK2Kkg2KfZhNiv2LHYp9iz2KfYqiDYp9mE2LnZhNmK2Kcg2YTZhNio2K3ZiNirINin2YTYpdit2LXYp9im2YrYqSDYrNin2YXYudipINin2YTZgtin2YfYsdip!5e0!3m2!1sar!2seg!4v1713300889460!5m2!1sar!2seg"
          // eslint-disable-next-line react/style-prop-object
          width="600"height="450" style="border:0;"allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>{" "}
      </div>
    </div>
  );
}

export default About;