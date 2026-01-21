import './App.css';
import Navbar from './Components/Navbar';
import Hero from './components/Hero';
import FAQ from './components/FAQ';
import LearningPath from './components/LearningPath';
import Testimonials from './components/Testimonial';

function App() {


  return (
    <>
        <Navbar />
        <Hero />
        <LearningPath />
        <Testimonials />

        <FAQ />

    </>
  );
}

export default App;