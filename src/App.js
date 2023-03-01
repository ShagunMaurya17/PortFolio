import Navbar from "./Components/Navbar/Navbar";
import "./index.css";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
function App() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="App"
    style = {{
      background: darkMode? 'black': '',
      color: darkMode? 'white': ''
    }}
    
    >
      <Navbar/>
      <Intro/>
      <Education/>
      <Experience/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
