import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import Testimonials from "./pages/Testimonials";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
function App() {
  const [currentRoute, setCurrentRoute] = useState("/");

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
  };

  const renderPage = () => {
    switch (currentRoute) {
      case "/":
        return <HomePage />;
      case "/services":
        return <Services />;
      case "/testimonials":
        return <Testimonials />;
      case "/portfolio":
        return <Portfolio />;
      case "/contact":
        return <Contact />;
      case "/about":
        return <About />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar activeRoute={currentRoute} onNavigate={handleNavigate} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
