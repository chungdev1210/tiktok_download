import React, { useEffect, useState } from 'react'
import Header from '../Headers/Header'
import Footer from '../Footer/Footer'
import { routes } from '../../Routers/Router'
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './Main.scss'
import clsx from 'clsx';
import axios from 'axios';

export default function Main() {

   const [isTheme, setTheme] = useState(true);

   const props = {
      isTheme,
      setTheme
   }

   const getUserIp = () => {
      axios.get('https://ipinfo.io/?token=1f2b772a490849')
      .then( response => {
         if (response.status == '200') {
            const ipUser = {
               ip: response.data.ip
            };
            localStorage.setItem("ip", JSON.stringify(ipUser));
         }
      })
   }

   useEffect( () => {
      getUserIp()
   }, [])

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

