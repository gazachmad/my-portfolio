import { Preloader } from "../components/Preloader";
import { Header } from "../_partials/Header";
import { Hero } from "./_sections/Hero";
import { About } from "./_sections/About";
import { Services } from "./_sections/Services";
import { Resume } from "./_sections/Resume";
import { Activity } from "./_sections/Activity";
import { Projects } from "./_sections/Projects";
import { Contact } from "./_sections/Contact";
import { Footer } from "../_partials/Footer";

export const LandingPage = () => {
    return (
        <>
            <Preloader />
            <Header />
            <Hero />
            <About />
            <Services />
            <Resume />
            <Activity />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}
