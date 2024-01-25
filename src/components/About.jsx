import { Link } from "react-router-dom"

export default function About(){
  return(<>
    <div style={style.content}>
      <h1>About</h1>
      <Link to="/"></Link>
    </div>
  </>)
}
const style = {
  content:{
    "background":"purple",
    "padding":"10px",
    "textAlign": "center"
  }
}