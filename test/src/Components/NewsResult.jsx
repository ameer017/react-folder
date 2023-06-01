import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import './NewsResult.scss'
import {TbError404} from 'react-icons/tb'
const apiKey = '88dd43066e6a4f57990be34886ddf850'

const NewsResult = () => {
    let {newsTopic} = useParams()

    const [results, setResult] = useState({})
    const [err, setErrors] = useState({})

    useEffect (() => {
      fetch(`https://newsapi.org/v2/everything?q=${newsTopic}&sortBy=popularity&apiKey=${apiKey}`)
      .then(res => res.json())
      .then(data => setResult(data))
      .catch((err) => setErrors((err)))
    }, [newsTopic]);

    // let output = <></>
    // if(results.status === "ok") {
    //   output = results.articles.map((article, i) => {
    //     return (
    //       <div className="box">
    //           <div className="card" key={i}>
    //           <div className="head">
    //             <h2>{article.title}</h2>
    //             <a href={article.url} target="_blank" rel="noreferrer">
    //             <img src={article.urlToImage} alt="title" />
    //             </a>
    //           </div>
    //           <p>{article.content}</p>
    //           <a href={article.url} target="_blank" rel="noreferrer">read full story...</a>
    //           <p>Source: {article.source.name}, {article.publishedAt}</p>
    //       </div>
    //       </div>
          
    //     )
    //   })
    // }

  return (
    <div>
        {/* <h1 className="test">{newsTopic}</h1>
        {results.status === "ok" && 
        results.articles.map((article, i) => (
          
            <div className="box">
                  <div className="card" key={i}>
                  <div className="head">
                    <h2>{article.title}</h2>
                    <a href={article.url} target="_blank" rel="noreferrer">
                    <img src={article.urlToImage} alt="title" />
                    </a>
                  </div>
                  <p>{article.content}</p>
                  <a href={article.url} target="_blank" rel="noreferrer">read full story...</a>
                  <p>Source: {article.source.name}, {article.publishedAt}</p>
              </div>
            </div>
          
          )   
        )} */}

        <h1 className="test">{newsTopic}</h1>

        {results.status === "ok" ? (
              results.articles.map((article, i) => (
              <div className="box">
                  <div className="card" key={i}>
                    <div className="head">
                      <h2>{article.title}</h2>
                      <a href={article.url} target="_blank" rel="noreferrer">
                        <img src={article.urlToImage} alt="title" />
                      </a>
                    </div>
                    <p>{article.content}</p>
                    <a href={article.url} target="_blank" rel="noreferrer">read full story...</a>
                    <p>Source: {article.source.name}, {article.publishedAt}</p>
                  </div>
              </div>
            ))

        ) : (
        
          <div className="error">{err.message} <TbError404 /></div>
          )}

    </div>
  )
}

export default NewsResult