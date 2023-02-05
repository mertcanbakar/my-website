import React from "react";
import Developer from "../Pics/b581b177-e5c6-473f-bc4a-5f7f303731c0.jpg";

const MyAbout = () => {
  return (
    <div className="about-container" id="about">
      <div className="developer-photo">
        <img src={Developer} alt="Developer-Guy" />
      </div>
      <div className="my-about">
        <div className="who-im">
          <h2>Who am i?</h2>
          <p>
            I'm Mert Can, 23 years old. I have an associate degree in Computer
            Programming. I live in Istanbul. I've been developing in the
            frontend space for a while. I worked as an image processing
            programmer in an engineering company. I have the ability to solve
            problems. I see myself as successful in this field and I am willing
            to work to be even more successful in the future.
          </p>
        </div>
        <div className="whats-language">
          <h2>What programming languages do i know?</h2>
          <p>
            I know HTML, CSS and JavaScript languages ​​in frontend development.
            I am also proficient in C# and Python languages. I usually use
            Bootstrap and Tailwind as UI library. I also know React.js framework
            and am learning React Native. I am also learning the Vue.js
            framework in the same way. One of my recent goals is to have a basic
            knowledge of PHP and to have knowledge of the backend as well.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyAbout;
