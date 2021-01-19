import mmcdom from "./mmcdom";

const HelloWorld = () => {
  const value = "Erick";

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

mmcdom.render(<App />, <HelloWorld />, document.getElementById("app"));
