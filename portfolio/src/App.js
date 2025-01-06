import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Resume from "./Resume.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import { useState, useEffect } from "react";

function App() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="App">
      <nav className={`navbar ${isHidden ? "hidden" : ""}`}>
        <ul className="nav-container">
          <li className="nav-items">
            <Link
              to="/portfolio-website/"
              className={isActive("/portfolio-website/") ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li className="nav-items">
            <Link
              to="/portfolio-website/about"
              className={isActive("/portfolio-website/about") ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li className="nav-items">
            <Link
              to="/portfolio-website/resume"
              className={isActive("/portfolio-website/resume") ? "active" : ""}
            >
              Resume
            </Link>
          </li>
          <li className="nav-items">
            <Link
              to="/portfolio-website/projects"
              className={
                isActive("/portfolio-website/projects") ? "active" : ""
              }
            >
              Projects
            </Link>
          </li>
          <li className="nav-items">
            <Link
              to="/portfolio-website/contact"
              className={isActive("/portfolio-website/contact") ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/portfolio-website/" element={<Home />} />
        <Route path="/portfolio-website/about" element={<About />} />
        <Route path="/portfolio-website/resume" element={<Resume />} />
        <Route path="/portfolio-website/projects" element={<Projects />} />
        <Route path="/portfolio-website/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
