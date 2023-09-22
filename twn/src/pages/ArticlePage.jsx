import React, { useEffect, useState } from "react";
import articleData from "../data/article.json";
import Article from "../components/Article";
import { useParams } from "react-router-dom";
import listData from "../data/table.json"

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
    if (articleID) { //article from the table
      fetch("https://midaiganes.irw.ee/api/list?limit=500") //from API
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json(); 
      })
      .then((data) => {
        const list = [...data.list];
        const articleFromAPI = list.find(item => item.id === articleID);
        setArticle(articleFromAPI);
       })

      .catch((error) => {
        console.error("Error fetching data from the API:", error);
        console.log("Fetching data from local file: table.json");
        const articeleFromFile = listData.find(item => item.id === articleID);
        setArticle(articeleFromFile);  
      });
      

    } else { // default article
      fetch("https://midaiganes.irw.ee/api/list/972d2b8a") // from API
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
          setArticle(articleData); //from file
        });
    }
  }, [articleID]);

 return (
    <div>
      <div className="page">
        <div className="article">
          <Article article={article} />
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
