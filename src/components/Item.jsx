import { Link } from "react-router-dom"

export default function Item(){
  return(<>
    <div style={style.content}>
      <h1 >Item</h1>
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