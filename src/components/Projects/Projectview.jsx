

const Projectview = ({project}) => {
  return (
    <div className="card-info">
      <img src={project.image} alt="" className="img-card"/>
      <h4>{project.title}</h4>
      <p>{project.description}</p>
    </div>
  )
}

export default Projectview
