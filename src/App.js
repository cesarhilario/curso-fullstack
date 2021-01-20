import mmcdom from "./mmcdom";
import storage from './storage';

import "./App.css";

export default function App() {
  console.log('ENTROU')

  let greeting = "Hello World";

  function setStorage() {
    storage.setStorageValue('greeting', 'Ola')
  }

  function fetchStorage() {
    let greetingFetched = storage.getStorageValue('greeting')
    console.log(greetingFetched);
  }

  function handleClick() {
    fetchStorage();
  }

  setStorage();
  
  return (
    <div>
      <h1>{greeting}</h1>

      <button onclick={handleClick}>Pegar conteudo do storage</button> { /* Ver no console */ }
    </div>
  );
}
