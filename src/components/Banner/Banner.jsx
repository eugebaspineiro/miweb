import "./banner.css";
import profile from "../../assets/profile.png";

const Banner = () => {



    
  return (
    <div className="banner_body">
        <div className="banner_center">
            <img src={profile} alt="" className="banner_img"/>        
        </div>
        <div className="banner_text">
            <h2>Diseñadora UX/UI - Frontend Developer </h2>
            <p>Transformo ideas en interfaces intuitivas y funcionales</p>
        </div>
        <div className="banner_button">
            <button>Ver mi trabajo</button>
        </div>      
    </div>
  )
}

export default Banner
