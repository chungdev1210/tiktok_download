import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.scss";
import FormDownload from "./FormDownload";
import Decription from "./Decription";
import Download from "./Download";
import { StateContext } from "../../Services/Context/StateProvider";

export default function Home() {
   const { dataTiktok } = useContext(StateContext);
   const { data } = dataTiktok;
   const [link, setLink] = useState("");
   const props = {
      link,
      setLink,
   };
   return (
      <>
         <div className="hero">
            <div className="container">
               <div className="hero-title">
                  <h1 className="hero-h1">Công Cụ Tải Video TikTok</h1>
                  <h2 className="hero-h2">Không logo, hình mờ, watermark</h2>
               </div>
               <FormDownload {...props} />
               {dataTiktok?.isLoading == false ? (
                  <div className="d-flex justify-content-center">
                     <div className="loading">
                        <span>Vui lòng chờ ...</span>
                        <div className="wobbling-4"></div>
                     </div>
                  </div>
               ) : null}
            </div>
         </div>
         {data?.status == "success" ? <Download {...props} /> : null}
         <Decription />
      </>
   );
}
