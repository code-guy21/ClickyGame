import React from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="container-fluid h-100 d-flex flex-column p-0">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
