import { Link } from "react-scroll";

export const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <>
            <footer className="footer footer-bar bg-dark">
                <div className="container text-foot text-center">
                    <p className="mb-0">© 2016-{year} Achmad Gazhali. Template by <a href="#0" onClick={(event) => event.preventDefault()} className="text-success">Shreethemes</a>.</p>
                </div>
            </footer>
            <Link href="#0" className="back-to-top rounded text-center" id="back-to-top" to="home" smooth={true}>
                <i className="mdi mdi-chevron-up d-block"> </i>
            </Link>
        </>
    );
}
