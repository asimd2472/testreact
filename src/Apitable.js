import React, { useState, useEffect } from "react";
import axios from "axios";
import { PaginationControl } from 'react-bootstrap-pagination-control';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Apitable() {

  const [posts, setPosts] = useState([]);
//   const history = useHistory();

  useEffect(() => {
    getPosts();
  }, []);

    // get posts
  const getPosts = async () => {
    axios.get(baseURL)
      .then((response) => {
        if (response.status === 200) {
          setPosts(response.data);

          toast.success('🦄 OKK!', {
            position: "bottom-right",
            autoClose: 15000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });

          
        }
      })
      .catch((error) => {
          console.log(error);
      });
  }

  return (
    <div>

        {/* <ul>
            {posts.map((info, keys) =>(
                 <li key={keys}>{info?.title}</li>   
            ))
            }
        </ul> */}

    <table className="table table-striped my-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {posts &&
            posts.map((post, keys) => (
              <tr key={keys}>
                <td> {keys+1} </td>
                <td> {post.title} </td>
                <td> {post.body} </td>
                <td>
                  
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <PaginationControl
        page={posts}
        between={4}
        total={100}
        limit={20}
        changePage={(posts) => {
            setPosts(posts); 
            console.log(posts);
        }}
        ellipsis={1}
      />
    </div>
  )
}
