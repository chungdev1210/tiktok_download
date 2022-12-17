import React, { useContext, useEffect } from "react";
import { StateContext } from "../../Services/Context/StateProvider";
import { saveAs } from "file-saver";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Download(props) {
   const { dataTiktok, resetData } = useContext(StateContext);
   const { data } = dataTiktok;
   const navigate = useNavigate();

   const handleDownload = (e) => {
      e.preventDefault();

      // let _file_name = data.desc.toString().replace(/[^a-zA-Z0-9 ]/g, "_");
      let _file_type = "mp4";
      let _link_download = data.video_data.nwm_video_url_HQ;
      let _prefix = data.prefix_file_name;
      saveAs(_link_download, _prefix + getRandomInt(123456789012) + "." + _file_type);
   };

   const getRandomInt = (int) => {
      let random = Math.floor(Math.random() * int)
      console.log(random)
      return random;
   }

   const handleReset = () => {
      resetData();
      props.setLink("");
   };

   return (
      <div className="download__video mt-2">
         <div className="container">
            <div className="row row--down">
               <div className="col-lg-5 col-md-7 col-sm-10 down_left mt-2">
                  <div className="down__img">
                     <video src={data.video_data.nwm_video_url} alt="title" />
                  </div>
                  <div className="down__info">
                     <h5 className="down__title">{data.desc}</h5>
                     <p className="down__author">{data.author.nickname}</p>
                  </div>
               </div>
               <div className="col-lg-4 col-md-7 col-sm-8 offset-lg-3 down__right">
                  <a href="#" className="down__server1 btn btn-primary mb-2" onClick={handleDownload}>
                     Download server 1
                  </a>
                  <a href="#" className="down__server2 btn btn-success mb-2" onClick={handleDownload}>
                     Download server 2
                  </a>
                  <button type="button" onClick={handleReset} className="down__server2 btn btn-secondary mb-2">
                     Download other video
                  </button>
               </div>
            </div>
            <hr className="mt-5" />
         </div>
      </div>
   );
}
