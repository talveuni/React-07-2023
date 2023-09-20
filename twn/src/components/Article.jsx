import React from "react";

function Article({article}) {

  const renderParagraphs = (htmlString) => {
    const paragraphs = htmlString
      .split("\n")
      .map((paragraph, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ));
    return paragraphs;
  };

  return (
    <div>
      <h1>{article.title}</h1>
      <div className="intro">
          {renderParagraphs(article.intro)}
      </div>
      <div className="twn_img">
        <div className="image_title">{article.image.title}</div>
        <div className="article_img">
          <img
            src={article.image.large}
            alt={article.image.alt}
            title={article.image.title}
          />
        </div>
      </div>
      {renderParagraphs(article.body)}
      <div className="tags">
        {article.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Article;
