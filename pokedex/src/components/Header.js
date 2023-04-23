import React from "react";
import {useNavigate} from "react-router-dom"
import "../Header.css"

const Header = () => {
  let navigate = useNavigate(); 
  const homeChange = () =>{
    navigate("/home")
  }
  const aboutChange = () =>{
    navigate("/about")
  }

  return (
    <nav>
      <img
      alt="pokémon-logo"
      src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"/>

      <div className="headerRoutes">
        <button onClick={homeChange}><h3>Home</h3></button>
        <button onClick={aboutChange}><h3>About</h3></button>
      </div>
    </nav>
  );
};

export default Header;
