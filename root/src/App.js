import React from "react";
import PredictionChart from "./components/PredictionChart";
import VisitorFlow from "./components/VisitorFlow";
import ResourceAllocation from "./components/ResourceAllocation";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <h1>AI Tourist Footfall Prediction System</h1>
      <div className="outcomes">
        <h2>Targeted Outcomes</h2>
        <ul>
          <li><strong>Accurate Footfall Predictions:</strong> Forecast visitor density effectively.</li>
          <li><strong>Crowd Management:</strong> Enhance visitor experiences by avoiding congestion.</li>
          <li><strong>Resource Allocation:</strong> Ensure better services at peak times.</li>
          <li><strong>Data-Driven Decisions:</strong> Use insights to manage tourist flow.</li>
          <li><strong>Improved Planning:</strong> Support stakeholders with actionable forecasts.</li>
        </ul>
      </div>
      <PredictionChart />
      <VisitorFlow />
      <ResourceAllocation />
    </div>
  );
}

export default App;
