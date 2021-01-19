import mmcdom from "./mmcdom";

const HelloWorld = () => {
  return <h1>Hello World</h1>;
};

const App = () => (
  <div>
    <HelloWorld />
  </div>
);

mmcdom.render(<App />, document.getElementById("app"));
