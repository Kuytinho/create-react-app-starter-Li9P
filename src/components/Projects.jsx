import React, { useState } from 'react';
// import gif from '../gifs/teste.png'
import '../styles/Card.css';

const Projects = () => {
    const [projectInfoVisible, setProjectInfoVisible] = useState({});

    const projectsData = [
        {
          name: "To-Do-List",
          description: "Projeto feito com Vue.js, que possibilita adicionar listas de compra e edita-las.",
          link: "https://github.com/Kuytinho/Grocery-App"
        },
        {
          name: "Pokedex",
          description: "Projeto feito com React.js, usando o @mui para ajudar na estilização.",
          link: "https://kuytinhopokedex.up.railway.app"
        },
      ];

      const toggleProjectInfo = (projectName) => {
        setProjectInfoVisible((prevInfo) => ({
          ...prevInfo,
          [projectName]: !prevInfo[projectName]
        }));
      };
      
      return (
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <div key={index} className={`project-card ${projectInfoVisible[project.name] ? "active" : ""}`}>
              <h3>
                {project.name}
              </h3>
              {/* {projectInfoVisible[project.name] && (
                <div className='rollout-content'>
                  <img src={project.gif} alt={`${project.name} GIF`} />
                </div>
              )} */}
              {projectInfoVisible[project.name] && (
              <div className='rollout-content'> 
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">Acessar projeto</a>
              </div>
              )}
              <p
                className="toggle-info"
                onClick={() => toggleProjectInfo(project.name)}
              >
                {projectInfoVisible[project.name] ? "Menos informações" : "Mais informações"}
              </p>
            </div>
          ))}
        </div>
      );
    }

export default Projects;
