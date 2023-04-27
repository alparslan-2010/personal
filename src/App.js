
import './App.css';
import Footer from './layout/footer';
import Header from './layout/header';
import Contact from './pages/contact';
import Home from './pages/home';
import Project from './pages/project';
import Resume from './pages/resume';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

    return (
    
    
    <>


     <Header/>
    
        <Router>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
    </Router>

    <Footer/>
    </>
    )
}

export default App;
