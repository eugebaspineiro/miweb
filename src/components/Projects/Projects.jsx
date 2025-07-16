import "./projects.css";
import { useState, useEffect } from "react";
import { getProjects } from "../../data/data";


const Projects = () => {

  const [ projects, setProjects] = useState([]) /* los corchetes porque voy a consumir un array */
  const [ categorySelected, setCategorySelected] = useState("ux-ui") /* para filtrar por categoria diseño y frontend */

  useEffect( ()=>{

      getProjects()
        .then ((dataProjects)=> {
          setProjects(dataProjects)
        })
      .catch((error)=>{
        console.error(error)
        })
      .finally(()=> {
        console.log("finalizo la promesa")
        })
  }, []);

  //filtrado de proyectos

  const filteredProjects = projects.filter(
    (project) => project.category === categorySelected
  );




  return (
    <div className="projects_body">
      <div className="projects_title">
        <h3>Proyectos</h3>
        <p>Del concepto a la realidad</p>
      </div>

      <div className="projects_button">
        <p
        className={categorySelected === "ux-ui" ? "active" : ""}
        onClick={()=> setCategorySelected("ux-ui")}>
          Diseño
        </p>
        <p>|</p>
        <p
        className={categorySelected === "dev" ? "active" : ""}
        onClick={()=> setCategorySelected("dev")}>
          Frontend
        </p>
      </div>
      <div>
        {
          filteredProjects.map((project)=>(
            <div>
              <img src={project.image} alt="" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

          ))
        }
      </div>
    </div>
  )
}

export default Projects
