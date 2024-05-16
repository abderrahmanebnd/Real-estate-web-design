import About from "./sections/About";
import Header from "./sections/Header";
import Home from "./sections/Home";
import Properties from "./sections/Properties";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Home />
      <Properties />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
