import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Avaleht() {
  const [posts, setPosts] = useState([]);


  useEffect(()=> { //kohe lehele tulles tehakse API päring
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json()) // päringu staatus ja metaandmed
      .then(json => setPosts(json)) // json kujul veebilehe sisu
  }, []);


  return (
    <div>
      <div>See on avaleht, nähtav localhot:3000 aadressil</div>
      <img className="avapilt" src="https://images.squarespace-cdn.com/content/v1/61ecb4ac378df06b48cce9ac/1681928918754-7Y3K4YSGF8P0BH10KAOE/Cat+News+Logo.jpg" alt=""></img>
      {posts.map((post, index) =>
      <div key={index}> 
        <div><i>User ID: {post.userId}</i></div> 
        <div><u>Post ID: {post.id}</u></div> 
        <div><b>Title: {post.title}</b></div> 
        <div>Body: {post.body}</div> 
        <Link to={"/kasutaja-postitus/" + post.userId}>
          <button>Kasutaja postitused</button>
        </Link>
        <Link to={"/vaata-postitust/" + post.id}>
          <button>Vaata postitust</button>
        </Link>
        <br /><br />
      </div>
        
      )}
    </div>
  )
}

export default Avaleht