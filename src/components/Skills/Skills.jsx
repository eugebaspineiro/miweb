import "./skills.css";
import line from "../../assets/line.svg";


function Skills() {



  return (
    <div className="skills_body">
        <div className="skills_title">
            <h2>Skills</h2>
            <p>Lo que hago y cómo lo hago</p>
        </div>
        <div className="skills_line">
            <img src={line} alt="" />
        </div>
      
    </div>
  )
}

export default Skills
