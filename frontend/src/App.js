import Header from "./components/Header";
import Footer from "./components/Footer";
import Artists from "./components/Stats/Artists";
function App() {
  //conditionally render login screen or home screen


  return (
    <div className="bg-black">
      <Header />

      <Artists/>
      <Footer />
    </div>
  );
}

export default App;
