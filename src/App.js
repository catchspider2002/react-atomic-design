import React from "react";
import "./App.css";
import Card from "./Molecules/MoleculeCard";
import "./bootstrap-custom.css"

const App = () => (
    <div className="App">
        <header className="App-header">
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
      <Card title="New title" subtitle="Sub" />
        </header>
    </div>
);

export default App;
