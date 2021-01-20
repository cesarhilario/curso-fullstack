import mmcdom from "./mmcdom";

import "./App.css";

export default function App() {
  let Hello = "Hello World";

  function handleClick() {
    console.log('clicado');
  }

  return (
    <div onClick={handleClick}>
      <h1>{Hello}</h1>
    </div>
  );
}
