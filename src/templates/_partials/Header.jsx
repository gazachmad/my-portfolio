import { useState } from "react";
import { Link } from "react-scroll";

export const Header = () => {
    const [active, setActive] = useState();
    const handleSetActive = (value) => setActive(value);

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky">
            <div className="container">
                <div className="navbar-collapse">
                    <ul className="navbar-nav navbar-nav-link d-flex flex-row flex-wrap justify-content-center mr-lg-auto">
                        <li className={`nav-item${active === 'home' ? ' active' : ''}`}>
                            <Link className="nav-link" href="#0" to="home" spy={true} offset={-60} smooth={true} onSetActive={() => handleSetActive('home')}>Home</Link>
                        </li>
                        <li className={`nav-item${active === 'about' ? ' active' : ''}`}>
                            <Link className="nav-link" href="#0" to="about" spy={true} offset={-60} smooth={true} onSetActive={() => handleSetActive('about')}>Me</Link>
                        </li>
                        <li className={`nav-item${active === 'resume' ? ' active' : ''}`}>
                            <Link className="nav-link" href="#0" to="resume" spy={true} offset={-60} smooth={true} onSetActive={() => handleSetActive('resume')}>Resume</Link>
                        </li>
                        <li className={`nav-item${active === 'projects' ? ' active' : ''}`}>
                            <Link className="nav-link" href="#0" to="projects" spy={true} offset={-60} smooth={true} onSetActive={() => handleSetActive('projects')}>Projects</Link>
                        </li>
                        <li className={`nav-item${active === 'activity' ? ' active' : ''}`}>
                            <Link className="nav-link" href="#0" to="activity" spy={true} offset={-60} smooth={true} onSetActive={() => handleSetActive('activity')}>Activity</Link>
                        </li>
                        <li className={`nav-item${active === 'contact' ? ' active' : ''}`}>
                            <Link className="nav-link" href="#0" to="contact" spy={true} offset={-60} smooth={true} onSetActive={() => handleSetActive('contact')}>Contact</Link>
                        </li>
                    </ul>
                    <ul className="list-unstyled social-icon d-flex flex-row flex-wrap justify-content-center">
                        <li className="list-inline-item mr-1"><a href="https://api.whatsapp.com/send?phone=6282396677464" target="_blank" rel="noreferrer"><i className="mdi mdi-whatsapp" style={{ fontSize: '20px' }}></i></a></li>
                        <li className="list-inline-item mr-1"><a href="https://github.com/gazachmad" target="_blank" rel="noreferrer"><i className="mdi mdi-github-circle" style={{ fontSize: '20px' }}></i></a></li>
                        <li className="list-inline-item mr-1"><a href="https://www.linkedin.com/in/gazachmad/" target="_blank" rel="noreferrer"><i className="mdi mdi-linkedin" style={{ fontSize: '20px' }}></i></a></li>
                        <li className="list-inline-item mr-1"><a href="https://www.facebook.com/gazhaliachmad/" target="_blank" rel="noreferrer"><i className="mdi mdi-facebook" style={{ fontSize: '20px' }}></i></a></li>
                        <li className="list-inline-item mr-1"><a href="https://www.instagram.com/gazachmad/" target="_blank" rel="noreferrer"><i className="mdi mdi-instagram" style={{ fontSize: '20px' }}></i></a></li>
                        <li className="list-inline-item"><a href="mailto:gazachmad@gmail.com" target="_blank" rel="noreferrer"><i className="mdi mdi-gmail" style={{ fontSize: '20px' }}></i></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
