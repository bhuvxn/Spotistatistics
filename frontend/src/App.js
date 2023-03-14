import logo from "./logo.svg";
import "./App.css";
import LoginScreen from "./components/LoginScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Artists from "./components/Stats/Artists";
function App() {
  //conditionally render login screen or home screen


  return (
    <div className="bg-black">
      <Header />
      <LoginScreen />
      <Artists/>
      <Footer />
    </div>
  );
}

export default App;
