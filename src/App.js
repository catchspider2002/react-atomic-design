import React from "react";
import "./bootstrap-custom.css";
import "./App.css";
import Card from "./Molecules/MoleculeCard";
import Progress from "./Molecules/MoleculeProgress";
import Pricing from "./Molecules/MoleculePricing";

const App = () => (
    <div className="App">
        <header className="App-header" />
        <span className="title">React App</span>
        <Progress label="WordPress" value="90" />
        <Progress label="CSS" value="40" />
        <p />
        <Pricing title="" val1="" val2="" val3="" val4="" val5="" val6=""/>
        <Card title="New title" subtitle="Sub" />
    </div>
);

export default App;
