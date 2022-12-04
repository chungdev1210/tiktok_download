import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { StateContext } from '../../Services/Context/StateProvider';

export default function Download() {
   const { dataTiktok, resetData } =  useContext(StateContext)
   const { data } = dataTiktok;

   return (
      <div className='download__video mt-2'>
         <div className='container'>
            <div className='row'>
               <div className='col-6 down_left mt-2'>
                  <div className='down__img'>
                     <video src={data.video_data.nwm_video_url} alt='title' />
                  </div>
                  <div className='down__info'>
                     <h5 className='down__title'>{data.desc}</h5>
                     <p className='down__author'>{data.author.nickname}</p>
                  </div>
               </div>
               <div className='col-12 col-md-4 offset-md-2 down__right'>
                  <a href='#' className='down__server1 btn btn-primary mb-2' download={data.video_data.nwm_video_url}>
                     Download server 1
                  </a>
                  <a href='#' className='down__server2 btn btn-success mb-2' download={data.video_data.nwm_video_url_HQ}>Download server 2</a>
               </div>
            </div>
            <hr className='mt-5'/>
         </div>
      </div>
   )
}
