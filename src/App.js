import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import NewsContent from "./Components/NewsContent";
import Nav from "./Nav";
import apikey from "./data/Data";
import Footer from "./Components/Footer";
//import { Category } from "@material-ui/icons";
//=a7581cd3c5bf45208c181c50abf3b826
function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newResult, setNewsResult] = useState();
  //const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}`
      );

      setNewsArray(news.data.articles);
      setNewsResult(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(newsArray);
  useEffect(() => {
    newsApi();
  }, [newResult, category]);
  return (
    <>
      <Nav setCategory={setCategory} />
      <NewsContent newResult={newResult} newsArray={newsArray} />
      <Footer />
    </>
  );
}

export default App;
