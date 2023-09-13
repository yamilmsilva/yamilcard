import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Article } from "./components/Article";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="card">
      <Header />
      <div className="container">
        <Article />
      </div>
      <Footer />
    </div>
  );
}

export default App;
