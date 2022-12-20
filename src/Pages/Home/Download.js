import React, { useContext, useEffect } from "react";
import { StateContext } from "../../Services/Context/StateProvider";
import { saveAs } from "file-saver";

export default function Download(props) {
   const { dataTiktok, resetData } = useContext(StateContext);
   const { data, prefix_file_name } = dataTiktok.data;
   console.log(data);
   const { link, loading } = props;
   const { setLoading } = loading;

   const handleDownloadMp4 = (e) => {
      e.preventDefault();
      setLoading(true);
      const id = data.author.id;
      const _file_type = "mp4";
      const _link_download = data.wmplay;
      const _prefix = prefix_file_name;
      saveAs(_link_download, _prefix + id + "." + _file_type);
      setTimeout(() => {
         setLoading(false);
      }, 3000);
   };

   const handleDownloadMp3 = (e) => {
      e.preventDefault();
      setLoading(true);
      const id = data.music_info.id;
      const linkMp3 = data.music;
      const prefix = prefix_file_name;
      saveAs(linkMp3, prefix + id + ".mp3");
      setTimeout(() => {
         setLoading(false);
      }, 1500);
   };

   const handleReset = () => {
      resetData();
      link.setLink("");
   };

   return (
      <div className="download__video mt-2">
         <div className="container">
            <div className="row row--down">
               <div className="col-lg-6 col-md-7 col-sm-10 down_left mt-2">
                  <div className="down__img">
                     <img src={data.cover} alt="title" />
                  </div>
                  <div className="down__info">
                     <h5 className="down__title">{data.title}</h5>
                     <p className="down__author">{data.author.nickname}</p>
                     <div className="down__params">
                        <div className="down__item">
                           <i className="fa-solid fa-eye"></i>{" "}
                           <span>{data.play_count}</span>
                        </div>
                        <div className="down__item">
                           <i className="fa-solid fa-download"></i>{" "}
                           <span>{data.download_count}</span>
                        </div>
                        <div className="down__item">
                           <i className="fa-solid fa-share"></i>{" "}
                           <span>{data.share_count}</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-7 col-sm-8 offset-lg-2 down__right">
                  <a
                     href="###"
                     className="down__server1 btn btn-primary mb-2"
                     onClick={handleDownloadMp4}
                  >
                     Download server 1
                  </a>
                  <a
                     href="#"
                     className="down__server2 btn btn-success mb-2"
                     onClick={handleDownloadMp4}
                  >
                     Download server 2
                  </a>
                  <a
                     href="#"
                     className="down__server2 btn btn-info mb-2"
                     onClick={handleDownloadMp3}
                  >
                     Download mp3
                  </a>
                  <button
                     type="button"
                     onClick={handleReset}
                     className="down__server2 btn btn-secondary mb-2"
                  >
                     Download other video
                  </button>
               </div>
            </div>
            <hr className="" />
         </div>
      </div>
   );
}
