import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Works from "../components/Works";
import About from "../components/About";
import Footer from "../components/Footer";

function Landing() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Works />
            <About />
            <Footer />
        </>
    );
}

export default Landing;