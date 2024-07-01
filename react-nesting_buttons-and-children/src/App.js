import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>I am a button!</Button>
      <Button>Well, i am a button, too.</Button>
      <Button>What a coincidence! I am also a button.</Button>
      <Button>Guess what? I am a headline ;b</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
