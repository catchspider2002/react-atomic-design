import React from "react";
import "./bootstrap-custom.css";
import "./App.css";
import Card from "./Molecules/MoleculeCard";
import Progress from "./Molecules/MoleculeProgress";

const App = () => (
    <div className="App">
        <header className="App-header" />
        <Progress label="WordPress" />
        <p />
        <Card title="New title" subtitle="Sub" />
    </div>
);

export default App;
