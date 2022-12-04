import React, { Component } from 'react'
import Header from '../Headers/Header'
import Footer from '../Footer/Footer'
import {routes} from '../../Routers/Router'
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'react-toastify/dist/ReactToastify.css';

export class Main extends Component {
   render() {
      return (
         <>
            <Header />
            <main id="main" style={{height: 'auto'}}>
               {routes}
            </main>
            <hr />
            <Footer />
         </>
      )
   }
}

export default Main