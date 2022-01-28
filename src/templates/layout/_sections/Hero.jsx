import { useEffect, useRef } from "react";
import * as Feather from "react-feather"
import { Link } from "react-scroll";
import Typed from 'typed.js';

export const Hero = () => {
    const el = useRef();
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'I Am <span class="text-primary">Mobile</span> Developer',
                'I Am <span class="text-primary">Web</span> Developer',
                'I Am <span class="text-primary">Fullstack</span> Developer'
            ],
            typeSpeed: 60,
            backSpeed: 30,
            loop: true,
        });

        return () => { typed.destroy(); }
    }, []);

    return (
        <section className="bg-home bg-light clip-home" id="home">
            <div className="container">
                <div className="row mt-5 align-items-center">
                    <div className="col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0 order-2 order-md-1">
                        <div className="title-heading text-center text-md-left">
                            <h1 className="heading mb-3"><span ref={el} /></h1>
                            <p className="text-muted h6 font-weight-normal">Obviously I'm a Web Designer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects.</p>
                            <div className="mt-4 pt-2">
                                <Link href="#0" to="contact" smooth={true}className="btn btn-primary rounded mb-2 mr-2">Hire me</Link>
                                <a href="#0" className="btn btn-outline-primary rounded mb-2">Download CV <Feather.Download className="fea icon-sm" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-5 order-1 order-md-2">
                        <div className="hero-img">
                            <img src={"./assets/images/home/hero.jpg"} className="avatar avatar-lg rounded-circle mx-auto d-block shadow-lg img-thumbnail" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Link href="#0" to="about" smooth={true} data-scroll-nav="1" className="mouse-icon rounded-pill bg-transparent mouse-down">
                <span className="wheel position-relative d-block mover"></span>
            </Link>
        </section>
    );
}
