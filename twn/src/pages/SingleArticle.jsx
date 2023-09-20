import React from 'react'
import Article from '../components/Article';

function SingleArticle({setArticle}) {

  return (
    <div className='page'>
      <Article
        setArticle = {setArticle}
      />
        
    </div>
  )
}

export default SingleArticle