import React from "react";
import "../style/Aboutme.scss";

export default function Aboutme() {
  return (
    <>
      <div className="first-title">
        <img
          className="my-photo"
          src="https://www.upsieutoc.com/images/2021/02/03/myphoto.png"
          alt="me"
        />
        Je suis Brieuc Quertier, développeur web en recherche de projets.
      </div>
      <div className="description">
        <p>
          Etant été formé à la Wild Code School, je travaille actuellement en
          React.JS sur le front-end et je suis en Node.JS sur le framework
          express pour le coté back-end.
        </p>
      </div>
      <div className="find">
        <p>Vous pouvez me trouver ici</p>
        <div className="link"></div>
      </div>
    </>
  );
}
