import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Countryupdate() {

const [items, setItems] = useState([]);
const [title, setTitle] = useState("");

const routeParams = useParams();
  
useEffect(() => {
    fetchData();
}, []);

const fetchData = () => {
    var id = routeParams.id;
   
      axios.get(`http://localhost:8000/api/get_dataupdate/${id}`)
      .then((response) => {
        const data = response.data;
        setItems(data);
        setTitle(data.name+" | This is a cool title");
      })
      .catch((error) => {
        toast.error('🦄'+error, {
          position: "bottom-right",
          autoClose: 15000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }); 
}



  return (
    <>
        {/* <HelmetProvider> */}
            <Helmet>
                <title>{title ? title : ""}</title>
            </Helmet>
        {/* </HelmetProvider> */}
        <div className="">{items.name}, {items.native}</div>
    </>
    
  )
}
