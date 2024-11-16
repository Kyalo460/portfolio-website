import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home.js'
import About from './About.js'
import Resume from './Resume.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import { useState, useEffect } from 'react';

function App() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="App">
      <nav className={`navbar ${isHidden ? 'hidden' : ''}`}>
        <ul className='nav-container'>
          <li className='nav-items'><Link to='/portfolio-website/'>Home</Link></li>
          <li className='nav-items'><Link to='/portfolio-website/about'>About</Link></li>
          <li className='nav-items'><Link to='/portfolio-website/resume'>Resume</Link></li>
          <li className='nav-items'><Link to='/portfolio-website/projects'>Projects</Link></li>
          <li className='nav-items'><Link to='/portfolio-website/contact'>Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/portfolio-website/' element={<Home />} />
        <Route path='/portfolio-website/about' element={<About />} />
        <Route path='/portfolio-website/resume' element={<Resume />} />
        <Route path='/portfolio-website/projects' element={<Projects />} />
        <Route path='/portfolio-website/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
