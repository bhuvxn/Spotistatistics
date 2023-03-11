import logo from "./logo.svg";
import "./App.css";

import LoginScreen from "./components/LoginScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {useState, useEffect} from 'react';
function App() {


  return (
    <div className="bg-black">
      <Header />
      <LoginScreen />
      <Footer />
    </div>
  );
}

export default App;
