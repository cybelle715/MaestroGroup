import './App.css';
import Navbar from './Components/Navbar';
import Hero from './components/Hero';
import FAQ from './components/FAQ';
import LearningPath from './components/LearningPath';
import Testimonials from './components/Testimonial';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {


  return (
    <>
        <Navbar />
        <Hero />
        <LearningPath />
        {/* <Testimonials /> */}
        <Pricing />
        <FAQ />
         <Footer />

    </>
  );
}

export default App;