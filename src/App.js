import mmcdom from "./mmcdom";
import storage from './storage';

import "./App.css";

import Title from './components/Title';

export default function App() {
  let greeting = "Hello World";

  function setStorage() {
    storage.setStorageValue('greeting', 'Ola');
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
      <Title text={'Hello World'} />

      <button text={greeting} onclick={handleClick}>Pegar conteudo do storage</button> 
      { /* Ver no console */ }
    </div>
  );
}
