import React from "react";
import "./Header.css";
import EDMPhoto from "../images/IMG_5019.JPG";
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export function Header() {
  return (
    <div className="info">
      <img className="info--photo" src={EDMPhoto} alt="emanuele del monte" />
      <h1 className="info--fullname">Yamil Silva</h1>
      <h5 className="info--role">Junior Web Developer</h5>
      <p className="info--website">
        <a
          className="info--websiteLink"
          href="https://www.yamilmsilva.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          yamilmsilva.com
        </a>
      </p>

      <div className="info--buttons">
        <address>
          <a href="mailto:yamilmsilva@gmail.com">
            {" "}
            <button className="button button--email">
              <FaEnvelope icon={FaEnvelope} className="info--icon" />
              Email
            </button>
          </a>
        </address>
        <a
          href="https://www.linkedin.com/in/yamilsilva/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button button--linkedin">
            <FaLinkedin icon={FaLinkedin} className="info--icon" />
            LinkedIn
          </button>
        </a>
      </div>

    </div>
  );
}
