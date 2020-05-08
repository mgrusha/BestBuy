import React from "react";
import "./App.css";
import "./reset.css";
import Header from "./js/header/Header";
import Navigation from "./js/navigation/Navigation";
import ArticlesBar from "./js/navigation/ArticlesBar";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <ArticlesBar />
    </>
  );
}

export default App;
