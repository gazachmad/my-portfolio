import { Link } from "react-scroll"

export const About = () => {
    return (
        <section className="section pb-3" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title mb-0">
                            <h4 className="title text-primary mb-3">Cristino Murphy</h4>
                            <h6 className="designation mb-3">I'm a Passionate <span className="text-primary">Web Designer</span></h6>
                            <p className="text-muted">Obviously I'm a Web Designer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using 'Content here, content here', making it look like readable English.</p>
                            <p className="text-muted">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            <img src={"./assets/images/sign.png"} height="22" alt="" />
                            <div className="mt-4">
                                <Link href="#0" to="projects" smooth={true} className="btn btn-primary mouse-down">View Portfolio</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}