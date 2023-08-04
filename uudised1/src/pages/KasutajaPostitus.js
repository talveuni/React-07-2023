import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function KasutajaPostitus() {
  const [posts, setPosts] = useState([]);

  useEffect(()=> { //kohe lehele tulles tehakse API päring
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json()) // päringu staatus ja metaandmed
      .then(json => setPosts(json)) // json kujul veebilehe sisu
  }, []);

  const {userId} = useParams();
  
  return (
    <div>
      {posts.filter(post=> post.userId === Number(userId)).map((post, index) =>
      <div key={index}> 
        <div><i>User ID: {post.userId}</i></div> 
        <div><u>Post ID: {post.id}</u></div> 
        <div><b>Title: {post.title}</b></div> 
        <div>Body: {post.body}</div> 
        <br />
      </div>
      )}
    </div>
  )
}

export default KasutajaPostitus