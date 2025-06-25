import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Banner from "./components/Banner/Banner.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from './components/Projects/Projects.jsx';
import CallToAction from './components/CallToAction/CallToAction.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div>
  
      <div>
        <NavBar/>
        <Banner/>
        <Skills/>
        <Projects/>
        <CallToAction/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;