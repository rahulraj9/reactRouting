export default function NavBar(props){
  console.log("props",props.setPage)
  return(
    <div style={style.mainDiv}>
      <h3 style={style.navItem} onClick={(e)=>props.setPage('home')} >Home</h3>
      <h3 style={style.navItem} onClick={(e)=>props.setPage('about')}>About</h3>
      <h3 style={style.navItem}  onClick={(e)=>props.setPage('items')}>Items</h3>
    </div>
  )
}

const style = {
  mainDiv:{
    "background":"#daede6",
    "display":"flex",
    "padding":"10px"

  },
  navItem:{
    margin: "0 10px",
  }
}