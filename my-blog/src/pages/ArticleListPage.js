import React from "react";
import articles from "./article-content";
import { Link } from "react-router-dom";
import ArticleList from "../components/ArticleList";

const ArticleListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticleList articles={articles} />
    </>
  );
};

export default ArticleListPage;
