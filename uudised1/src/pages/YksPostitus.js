import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function YksPostitus() {
    
    const [onePost, setOnePost] = useState({});
    const {postId} = useParams();

    useEffect(()=> { 
        fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
          .then(response => response.json()) 
          .then(json => setOnePost(json)) 
      }, [postId]);

  return (
    <div>
        <div><i>User ID: {onePost.userId}</i></div> 
        <div><u>Post ID: {onePost.id}</u></div> 
        <div><b>Title: {onePost.title}</b></div> 
        <div>Body: {onePost.body}</div> 
    </div>
  )
}

export default YksPostitus