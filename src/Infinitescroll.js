import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseURL = "http://localhost:8000/api/get_data?page=1&per_page=2000";

export default function Infinitescroll() {

const [items, setItems] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);
const [page, setPage] = useState(1);

const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
        return;
    }
    fetchData();
}
    
    useEffect(() => {
        fetchData();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);


const fetchData = () => {
    setIsLoading(true);
    setError(null);
  
    try {
      axios.get(`http://localhost:8000/api/get_data?per_page=20&page=${page}`)
      .then((response) => {
        const data = response.data;
        setItems(prevItems => [prevItems, data]);
        setPage(prevPage => prevPage + 1);
      })
      .catch((error) => {
          console.log(error);
      });

      console.log(items);
      
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
}
  

  return (
    <div>
        <ul>
        {items.map(item => (
            <li key={item.id}>{item.name}</li>
        ))}
        </ul>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
    </div>
  )
}
