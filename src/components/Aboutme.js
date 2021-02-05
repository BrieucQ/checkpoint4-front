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
          Ayant été formé à la Wild Code School, je travaille actuellement en
          React.JS sur le front-end et je suis en Node.JS sur le framework
          express pour le coté back-end.
        </p>
        <p>
          Je serais a la recherche d'un emploi dès la fin de mon stage pour
          pouvoir mettre en avant les compétences que j'ai pu acquérir depuis
          quelques mois maintenant.
        </p>
      </div>
      <div className="find">
        <p>Vous pouvez me trouver ici</p>
      </div>
      <div className="link">
        <a href="https://github.com/BrieucQ">
          <img
            src="https://interalliance.org/wp-content/uploads/2020/10/GitHub-Mark.png"
            alt="github"
          />
        </a>
        <a href="https://www.linkedin.com/in/brieuc-quertier/">
          <img
            src="https://image.flaticon.com/icons/png/512/174/174857.png"
            alt="linkedin"
          />
        </a>
        <a href="mailto:brieucquertier73@gmail.com">
          <img
            src="data:image/png;base64,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"
            alt="mail"
          />
        </a>
      </div>
      <div className="bottom-text">
        <p>
          Si vous souhaitez plus d'amples d'informations sur mon parcours, vous
          pouvez également consultez mon CV qui est disponible ci-joint.
        </p>
        <a href="https://drive.google.com/file/d/1El934i5HgZh7DxgdH7vUOwINr3bLnLBa/view">
          <img
            src="https://www.upsieutoc.com/images/2021/02/04/Screenshot_2021-02-04-Peach-and-Yellow-Playful-HR-IT-Specialist-Resume---CV_QUERTIER_Brieuc-2-pdf.png"
            alt="CV"
          />
        </a>
      </div>
    </>
  );
}
