import React, { useEffect, useState } from "react";
import "../style/Projects.scss";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";
// import API from "../services/API";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Project`)
      .then((response) => {
        console.log(response);
        setProjects(response.data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="project-page">
        {projects &&
          projects.map((project) => {
            return (
              <div className="card-picture">
                <img src={project.image} alt={project.name} />
                <section className="project-description">
                  <p>{project.description}</p>
                  <div className="technos">
                    <p>Technos utilisés :</p>
                    <img src={project.front} alt={project.name} />
                    <img src={project.back} alt={project.name} />
                  </div>
                  <div className={classes.root}>
                    <a href={project.lien}>
                      <Button variant="contained" color="primary">
                        En savoir plus
                      </Button>
                    </a>
                  </div>
                </section>
              </div>
            );
          })}
      </div>
    </>
  );
}
