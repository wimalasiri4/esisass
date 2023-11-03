import Home from "./layouts/home/Home";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
