import "./App.css";
import AboutContainer from "./components/AboutComponents/AboutContainer";
import Footer from "./components/Footer/Footer";
import Header from "./components/HeaderComponents/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutContainer />
      <Footer />
    </div>
  );
}

export default App;
