import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "../Component/NewsCard";
import news from "../images/im8.jpg";
import newsImage from "../images/logo.png";
import "../Css/NewsCard.css";
import Newsdata from "./../Data/Newsdata";


function News() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const articlesPerPage = 9;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = process.env.REACT_APP_NEWSAPI_API_KEY ;

        const response = await fetch(
          `https://newsapi.org/v2/everything?q=weather&apiKey=${apiKey}`
        );
        const data = await response.json();

        if (data.status === "ok") {
          setArticles(data.articles);
        } else {
          throw new Error(data.message);
        }
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);
  const handleClickNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleClickPrev = () => {
    setCurrentPage(currentPage - 1);
  };
  


  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const displayedArticles = articles.slice(startIndex, endIndex);
  return (
    <>
      <div className="banner" style={{ backgroundImage: `url(${news})` }}>
        <h1 className="title">News</h1>
      </div>
      <div className="container ">
        <div className="row mt-4 align-items-center justify-content-center d-flex">
          {(displayedArticles.length === 0 ? Newsdata : displayedArticles).map(
            (element, index) => {
              return (
                <div
                  className="col-xl lg-3 md-4 sm-4 xs-8 m-3 mycard"
                  key={element.url ? element.url : ""}
                >
                  <Card
                    imgsrc={element.urlToImage ? element.urlToImage : newsImage}
                    title={element.title ? element.title : ""}
                    link={element.url ? element.url : ""}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="container d-flex justify-content-between pagination-buttons mb-4">
        <Button
          variant="primary"
          onClick={handleClickPrev}
          disabled={currentPage === 1}
        >
          &larr;
        </Button>
        <Button
          variant="primary"
          onClick={handleClickNext}
          disabled={currentPage === totalPages}
        >
          &rarr;
        </Button>
      </div>
    </>
  );
}
export default News;
