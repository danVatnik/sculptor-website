import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import Commissions from './components/Commissions';
import Cinema from './components/Cinema';
import About from './components/About';
// import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Works />
        <Commissions />
        <Cinema />
        <About />
        {/* <Process /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
