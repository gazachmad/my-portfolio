import { useState } from "react";
import * as Feather from "react-feather"
import { Link } from "react-scroll";

export const Header = () => {
    const [active, setActive] = useState();
    const handleSetActive = (value) => setActive(value);

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky">
            <div className="container">
                {/* <Link className="navbar-brand" href="#0" to="home" smooth={true}>
                    <img src={"./assets/images/logo.png"} height="16" alt="" />
                </Link> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <Feather.Menu className="fea icon-md" />
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav navbar-nav-link mr-auto">
                        <li className={`nav-item${active === 'home' ? ' active' : ''}`}>
                            <Link className="nav-link" href="#0" to="home" spy={true} smooth={true} onSetActive={() => handleSetActive('home')}>Home</Link>
                        </li>
                        <li className={`nav-item${active === 'services' ? ' active' : ''}`}>
                            <Link className="nav-link" href="#0" to="services" spy={true} smooth={true} onSetActive={() => handleSetActive('services')}>Services</Link>
                        </li>
                        <li className={`nav-item${active === 'resume' ? ' active' : ''}`}>
                            <Link className="nav-link" href="#0" to="resume" spy={true} smooth={true} onSetActive={() => handleSetActive('resume')}>Resume</Link>
                        </li>
                        <li className={`nav-item${active === 'projects' ? ' active' : ''}`}>
                            <Link className="nav-link" href="#0" to="projects" spy={true} smooth={true} onSetActive={() => handleSetActive('projects')}>Projects</Link>
                        </li>
                        <li className={`nav-item${active === 'news' ? ' active' : ''}`}>
                            <Link className="nav-link" href="#0" to="news" spy={true} smooth={true} onSetActive={() => handleSetActive('news')}>Blog</Link>
                        </li>
                        <li className={`nav-item${active === 'contact' ? ' active' : ''}`}>
                            <Link className="nav-link" href="#0" to="contact" spy={true} smooth={true} onSetActive={() => handleSetActive('contact')}>Contact</Link>
                        </li>
                    </ul>
                    <ul className="list-unstyled mb-0 mt-2 mt-sm-0 social-icon">
                        <li className="list-inline-item mr-1"><a href="https://www.facebook.com/gazhaliachmad/" target="_blank"><i className="mdi mdi-facebook"></i></a></li>
                        <li className="list-inline-item mr-1"><a href="https://www.instagram.com/gazachmad/" target="_blank"><i className="mdi mdi-instagram"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.linkedin.com/in/gazachmad/" target="_blank"><i className="mdi mdi-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
