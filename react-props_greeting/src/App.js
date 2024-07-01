import "./styles.css";

export default function App() {
  return <Greeting name="Andrea" />;
}

function Greeting({ name }) {
  return (
    <div>
      Hello,{" "}
      {name === "Feline" || name === "Andrea" || name === "Jessica"
        ? "Coach"
        : name}
      !
    </div>
  );
}
