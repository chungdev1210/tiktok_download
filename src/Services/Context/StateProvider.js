import { resolveTo } from '@remix-run/router';
import React, { createContext, useContext, useEffect, useState} from 'react'
import config from '../Config/Config.json'
import axios from 'axios';
import { toast } from 'react-toastify';


export const StateContext = createContext();
const { SERVER_API } = config;

export default function StateProvider({ children }) {
   const [data, setData] = useState({});

   const [error, setError] = useState(false)

   const getData = (link) => {
      handleLoading()
      const linkData = SERVER_API + link
      axios.get(linkData)
      .then(response => {
         if(response.data.status === 'success') {
            setData({
               data: response.data,
               isLoading: true
            })
         } else {
            toast.error('Liên kết chưa đúng !!!')
            const nData = {...data}
            nData.isLoading = true;
            setData(nData)
         }
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
