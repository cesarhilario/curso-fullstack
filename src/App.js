import mmcdom from "./mmcdom";

import "./App.css";

export default function App() {
  let Hello = "Hello World";

  function handleClick() {
    console.log('clicado');
  }

  const handleMouseLeave = (e) => {
    console.log(e);
    console.log('mouse leave')
  }

  return (
    <div onclick={handleClick} mouseLeave={(e) => handleMouseLeave(e)}>
      <h1>{Hello}</h1>
    </div>
  );
}
