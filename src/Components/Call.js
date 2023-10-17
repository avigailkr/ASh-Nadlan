import "./style.css";

const Call=({props})=>{

  let imgd="man-call.png";
    return<>
     <h2>אופס כנראה שאינך מחובר</h2>
    <p>דף זה הינו לרשומים בלבד</p>
    
    <div className="container">
      <img src={imgd} alt="Avatar" className="image"/>
      <div className="middle">
        <div className="text">התחברות</div>
      </div>
    </div>
    <div className="container">
      <img src={imgd} alt="Avatar" className="image"/>
      <div className="middle">
        <div className="text">הרשמה</div>
      </div>
    </div>
    
    </>
}
export default Call;