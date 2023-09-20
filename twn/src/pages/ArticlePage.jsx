import React, { useEffect, useState } from 'react';
import articleData from '../data/article.json';
import Article from '../components/Article';
import { useParams } from 'react-router-dom';

function ArticlePage() {
  const { articleID } = useParams(); 

  const [article, setArticle] = useState({
    id: "",
    tags: [],
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
    const defaultArticleID = "972d2b8a";

    if (articleID) {
      fetch("https://midaiganes.irw.ee/api/list/" + articleID)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json(); 
        })
        .then((json) => setArticle(json))
        .catch((error) => {
          console.error("Error fetching data from the API:", error);
        });
    } else {
      fetch("https://midaiganes.irw.ee/api/list/" + defaultArticleID)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json(); 
        })
        .then((json) => setArticle(json))
        .catch((error) => {
          console.error("Error fetching data from the API:", error);
          console.log("Fetching data from local file: article.json");
          setArticle(articleData); 
        });
    }
  }, [articleID]);

  return (
    <div>
      <div className='page'>
        <Article article={article} />
      </div>
    </div>
  );
}

export default ArticlePage;
