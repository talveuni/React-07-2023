import React, { useEffect, useState } from "react";
import articleData from '../data/article.json'

function Article() {
  const [article, setArticle] = useState({
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

  const renderParagraphs = (htmlString) => {
    const paragraphs = htmlString.split("\n").map((paragraph, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ));
    return paragraphs;
  };

  return (
    <div className="page">
      <h1>{article.title}</h1>
      <div className="intro">
        {" "}
        <p>{renderParagraphs(article.intro)}</p>
      </div>
      <div className="twn_img">
        <img
          src={article.image.large}
          alt={article.image.alt}
          title={article.image.title}
        ></img>
        <div className="image_title">{article.image.title}</div>
      </div>
      {renderParagraphs(article.body)}
      <div className="tag">{article.tags}</div>
    </div>
  );
}

export default Article;
