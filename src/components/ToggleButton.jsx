import { useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice.js";
import sunIcon from "../assets/sun.png";
import moonIcon from "../assets/moon.png";
import "./ToggleButton.css";

function ToggleButton() {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <input type="checkbox" id="toggle" onChange={handleToggle} />
      <label
        htmlFor="toggle"
        style={{
          "--default-icon": `url(${moonIcon})`,
          "--checked-icon": `url(${sunIcon})`,
        }}
      ></label>
    </div>
  );
}

export default ToggleButton;
