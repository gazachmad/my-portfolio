import Isotope from "isotope-layout";
import { Component } from "react";
import { Api } from "../../../api/Api";

export class Projects extends Component {
    state = {
        data: { filter: [], items: [] },
        isotope: null,
        filter: null
    }

    UNSAFE_componentWillMount() {
        this.setState({
            data: Api.getProjects()
        });
    }

    componentDidMount() {
        this.setState({
            isotope: new Isotope('.portfolioContainer', { itemSelector: '.portfolioItem', layoutMode: 'fitRows' })
        });

        setTimeout(() => {
            this.setFilter('*');
        }, 1000);
    }

    componentDidUpdate() {
        this.state.filter === '*'
            ? this.state.isotope.arrange({ filter: `*` })
            : this.state.isotope.arrange({ filter: this.state.filter });
    }

    setFilter(filter) {
        this.setState({
            filter: filter
        });
    }

    preventDefault(event) {
        event.preventDefault();
    }

    render() {
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
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row mt-4 pt-2">
                        <div className="col-lg-12">
                            <ul className="portfolioFilter text-center mb-0 list-unstyled">
                                {this.state.data.filter.map((value, key) => {
                                    return (
                                        <li key={key} className="list-inline-item mb-3" onClick={() => this.setFilter(value.class)}>
                                            <a href="#0" onClick={this.preventDefault} className={`${this.state.filter === value.class ? 'active ' : ''}text-dark mr-2 py-2 px-3 rounded`}>{value.title}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className="portfolioContainer row">
                        {this.state.data.items.map((value, key) => {
                            return (
                                <div key={key} className={`col-lg-4 col-md-6 mt-4 pt-2 portfolioItem ${value.class}`}>
                                    <div className="portfolio-box rounded shadow position-relative overflow-hidden">
                                        <div className="portfolio-box-img position-relative overflow-hidden">
                                            <img src={value.image} className="img-fluid" alt={key} />
                                        </div>
                                        <div className="gallary-title p-3 text-center">
                                            <h6 className="mb-0">
                                                <a href="#0" onClick={this.preventDefault} className="title text-dark">{value.title}</a>
                                            </h6>
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
}