import './App.css';
import SideBar from './Components/Sidebar/sidebar';
import Home from './Components/home/home';
import About from './Components/about/about';
import Contact from './Components/contact/contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './Components/portfolio/portfolio';

function App() {
  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
