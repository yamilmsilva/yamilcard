import React from "react";
import "./Footer.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <div className="footer">
      <a
        href="https://github.com/yamilmsilva"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare  icon={FaGithubSquare} className="footer--icon" />
      </a>

      <a
        href="https://www.linkedin.com/in/yamilsilva/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin icon={FaLinkedin} className="footer--icon" />
      </a>
    </div>
  );
}