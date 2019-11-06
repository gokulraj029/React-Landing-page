import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Services extends Component {
    render() {
        return (
            <section className="section" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mx-auto">
                            <div className="section-title-icon">
                                <i className="pe-7s-exapnd2 text-custom"></i>
                            </div>
                            <h5>Our Services</h5>
                            <p className="mt-3 text-muted">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="services-box text-center mt-2 p-3">
                            <div className="services-icon text-custom mb-3">
                                <i className="pe-7s-photo-gallery"></i>
                            </div>
                            <div className="services-desc">
                                <h4 className="">Strategy Solutions</h4>
                                <p className="text-muted  pt-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque inventore.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="services-box text-center mt-2 p-3">
                            <div className="services-icon text-custom mb-3">
                                <i className="pe-7s-helm"></i>
                            </div>
                            <div className="services-desc">
                                <h4 className="">UI/UX Design</h4>
                                <p className="text-muted  pt-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque inventore.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="services-box text-center mt-2 p-3">
                            <div className="services-icon text-custom mb-3">
                                <i className="pe-7s-plane"></i>
                            </div>
                            <div className="services-desc">
                                <h4 className="">Branding Identity</h4>
                                <p className="text-muted  pt-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque inventore.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="services-box text-center mt-2 p-3">
                            <div className="services-icon text-custom mb-3">
                                <i className="pe-7s-rocket"></i>
                            </div>
                            <div className="services-desc">
                                <h4 className="">Easy to Use</h4>
                                <p className="text-muted  pt-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque inventore.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="services-box text-center mt-2 p-3">
                            <div className="services-icon text-custom mb-3">
                                <i className="pe-7s-target"></i>
                            </div>
                            <div className="services-desc">
                                <h4 className="">Dynamic Growth</h4>
                                <p className="text-muted  pt-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque inventore.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="services-box text-center mt-2 p-3">
                            <div className="services-icon text-custom mb-3">
                                <i className="pe-7s-like2"></i>
                            </div>
                            <div className="services-desc">
                                <h4 className="">Friendly Support</h4>
                                <p className="text-muted  pt-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque inventore.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        );
    }
}

if (document.getElementById('services')) {
    ReactDOM.render(<Services />, document.getElementById('services'));
}