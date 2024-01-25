import { NavLink, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <>
    <div style={style.mainDiv}>
      <h3 style={(style.navItem)}>
        <NavLink to="/" style={style.navItem} >Home</NavLink>
      </h3>
      <h3 style={style.navItem}>
        <NavLink to="/about" style={style.navItem}>About</NavLink>
      </h3>
      <h3 style={style.navItem}>
        <NavLink to="/items" style={style.navItem}>Item</NavLink>
      </h3>
    </div>
    <Outlet></Outlet>
    </>
    
    );
}

const style = {
  mainDiv: {
    background: "#daede6",
    display: "flex",
    padding: "10px",
    cursor: "pointer"
    
  },
  navItem: {
    margin: "0 10px",
    "textDecoration": "none"
  },
};
