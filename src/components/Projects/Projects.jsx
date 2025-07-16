import "./projects.css";
import { useState, useEffect } from "react";
import { getProjects } from "../../data/data";
import Projectmap from "./Projectmap.jsx";
import CategoryFilter from "./Categoryfilter.jsx";


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

      <CategoryFilter 
        categorySelected={categorySelected} 
        setCategorySelected={setCategorySelected} 
      />

      <Projectmap projects = {filteredProjects} />
    </div>
  )
}

export default Projects
