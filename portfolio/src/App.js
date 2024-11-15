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
          <li className='nav-items'><Link to='/'>Home</Link></li>
          <li className='nav-items'><Link to='/about'>About</Link></li>
          <li className='nav-items'><Link to='/resume'>Resume</Link></li>
          <li className='nav-items'><Link to='/projects'>Projects</Link></li>
          <li className='nav-items'><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
