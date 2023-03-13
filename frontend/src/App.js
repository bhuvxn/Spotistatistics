import logo from "./logo.svg";
import "./App.css";
import LoginScreen from "./components/LoginScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Artists from "./components/Artists";
function App() {


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
