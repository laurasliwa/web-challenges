import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: "pommes", name: "🍎 apple", color: "red" },
    { id: "botanical berries", name: "🍌 banana", color: "yellow" },
    { id: "pepos", name: "🍉 watermelon", color: "green" },
    { id: "drupes", name: "🥥 coconut", color: "brown" },
    { id: "hesperidiums", name: "🍊 mandarin", color: "orange" },
  ];

  return (
    <ul className="app">
      {fruits.map((fruit) => (
        <li key={fruit.id}>
          <Card name={fruit.name} color={fruit.color} />
        </li>
      ))}
    </ul>
  );
}
