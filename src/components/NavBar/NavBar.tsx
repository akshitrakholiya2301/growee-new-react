import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  useEffect(() => {
    // const update =new framework7();

  }, [setDarkMode]);

  return (
    <>
      <div className="main-navbar">
        <div className="nav-inner">
          <div className="left">
            <a href="#" className="link icon-only panel-open" data-panel="left">
              <span className="new-notification"></span>
              <i className="fa-solid fa-bars"></i>
            </a>
          </div>
          <div className="right">
            <a
              href="#"
              className="color-sheet sheet-open"
              data-sheet=".demo-sheet-swipe-to-close"
              // onClick={() => {
              //   console.log("changed");
              //   document.documentElement.style.setProperty(
              //     "--bg-color",
              //     "#110021"
              //   );
              // }}
            >
              <i className="fas fa-palette"></i>
            </a>
            <ul
              className="dark-light color-sheet"
              onClick={() => {
                console.log("calling");
                if(darkMode!==false){
                  document.documentElement.style.setProperty(
                    "--bg-color",
                    "#110021"
                  );
                }
                else{
                  document.documentElement.style.setProperty(
                    "--bg-color",
                    "#fbf7ff"
                  );
                }
                setDarkMode(!darkMode);
              }}
            >
             
                <li className={`demo-theme-picker light ${darkMode===true?"active":""}`}>
                  <i className="fa-solid fa-moon"></i>
                </li>
    
                <li className={`demo-theme-picker dark ${darkMode===false?"active":""}`}>
                  <i className="fa-solid fa-sun"></i>
                </li>
          
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
