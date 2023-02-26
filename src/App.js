import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Projects from "./Pages/Projects"
import Skills from "./Pages/Skills"
import Github from './Pages/Github';
function App() {
  return (
    <div className="App">
         <Navbar/>
         <Home/>
         <About/>
         <Skills/>
         <Projects/>
         <Github/>
         <Contact/> 
    </div>
  );
}

export default App;

