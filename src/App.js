import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Portfolio />

      <SocialLinks />
    </div>
  );
}

export default App;
