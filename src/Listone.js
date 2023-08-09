import React, { useState, useEffect } from 'react';	
import axios from 'axios';
import './ImageAPI.css'

export default function Listone() {
    
    const [data, setData] = useState([]);
	const [pageNo,setPageNo] = useState(1);
    const [isFetching, setIsFetching] = useState(false);
	
	useEffect(()=>{
		getData();
	},[]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    useEffect(() => {
        if (!isFetching) return;
        
      }, [isFetching]);

    function getData(){
		axios.get(`https://jsonplaceholder.typicode.com/albums/${pageNo}/photos`)
			.then(response => {
				if(pageNo > 1){
					let arr = [...data, ...response.data];
					
					setData(arr);
				}
				else{
					setData(response.data);
				}
				
			})
			.catch(error => {
				alert('Axios GET request failed');
			})
	}
	
	
	
	const firstEvent = (e) => {
		//console.log(e);
		var bottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 50;
		if(bottom){
			let pg = pageNo + 1;
			setPageNo(pg);
			getData();
		}
	}

    function handleScroll() {
        
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
        // setIsFetching(true);
        const pg = pageNo + 1;
        setPageNo(pg);
        console.log(pageNo);
        getData();
        

        
    }

  return (
    // <div onScroll={firstEvent} className='ImageAPI'>
    <div>
        <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>Title</th>
                    <th scope='col'>Photo</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => {
                    return(
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td><img src={item.thumbnailUrl} alt='' /></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>	
	</div>
  )
}
