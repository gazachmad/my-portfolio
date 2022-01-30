import { useEffect, useState } from "react";
import { Api } from "../../../api/Api";

export const Resume = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(Api.getResume());
    }, [])

    return (
        <section className="section" id="resume">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <div className="titles">
                                <h4 className="title title-line text-uppercase mb-4 pb-4">Work Participation</h4>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="main-icon rounded-pill text-center mt-4 pt-2">
                            <i data-feather="star" className="fea icon-md-sm"></i>
                        </div>
                        <div className="timeline-page pt-2 position-relative">
                            {data.map((value, key) => {
                                if (key % 2) {
                                    return (<div key={key} className="timeline-item mt-4">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 order-md-1 order-2">
                                                <div className="event event-description-left rounded p-4 mr-0 mx-md-3 border float-left text-right">
                                                    <h5 className="title mb-0 text-capitalize">{value.posisi}</h5>
                                                    <small className="company">{value.perusahaan}</small>
                                                    <p className="timeline-subtitle mt-3 mb-0 text-muted">{value.deskripsi}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 order-md-2 order-1">
                                                <div className="duration duration-right rounded border p-2 pl-4 pr-4 position-relative shadow text-left">{value.waktu_bekerja}</div>
                                            </div>
                                        </div>
                                    </div>);
                                }
                                return (<div key={key} className="timeline-item mt-4">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="duration date-label-left border rounded p-2 pl-4 pr-4 position-relative shadow text-left">{value.waktu_bekerja}</div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="event event-description-right rounded p-4 mx-md-3 border float-left text-left">
                                                <h5 className="title mb-0 text-capitalize">{value.posisi}</h5>
                                                <small className="company">{value.perusahaan}</small>
                                                <p className="timeline-subtitle mt-3 mb-0 text-muted">{value.deskripsi}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>);
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
