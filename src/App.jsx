import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import './styles.scss'

function App() {
  return (
    <div className="App">
     <Hero/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
