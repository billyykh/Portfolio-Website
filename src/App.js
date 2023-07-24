import './App.css';
import Header from './components/header/Header'
import Home from './components/home/Home';
import About from './components/about/About'
import Skills from './components/skill/Skills';
import Services from './components/service/Services';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup'

function App() {
  return (
    <div>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
        
      </main>
      <Footer />
      <Scrollup />
    </div>
  );
}

export default App;
