import React, { useEffect, useState } from "react";
import "../style/Projects.scss";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import API from "../services/API";

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    color: "black",
  },
  media: {
    height: 150,
    width: 450,
  },
});

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
        <div className="card">
          {projects &&
            projects.map((project) => {
              return (
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={project.image}
                      title={project.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {project.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {project.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <a href={project.lien}>
                      <Button variant="contained" size="small" color="primary">
                        Learn More
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              );
            })}
        </div>
      </div>
    </>
  );
}
