import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header(props) {

   const handleChangeTheme = () => {
      if (props.isTheme) {
         props.setTheme(false);
      } else {
         props.setTheme(true);
      }
   }

   return (
      <div className="navbar">
         <div className="container-fluid">
            <div className="navbar-left">
               <Link className="navbar-brand" to="/" title="Tải Video TikTok">
                  Snap<span>Tik</span>
               </Link>
            </div>
            <div className="navbar-right">
               <div className="nav-item dropdown">
                  <button
                     onClick={handleChangeTheme}
                     type="button"
                     className="reset-button navbar-btn"
                  >
                     {props.isTheme ? (
                        <i className="fa-sharp fa-solid fa-sun"></i>
                     ) : (
                        <i className="fa-sharp fa-solid fa-moon"></i>
                     )}
                     {/* <i className="fa-sharp fa-solid fa-moon"></i> */}
                     {/* <i className="fa-sharp fa-solid fa-sun"></i> */}
                  </button>
                  <button
                     type="button"
                     className="reset-button navbar-btn navbar-lang"
                  >
                     <span>Languages</span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
