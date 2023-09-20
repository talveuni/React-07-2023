import React, { useEffect, useState } from 'react';
import articleData from '../data/article.json';
import Article from '../components/Article';
import { useParams } from 'react-router-dom';

function ArticlePage() {
  const { articleID } = useParams(); // Get the articleID from the route parameter

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
    // If no articleID is provided, set a default articleID
    const defaultArticleID = "972d2b8a";

    if (articleID) {
      // Fetch the specific article using the provided articleID
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
          // Handle the error, e.g., display a message or redirect
        });
    } else {
      // If no articleID is provided, fetch and display the default article
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
          // Handle the error, e.g., display a message or redirect
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
