import "./footer.css";
import line from "../../assets/line.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";

const Footer = () => {


  return (
    <div className="footer_body">
        <div className="footer_grey">
            
        </div>
      <div className="footer_line">
        <img src={line} className="line_img"/>

      </div>
      <div className="footer_contact">
        <div className="social_networks">
            <img src={linkedin}/>
            <img src={instagram}/>
        </div>
        <div>
            <p> ©2025 - eugenia baspineiro </p>
        </div>
   

      </div>
    </div>
  )
}

export default Footer
