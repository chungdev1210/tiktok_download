import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.scss"

export default function Header() {
   return (
      <div className='navbar'>
         <div className='container-fluid'>
            <div className='navbar-left'>
               <Link className="navbar-brand" to="/" title="Tải Video TikTok">Snap<span>Tik</span></Link>
            </div>
            <div className='navbar-right'>
               <div className='nav-item dropdown'>
                  <button type='button' className='reset-button navbar-btn'>
                     <i className="fa-sharp fa-solid fa-moon"></i>
                  </button>
                  <button type='button' className='reset-button navbar-btn navbar-lang'>
                     <span>Languages</span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}
