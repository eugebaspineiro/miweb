import Projectview from "./Projectview"

const Projectmap = ({projects}) => {
  return (
    <div className="cards-order">
        {
          projects.map((project)=>(

            <Projectview project={project} key= {project.id}/>

          ))
        }
    </div>
  )
}

export default Projectmap
