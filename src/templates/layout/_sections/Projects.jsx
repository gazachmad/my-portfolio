import Isotope from "isotope-layout";
import { useEffect, useState } from "react";
import * as Feather from "react-feather";

const projects = [{
    image: "./assets/images/portfolio/1.jpg",
    title: "The Usefulness",
    kategori: "Photography"
},
{
    image: "./assets/images/portfolio/2.jpg",
    title: "The Nonsensical content",
    kategori: "Illustrations"
}, {
    image: "./assets/images/portfolio/4.jpg",
    title: "Prevents Patterns",
    kategori: "Corrporate"
}, {
    image: "./assets/images/portfolio/6.jpg",
    title: "The Advantageous",
    kategori: "Graphics"
}, {
    image: "./assets/images/portfolio/3.jpg",
    title: "Automatic Recognition",
    kategori: "Web Design"
}, {
    image: "./assets/images/portfolio/5.jpg",
    title: " Ius Dissentiunt ",
    kategori: "Devlopment"
}];

export const Projects = () => {
    const [isotope, setIsotope] = useState();
    const [filter, setFilter] = useState();

    const preventDefault = (event) => {
        event.preventDefault();
    }

    useEffect(() => {
        setIsotope(new Isotope('.portfolioContainer', { itemSelector: '.portfolioItem', layoutMode: 'fitRows' }));
        setTimeout(() => {
            setFilter("*");
        }, 350);
    }, []);

    useEffect(() => {
        if (isotope) {
            filter === '*' ? isotope.arrange({ filter: '*' }) : isotope.arrange({ filter: filter })
        }
    }, [isotope, filter]);

    return (
        <section className="section bg-light" id="projects">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <div className="titles">
                                <h4 className="title title-line text-uppercase mb-4 pb-4">My Portfolio</h4>
                                <span></span>
                            </div>
                            <p className="text-muted mx-auto para-desc mb-0">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mt-4 pt-2">
                    <div className="col-lg-12">
                        <ul className="portfolioFilter text-center mb-0 list-unstyled">
                            <li className="list-inline-item mb-3" onClick={() => setFilter('*')}>
                                <a href="#0" onClick={preventDefault} className={`${filter === '*' ? 'active ' : ''}text-dark mr-2 py-2 px-3 rounded`}>All</a>
                            </li>
                            <li className="list-inline-item mb-3" onClick={() => setFilter('.natural')}>
                                <a href="#0" onClick={preventDefault} className={`${filter === '.natural' ? 'active ' : ''}text-dark mr-2 py-2 px-3 rounded`}>Natural</a>
                            </li>
                            <li className="list-inline-item mb-3" onClick={() => setFilter('.creative')}>
                                <a href="#0" onClick={preventDefault} className={`${filter === '.creative' ? 'active ' : ''}text-dark mr-2 py-2 px-3 rounded`}>Creative</a>
                            </li>
                            <li className="list-inline-item mb-3" onClick={() => setFilter('.personal')}>
                                <a href="#0" onClick={preventDefault} className={`${filter === '.personal' ? 'active ' : ''}text-dark mr-2 py-2 px-3 rounded`}>Personal</a>
                            </li>
                            <li className="list-inline-item mb-3" onClick={() => setFilter('.photography')}>
                                <a href="#0" onClick={preventDefault} className={`${filter === '.photography' ? 'active ' : ''}text-dark mr-2 py-2 px-3 rounded`}>Photography</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="portfolioContainer row">
                    {projects.map((value, key) => {
                        return (
                            <div key={key} className="col-lg-4 col-md-6 mt-4 pt-2 portfolioItem natural personal">
                                <div className="portfolio-box rounded shadow position-relative overflow-hidden">
                                    <div className="portfolio-box-img position-relative overflow-hidden">
                                        <img src={value.image} className="img-fluid" alt={key} />
                                        <div className="overlay-work">
                                            <div className="work-content text-center">
                                                <a href={value.image} className="text-light work-icon bg-dark d-inline-block rounded-pill mfp-image"><Feather.Camera className="fea icon-sm image-icon" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gallary-title py-4 text-center">
                                        <h5><a href="page-portfolio-detail.html" className="title text-dark">{value.title}</a></h5>
                                        <span>{value.kategori}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="row">
                    <div className="col-lg-12 mt-4 pt-2">
                        <div className="text-center">
                            <a href="page-portfolio.html" className="btn btn-outline-primary">More works <i data-feather="refresh-cw" className="fea icon-sm"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
