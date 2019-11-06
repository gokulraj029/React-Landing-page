import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Pricing extends Component {
    render() {
        return (
            <section className="section bg-light" id="pricing">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="section-title text-center mx-auto">
                            <div className="section-title-icon">
                                <i className="pe-7s-like2 text-custom"></i>
                            </div>
                            <h5>Our pricing plan</h5>
                            <p className="mt-3">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4 mt-3">
                        <div className="pricing-box text-center p-4">
                            <div className="pricing-title mt-3 mb-4">
                                <h5 className="mb-0">Free</h5>
                            </div>
                            <div className="price-plan">
                                <h6> <sup>$</sup>9<span>/mo</span></h6>
                            </div>
                            <div className="plan-features mt-4 mb-5">
                                <p>50GB Disk Space</p>
                                <p>50 Email Accounts</p>
                                <p>High Speed Internet</p>
                                <p>10 Subdomains</p>
                                <p>50GB Monthly Bandwidth</p>                              
                            </div>
                            <div className="mb-4">
                                <a href="#" className="btn btn-custom">Join Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-3">
                        <div className="pricing-box price-box-active text-center p-4">
                            <div className="pricing-title mt-3 mb-4">
                                <h5 className="mb-0">Economy</h5>
                            </div>
                            <div className="price-plan">
                                <h6 className="text-custom"> <sup>$</sup>29<span>/mo</span></h6>
                            </div>
                            <div className="plan-features mt-4 mb-5">
                                <p>100GB Disk Space</p>
                                <p>100 Email Accounts</p>
                                <p>High Speed Internet</p>
                                <p>20 Subdomains</p>
                                <p className="mb-0">100GB Monthly Bandwidth</p>
                            </div>
                            <div className="mb-4">
                                <a href="#" className="btn btn-custom">Join Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-3">
                        <div className="pricing-box text-center p-4">
                            <div className="pricing-title mt-3 mb-4">
                                <h5 className="mb-0">Deluxe</h5>
                            </div>
                            <div className="price-plan">
                                <h6> <sup>$</sup>59<span>/mo</span></h6>
                            </div>
                            <div className="plan-features mt-4 mb-5">
                                <p>1500GB Disk Space</p>
                                <p>150 Email Accounts</p>
                                <p>High Speed Internet</p>
                                <p>50 Subdomains</p>
                                <p className="mb-0">150GB Monthly Bandwidth</p>
                            </div>
                            <div className="mb-4">
                                <a href="#" className="btn btn-custom">Join Now</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        );
    }
}

if (document.getElementById('pricing')) {
    ReactDOM.render(<Pricing />, document.getElementById('pricing'));
}