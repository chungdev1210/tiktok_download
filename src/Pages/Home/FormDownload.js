import React, { createRef, useContext, useState } from 'react';
import { StateContext } from '../../Services/Context/StateProvider';
import { ToastContainer, toast } from 'react-toastify';


export default function FormDownload() {
   const { dataTiktok, getData, resetData } = useContext(StateContext);
   const [link, setLink] = useState('');
   const InputRef = createRef();
   // console.log(dataTiktok)

   const handleSubmit = (e) => {
      e.preventDefault();
      if (link === "") {
         toast.error("Please fill link !!!");
      } else {
         getData(link)
      }
   }

   const handleChangeValue = (e) => {
      const link = e.target.value;
      if (link !== "") {
         setLink(link)
      } else {
         setLink('')
      }
   }

   const handleClear = () => {
      setLink('')
   }
   
   const handleDownload = (e) => {
      e.preventDefault();
      resetData();
      setLink('')
   }

   return (
      <div className='hero-form'>
         <form onSubmit={handleSubmit}>
            <div className='hero-input'>
               <div className='hero-input-left'>
                  <div className='input-icon'>
                     <i className="fa-sharp fa-solid fa-link icon-link"></i>
                     <input
                        name="url"
                        id="url"
                        value={link}
                        type="text"
                        className="form-control form-input"
                        placeholder="Dán liên kết TikTok vào đây"
                        onChange={handleChangeValue} 
                     />
                     {
                        link !== "" 
                        ? 
                        <div onClick={handleClear} className='clear'>
                           <i className="fa-solid fa-xmark"></i>
                           <span>Clear</span>
                        </div>
                        : null
                     }
                  </div>
               </div>

               {
                  Object.keys(dataTiktok).length === 0 || link === ""
                  ?
                  (<div className='hero-input-right'>
                     <button type='submit' className='btn btn-go flex-center'>Download</button>
                  </div>)
                  :
                  (<div>
                     <a href='#' onClick={handleDownload} className='down__server2 btn btn-secondary btn-sm'>Download more</a>
                  </div>)
               }
               
            </div>
         </form>
         <ToastContainer />
      </div>
   )
}
