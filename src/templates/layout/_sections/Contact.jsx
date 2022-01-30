import * as Feather from "react-feather";

export const Contact = () => {
    return (
        <section className="section" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <div className="titles">
                                <h4 className="title title-line text-uppercase mb-4 pb-4">Contact Me</h4>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-lg-4 mt-4 pt-2">
                        <div className="contact-detail text-center">
                            <div className="icon">
                                <Feather.Phone className="fea icon-md" />
                            </div>
                            <div className="content mt-4">
                                <h5 className="title text-uppercase">Phone</h5>
                                <a href="tel:+6282396677464" className="text-primary">+62 823-9667-7464</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mt-4 pt-2">
                        <div className="contact-detail text-center">
                            <div className="icon">
                                <Feather.Mail className="fea icon-md" />
                            </div>
                            <div className="content mt-4">
                                <h5 className="title text-uppercase">Email</h5>
                                <a href="mailto:gazachmad@gmail.com" className="text-primary">gazachmad@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mx-auto mt-4 pt-2">
                        <div className="contact-detail text-center">
                            <div className="icon">
                                <Feather.MapPin className="fea icon-md" />
                            </div>
                            <div className="content mt-4">
                                <h5 className="title text-uppercase">Location</h5>
                                <p className="text-muted">D1/12 Gelora Baddoka Indah, Pai, <br />Biringkanaya, Kota Makassar</p>
                                <a href="https://goo.gl/maps/BtdtdhWfjdGJeFgu6" className="video-play-icon text-primary">View on Google map</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
