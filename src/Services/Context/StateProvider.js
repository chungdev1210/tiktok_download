import { resolveTo } from '@remix-run/router';
import React, { createContext, useContext, useEffect, useState} from 'react'
import config from '../Config/Config.json'
import axios from 'axios';
import { toast } from 'react-toastify';

var CryptoJS = require("crypto-js");

export const StateContext = createContext();
const { SERVER_API, FILE_NAME_PREFIX } = config;

export default function StateProvider({ children }) {
   const [data, setData] = useState({});

   const [error, setError] = useState(false)

   const encrypt_hash = (hash) => {
      var iv = CryptoJS.enc.Hex.parse('87853baabc060bff3f95f576b723b453');
      var key = CryptoJS.enc.Hex.parse("238fbb71a300f2e7f0c9cd2a9f21607f");

      var encrypted = CryptoJS.AES.encrypt(hash.toString(), key, {
         iv,
         padding: CryptoJS.pad.ZeroPadding,
      });

      return encrypted.toString();
   }

   const getData = (link) => {
      handleLoading()
      const linkData = SERVER_API
      axios.post(linkData, {
         query: link,
         token: encrypt_hash(parseInt(Date.now()/1000))
      }, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      })
      .then(response => {
         console.log(response)
         // if(response.data.status === 'success') {
         //    response.data.prefix_file_name = FILE_NAME_PREFIX;
         //    setData({
         //       data: response.data,
         //       isLoading: true
         //    })
         // } else {
         //    toast.error('Liên kết chưa đúng !!!')
         //    const nData = {...data}
         //    nData.isLoading = true;
         //    setData(nData)
         // }
      })
   }

   const handleLoading = () => {
      const nData = {...data}
      nData.isLoading = false;
      setData(nData)
   }

   const resetData = () => {
      setData([])
   }

   return (
      <StateContext.Provider
         value={{
            dataTiktok: data,
            getData,
            resetData,
         }}
      >
         {children}
      </StateContext.Provider>
   )
}
