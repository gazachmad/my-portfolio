import { Link } from "react-scroll";

export const Footer = () => {
    return (
        <>
            <footer className="footer bg-dark">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <a href="#0"><img src={"./assets/images/logo-light.png"} height="20" alt=""/></a>
                            <p className="para-desc mx-auto mt-5">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                            <ul className="list-unstyled mb-0 mt-4 social-icon">
                                <li className="list-inline-item mr-1"><a href="#0"><i className="mdi mdi-facebook"></i></a></li>
                                <li className="list-inline-item mr-1"><a href="#0"><i className="mdi mdi-instagram"></i></a></li>
                                <li className="list-inline-item mr-1"><a href="#0"><i className="mdi mdi-google-plus"></i></a></li>
                                <li className="list-inline-item mr-1"><a href="#0"><i className="mdi mdi-linkedin"></i></a></li>
                                <li className="list-inline-item"><a href="#0"><i className="mdi mdi-github-circle"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer footer-bar bg-dark">
                <div className="container text-foot text-center">
                    <p className="mb-0">© 2019-20 Cristino. Design with <i className="mdi mdi-heart text-danger"></i> by <a href="http://www.shreethemes.in" className="text-success">Shreethemes</a>.</p>
                </div>
            </footer>
            <Link href="#0" className="back-to-top rounded text-center" id="back-to-top" to="home" smooth={true}>
                <i className="mdi mdi-chevron-up d-block"> </i>
            </Link>
        </>
    );
}
