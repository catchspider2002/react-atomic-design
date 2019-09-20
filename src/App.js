import React from "react";
import Card from "./Molecules/MoleculeCard";
import Progress from "./Molecules/MoleculeProgress";
import "./bootstrap-custom.css";
import "./App.css";

const App = () => (
    <div className="App">
        <header className="App-header">
            <Progress />
            <p />
            <Card title="New title" subtitle="Sub" />
        </header>
    </div>
);

export default App;
