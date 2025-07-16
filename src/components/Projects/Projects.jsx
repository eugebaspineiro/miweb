import "./projects.css";
import { getProyects } from "../../data/data";


const Projects = () => {

  getProyects()
  .then ((response)=> {
    console.log(response)
  })
  .catch((error)=>{
    console.error(error)
  })
  .finally(()=> {
    console.log("finalizo la promesa")
  })


  return (
    <div className="projects_body">
      <div className="projects_title">
        <h3>Proyectos</h3>
        <p>Del concepto a la realidad</p>
      </div>
      <div className="projects_button">
        <p>Diseño</p>
        <p>|</p>
        <p>Frontend</p>
      </div>
    </div>
  )
}

export default Projects
