import { Container } from "@material-ui/core";
import React from "react";

import "./NewsContent.css";
import Newscard from "../Newscard";
const NewsContent = ({ newsArray, newResult }) => {
  return (
    <Container maxWidth="md">
      <div className="content"></div>
      {/* First this */}
      {newsArray.map((newsItem) => (
        <Newscard newsItem={newsItem} key={newsItem.title} />
      ))}
    </Container>
  );
};

export default NewsContent;
