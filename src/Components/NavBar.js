import {Link} from "react-router-dom";
import MenuListComposition from "./icons/Menu"
import { useSelector, useDispatch } from "react-redux";
 const NavBar=()=>{

    const selectUser = useSelector(state => state.user.selectedUser);//שליפה של המשתמש הנוכחי שהתחבר
console.log("selectUser")
console.log(selectUser)
return<><div className="topnav">
<Link className="active" to="property">דירות</Link>
{selectUser!=null && <><Link to="addProp">להעלאת מודעה</Link>
<Link to="board">לוח</Link>
<Link to="forum">פורומים</Link>
<Link to="statistic">סטטיסטיקה</Link></>}
<Link to="help">עזרה</Link>
<Link to="about">אודות</Link>
<MenuListComposition/>
</div>
</>

 }
 
 export default NavBar;