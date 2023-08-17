import React, { useState } from 'react';
import html from "../svgs/html-svgrepo-com.svg"
import css from "../svgs/css-svgrepo-com.svg"
import javascript from "../svgs/javascript-svgrepo-com.svg"
import github from "../svgs/github-142-svgrepo-com.svg"
import reactjs from "../svgs/react-fill-svgrepo-com.svg"
import redux from "../svgs/redux-svgrepo-com.svg"
import figma from "../svgs/figma-svgrepo-com.svg"
import taiwind from "../svgs/tailwind-svgrepo-com.svg"
import bootstrap from "../svgs/bootstrap-fill-svgrepo-com.svg"
import typescript from "../svgs/typescript-svgrepo-com.svg"
import mongodb from "../svgs/mongodb-svgrepo-com.svg"
import python from "../svgs/python.svg"
import mysql from "../svgs/mysql-svgrepo-com.svg"
import jest from "../svgs/jest-svgrepo-com.svg"
import sequelize from "../svgs/sequelize-svgrepo-com.svg"
import shovel from "../svgs/shovel-svgrepo-com.svg"
import board from "../svgs/board.svg"
import algorithm from "../svgs/graph-svgrepo-com.svg"
import communication from "../svgs/communication-5-svgrepo-com.svg"
import node from "../svgs/node-svgrepo-com.svg"
import Projects from './Projects';

function Main() {

  const [info, setinfo] = useState("about")
  // const [language, setLanguage] = useState("pt"); // Estado para rastrear o idioma

  // const toggleLanguage = () => {
  //   const newLanguage = language === "pt" ? "en" : "pt"; // Alternar entre "pt" e "en"
  //   setLanguage(newLanguage);
  // };

  const getInfo = (string) => {
    setinfo(string)
  }

  return (
    <main>
      <div className="div-introduction">
        <h4 className="bem-vindo">Bem-vindo(a) à minha landing page!</h4>
        <button
          onClick={() => getInfo("about")}
          className={info === "about" ? "selected-button" : ""}
        >
          Sobre Mim
        </button>
        <button
          onClick={() => getInfo("abilities")}
          className={info === "abilities" ? "selected-button" : ""}
        >
          Habilidades
        </button>
        <button
          onClick={() => getInfo("projects")}
          className={info === "projects" ? "selected-button" : ""}
        >
          Projetos
        </button>
        <button
          onClick={() => getInfo("contact")}
          className={info === "contact" ? "selected-button" : ""}
        >
          Contato
        </button>
      </div>
      {info === "about" && (
        <div className="div-about about-info">
          <p className="about-text">
            Moro em Brasília - DF
          </p>
          <p className="about-text">
            Formado em Administração
          </p>
          <p className="about-text">
            Comecei a programar em 2022
          </p>
          <p className="about-text">
            Como hobbies, costumo assistir séries e futebol
          </p>
        </div>
      )}
      {info === "abilities" && (
        <div className="div-abilities">
          <div>
            <p>
              <img className="icon" src={html} alt="html"/>
              HTML
            </p>
            <p>
              <img className="icon" src={css} alt="css"/>
              CSS</p>
            <p>
              <img className="icon" src={javascript} alt="javascript"/>
              JavaScript</p>
            <p>
              <img className="icon" src={github} alt="github"/>
              GitHub</p>
            <p>
              <img className="icon" src={reactjs} alt="reactjs"/>
              ReactJs</p>
          </div>
          <div>
            <p>
              <img className="icon" src={redux} alt="redux"/>
              Redux</p>
            <p>
              <img className="icon" src={reactjs} alt="react-native"/>
              React Native</p>
            <p>
              <img className="icon" src={figma} alt="figma"/>
              Figma</p>
            <p>
              <img className="icon" src={taiwind} alt="tailwind"/>
              TailWind</p>
            <p>
              <img className="icon" src={bootstrap} alt="bootstrap"/>
              Bootstrap</p>
          </div>
          <div>
            <p>
              <img className="icon" src={typescript} alt="typescript"/>
              TypeScipt</p>
            <p>
              <img className="icon" src={python} alt="python"/>
              Python</p>
            <p>
              <img className="icon" src={mongodb} alt="mongodb"/>
              MongoDB</p>
            <p>
              <img className="icon" src={mysql} alt="mysql"/>
              MySQL</p>
            <p>
              <img className="icon" src={jest} alt="jest"/>
              Jest</p>
            <p>
              <img className="icon" src={sequelize} alt="sequelize"/>
              Sequelize</p>
          </div>
          <div>
            <p>
              <img className="icon" src={shovel} alt="raspagem"/>
              Raspagem de Dados</p> 
            <p>
              <img className="icon" src={board} alt="padroes"/>
              Padrões de Projeto</p>
            <p>
              <img className="icon" src={algorithm} alt="algoritmos"/>
              Algoritmos</p>
            <p>
              <img className="icon" src={communication} alt="soft skills"/>
              Soft Skills</p>
            <p>
              <img className="icon" src={node} alt="nodejs"/>
              NodeJS</p>
          </div>
        </div>
      )
      }
      {info === "projects" && <Projects />}
      {info === "contact" && (
        <div className="div-contact contact-info">
          <p className="contact-link">
            <a href="https://www.linkedin.com/in/kuytinho/">- LinkedIn</a>
          </p>
          <p className="contact-link">
            <a href="https://github.com/Kuytinho">- GitHub</a>
          </p>
        </div>
      )}

    </main>
  );
}

export default Main;
