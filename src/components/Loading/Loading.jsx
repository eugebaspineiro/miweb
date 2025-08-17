import { RotateLoader } from "react-spinners"
import "./loading.css"

const Loading = () => {
  return (
    <div className="loading">
      <RotateLoader className="spinner"/>
    </div>
  )
}

export default Loading
