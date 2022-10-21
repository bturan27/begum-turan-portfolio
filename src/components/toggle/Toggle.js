import "./toggle.css";
import Sun from "../../img/sun.png";
import { ThemeContext } from "../../context";
// import Star from "../../img/star.png";
import { useContext } from "react";


const Toggle = () => {

    const theme= useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({type: "TOGGLE" })
    }
  return (
    <div className="t">
      <img src={Sun} alt="" className="t-icon" />
      {/* <img src={Star} alt="" className="t-icon" /> */}
      <div className="t-icon" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 35 }}></div>
    </div>
  );
};

export default Toggle;