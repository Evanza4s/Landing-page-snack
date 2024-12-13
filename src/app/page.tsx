import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Header";
import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import Product from "./components/Product";


export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <LogoTicker />
    <About />
    <Product />
    <Contact />
    <Footer />
    </>
  );
}
