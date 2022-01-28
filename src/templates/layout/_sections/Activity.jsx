import { useEffect, useState } from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Api } from "../../../api/Api";

export const Activity = () => {
    const [options, setOptions] = useState({});

    const getData = async () => {
        const results = await Api.getActivity();
        setOptions({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: null
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    },
                }
            },
            series: [{
                name: 'Languages',
                colorByPoint: true,
                data: results
            }]
        });
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <section className="cta-full border-top">
            <div className="container-fluid">
                <div className="row position-relative">
                    <div className="col-lg-8 mx-auto">
                        <div className="cta-full-img-box">
                            <div className="row justify-content-center">
                                <div className="col-12 text-center">
                                    <div className="section-title">
                                        <div className="titles">
                                            <h4 className="title title-line text-uppercase mb-4 pb-4">Work Expertise</h4>
                                            <span></span>
                                        </div>
                                        <p className="text-muted mx-auto para-desc mb-0">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row align-items-center">
                                <div className="col-12">
                                    <HighchartsReact highcharts={Highcharts} options={options} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}