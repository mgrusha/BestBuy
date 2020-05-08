import React from "react";
import styled from "styled-components";
import articles from "./Articles";
import { List, H3 } from "../GlobalElements";

const ArticleHeader = styled(H3)`
  margin: 5rem 0 5rem 0;
`;

const ArticleTextHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const ArticleLine = styled.hr`
  display: block;
  height: 1px;
  border: 0;

  margin: 1em 0;
  padding: 0;
  width: 80%;
`;

const ArticleImageHolder = styled.div`
  position: relative;
  padding: 4rem 0 2rem 5rem;
  &:after {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    width: 180px;
    height: 180px;
    border-radius: 41px;
    background-color: #fb3b64;
    transform: rotate(45deg);
  }
`;

const ArticleImage = styled.img`
  z-index: 5;
`;

const Article = styled.article`
  background-color: #ffffff;
  margin: 2rem;
  display: flex;
  width: 70%;
  height: 25rem;
  padding: 0 2rem;
`;

const ArticlesPart = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
  padding: 3rem;

  ${Article}:nth-child(1) ${ArticleTextHolder} ${ArticleLine} {
    border-top: 1px solid var(--article-color-1);
  }

  ${Article}:nth-child(2) ${ArticleTextHolder} ${ArticleLine} {
    border-top: 1px solid var(--article-color-2);
  }

  ${Article}:nth-child(3) ${ArticleTextHolder} ${ArticleLine} {
    border-top: 1px solid var(--article-color-3);
  }
`;

const createArticles = (array) => {
  return array.articles.map((article) => (
    <Article key={article.header}>
      <ArticleTextHolder>
        <ArticleHeader>{article.header}</ArticleHeader>
        <p>{article.text}</p>
        <ArticleLine />
      </ArticleTextHolder>
      <ArticleImageHolder>
        <ArticleImage src={article.imgLink}></ArticleImage>
      </ArticleImageHolder>
    </Article>
  ));
};

const ArticlesBar = () => {
  return (
    <ArticlesPart className="container">
      {createArticles(articles)}
    </ArticlesPart>
  );
};

export default ArticlesBar;
