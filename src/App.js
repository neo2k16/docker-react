import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1
          style={{
            color: "red",
          }}
        >
          CURSO DE UDEMY SOBRE DOCKER Y KUBERNETES !!
        </h1>
        <h2
          style={{
            color: "yellow",
            backgroundColorj: "red",
          }}
        >
          I was change on the Feature branch
        </h2>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
