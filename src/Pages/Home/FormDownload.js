import React, { useContext } from "react";
import { StateContext } from "../../Services/Context/StateProvider";
import { ToastContainer, toast } from "react-toastify";

export default function FormDownload(props) {
   const { getData, resetData } = useContext(StateContext);

   const handleSubmit = (e) => {
      e.preventDefault();
      if (props.link === "") {
         toast.error("Please fill link !!!");
      } else {
         getData(props.link);
      }
   };

   const handleChangeValue = (e) => {
      const link = e.target.value;
      if (link !== "") {
         props.setLink(link);
      } else {
         props.setLink("");
      }
   };

   const handleClear = () => {
      props.setLink("");
   };

   const handleDownload = (e) => {
      e.preventDefault();
      resetData();
      props.setLink("");
   };

   return (
      <div className="hero-form">
         <form onSubmit={handleSubmit}>
            <div className="hero-input">
               <div className="hero-input-left">
                  <div className="input-icon">
                     <i className="fa-sharp fa-solid fa-link icon-link"></i>
                     <input
                        name="url"
                        id="url"
                        value={props.link}
                        type="text"
                        className="form-control form-input"
                        placeholder="Dán liên kết TikTok vào đây"
                        onChange={handleChangeValue}
                     />
                     {props.link !== "" ? (
                        <div onClick={handleClear} className="clear">
                           <i className="fa-solid fa-xmark"></i>
                           <span>Clear</span>
                        </div>
                     ) : null}
                  </div>
               </div>
               <div className="hero-input-right">
                  <button type="submit" className="btn btn-go flex-center">
                     Download
                  </button>
               </div>
            </div>
         </form>
         <ToastContainer />
      </div>
   );
}
