import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials"; 
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;