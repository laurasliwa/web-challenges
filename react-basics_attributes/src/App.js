import React from "react";
import "./styles.css";

export default function App() {
  return <ArticleComponents />;
}

function ArticleComponents() {
  return (
    <article className="article">
      <h2 className="article__title">I am a header</h2>
      <label htmlFor="input"></label> <input id="input" />
      <a className="article__link" href="https://en.wikipedia.org/wiki/K-pop">
        Did you say k-pop?
      </a>
    </article>
  );
}
