import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import Works from "../components/landing/Works";
import About from "../components/landing/About";
import Footer from "../components/landing/Footer";
import Section from "../components/landing/Section"

function Landing() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Works />
            <About />
            <Section />
            <Footer />

        </>
    );
}

export default Landing;