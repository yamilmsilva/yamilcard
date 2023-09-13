import React from "react";
import "./Article.css";

export function Article() {
  return (
    <div className="article">
      <section className="about">
        <h3 className="about--title">About</h3>
        <p className="about--paragraph">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </section>
      <section className="interests">
        <h3 className="interests--title">Interests</h3>
        <p className="interests--paragraph">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </section>
    </div>
  );
}
