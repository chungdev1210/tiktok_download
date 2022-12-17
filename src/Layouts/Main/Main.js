import React, { Component, useState } from 'react'
import Header from '../Headers/Header'
import Footer from '../Footer/Footer'
import { routes } from '../../Routers/Router'
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './Main.scss'
import clsx from 'clsx';

export default function Main() {
   const [isTheme, setTheme] = useState(false);

   const props = {
      isTheme,
      setTheme
   }

   return (
      <div className={clsx('app', isTheme && 'dark-theme')}>
         <Header { ...props }/>
         <main id="main" className='main' style={{ height: 'auto' }}>
            {routes}
         </main>
         <hr />
         <Footer />
      </div>
   )
}

