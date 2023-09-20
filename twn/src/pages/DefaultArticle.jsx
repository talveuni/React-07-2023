import React, { useEffect, useState } from 'react'
import articleData from '../data/article.json'
import Article from '../components/Article'

function DefaultArticle() {

    const [article, setArticle] = useState({
        id: "",
        tags: "",
        title: "",
        intro: "",
        image: {
          large: "",
          alt: "",
          title: "",
        },
        body: "",
      });

      useEffect(() => {
        fetch("https://midaiganes.irw.ee/api/list/972d2b8a")
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            return res.json(); 
          })
          .then((json) => setArticle(json) || []) // data from the API if possible
          .catch((error) => {
            console.error("Error fetching data from the API:", error);
            console.log("Fetching data from local file: article.json");
            setArticle(articleData); // using local data article.json
          });
      }, []);
       
      console.log(article)

  return (
    <div>
        <div className='page'>
            <Article article = {article}/>
        </div>
    </div>
  )
}

export default DefaultArticle