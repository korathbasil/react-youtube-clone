import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__main">
        <div className="app__sidebar">
          <Sidebar />
        </div>
        <div className="app__videoFeed"></div>
      </div>
    </div>
  );
}

export default App;
