import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Searchbar from "../components/Searchbar/Searchbar";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Searchbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
