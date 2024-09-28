import { useState } from "react";
import "../App.css";

const Header = () => {
  const [buttonText, setButtonText] = useState("Login");

  let value = "Login";

  return (
    <div className="header">
      <ul className="headerList">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button
        className="buttonClass"
        onClick={() => {
          const val = (buttonText === "Login" ? "Logout":"Login");
          setButtonText(val);
          console.log(buttonText);
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Header; //default export

///component - JS functions which returns JSX
