import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Infinitescroll() {

const [items, setItems] = useState([]);
const [title, setTitle] = useState("");



    
    useEffect(() => {
        fetchData();
        setTitle("This is a cool title");
    }, []);


const fetchData = () => {
    var page = 1;
   
      axios.get(`http://localhost:8000/api/get_data?per_page=200&page=${page}`)
      .then((response) => {
        const data = response.data.data;
        setItems(data);
        
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
    <div>
      <HelmetProvider>
        <Helmet>
          <title>{title ? title : "No title"}</title>
        </Helmet>
      </HelmetProvider>
        <ul>
        {items.map(item => (
            <li key={item.id}>{item.name}<Link to={"/country-update/"+item.id}>Edit</Link></li>
        ))}
        </ul>
        
    </div>
  )
}
