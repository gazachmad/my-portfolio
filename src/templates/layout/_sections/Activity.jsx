import { useEffect, useState } from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Api } from "../../../api/Api";

export const Activity = () => {
    const [options, setOptions] = useState({ codingActivity: {}, languages: {} });

    const getData = async () => {
        const results = await Api.getActivity();
        setOptions({
            codingActivity: {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Coding Activity over Last 7 Days'
                },
                subtitle: {
                    text: 'Source: wakatime.com'
                },
                xAxis: {
                    categories: results.codingActivity.categories,
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: null
                    },
                    labels: {
                        formatter: function () {
                            let prefix = 'hrs';
                            if (this.value < 2) {
                                prefix = 'hr';
                            }
                            return `${this.value} ${prefix}`;
                        }
                    }
                },
                tooltip: {
                    formatter: function () {
                        return `<div>
                            <p style="font-size:11px">${this.key}</p><br/>
                            <p style="color:${this.color}">${this.series.name}: </p>
                            <p><strong>${results.codingActivity.labels[this.point.index]}</strong></p>
                        </div>`;
                    }
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0,
                    }
                },
                series: results.codingActivity.series
            },
            languages: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'Languages'
                },
                subtitle: {
                    text: 'Source: wakatime.com'
                },
                tooltip: {
                    formatter: function () {
                        return `<div>
                            <p style="color:${this.color}">${this.key}:</p>
                            <p><strong>${this.y} %</strong></p>
                        </div>`;
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<strong>{point.name}</strong>: {point.y} %'
                        },
                    }
                },
                series: [{
                    name: 'Languages',
                    colorByPoint: true,
                    data: results.languages
                }]
            }
        });
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <section className="cta-full border-top">
            <div className="container">
                <div className="row position-relative">
                    <div className="col-12">
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
                                <div className="col-md-10 col-lg-8 col-xl-6 p-0 mx-auto">
                                    <HighchartsReact highcharts={Highcharts} options={options.codingActivity} />
                                </div>
                                <div className="col-md-10 col-lg-8 col-xl-6 p-0 mx-auto">
                                    <HighchartsReact highcharts={Highcharts} options={options.languages} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}