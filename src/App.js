import React from "react";
import "./App.css";
import Card from "./Molecules/MoleculeCard";
import Progress from "./Molecules/MoleculeProgress";
import "./bootstrap-custom.css";

const App = () => (
    <div className="App">
        <header className="App-header">
            <Progress />
            <Card title="New title" subtitle="Sub" />
        </header>
    </div>
);

export default App;
