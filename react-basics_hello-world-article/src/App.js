import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>This is a heading!</h1>
      <p>This is a text which should be visible to the reader.</p>
    </article>
  );
}
