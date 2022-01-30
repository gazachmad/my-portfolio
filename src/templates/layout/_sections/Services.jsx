import React from "react";
import * as Feather from "react-feather"

export const Services = () => {
    const offering = [{
        title: `UX / UI Design`,
        caption: `It is a long established fact that a reader will be distracted by the when looking at its layout.`,
        icon: 'Airplay',
    }, {
        title: `Ios App Designer`,
        caption: `It is a long established fact that a reader will be distracted by the when looking at its layout.`,
        icon: 'Aperture',
    }, {
        title: `Photography`,
        caption: `It is a long established fact that a reader will be distracted by the when looking at its layout.`,
        icon: 'Camera',
    }, {
        title: `Graphic Designer`,
        caption: `It is a long established fact that a reader will be distracted by the when looking at its layout.`,
        icon: 'Compass',
    }, {
        title: `Web Security`,
        caption: `It is a long established fact that a reader will be distracted by the when looking at its layout.`,
        icon: 'Settings',
    }, {
        title: `24 / 7`,
        caption: `It is a long established fact that a reader will be distracted by the when looking at its layout.`,
        icon: 'Watch',
    }];

    return (
        <section className="section bg-light" id="services">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <div className="titles">
                                <h4 className="title title-line text-uppercase mb-4 pb-4">What Do I Offer ?</h4>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {offering.map((value, key) => {
                        const Icon = Feather[value.icon];
                        return (
                            <div key={key} className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                                <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pt-5 pb-5">
                                    <div className="icon text-primary">
                                        <Icon className="fea icon-md"/>
                                    </div>
                                    <div className="content mt-4">
                                        <h5 className="title">{value.title}</h5>
                                        <p className="text-muted mt-3 mb-0">{value.caption}</p>
                                    </div>
                                    <div className="big-icon">
                                        <Icon className="fea icons"/>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
