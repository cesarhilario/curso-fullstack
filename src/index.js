import mmcdom from "./mmcdom";

import './style.css';

const HelloWorld = () => {
  const value = "Hello World";

  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
};

const App = () => (
  <div className="container">
    <HelloWorld />
  </div>
);

mmcdom.render(<App />, document.getElementById("app"));
