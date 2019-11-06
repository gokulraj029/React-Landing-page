import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class OurClient extends Component {
    render() {
        return (
            <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mx-auto">
                            <div className="section-title-icon">
                                <i className="pe-7s-micro text-custom"></i>
                            </div>
                            <h5> Our Clients</h5>
                            <p className="mt-3 text-muted">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-6">
                        <div className="testimonial-box text-center pt-4 pb-4 pr-3 pl-3">
                            <p className="pt-3 text-muted">" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex Ut ullamco laboris nisi ea commodo consequat.Ut ullamco laboris nisi ut aliquip ex ea commodo consequat. " </p>
                            <div className="testimonial-client-img text-center mb-3">
                                <img src="images/testi/testi-1.jpg" className="img-fluid  rounded-circle img-thumbnail" />
                            </div>
                            <h6 className="mb-0">Keri Nicholas</h6>
                            <small>Designer</small>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="testimonial-box text-center pt-4 pb-4 pr-3 pl-3">
                            <p className="pt-3 text-muted">" Auctor facilisi platea cum accumsan semper facilisis tristique. Ornare magnis tristique mauris, magna rutrum dignissim facilisis consequat congue fringilla nec hendrerit. " </p>
                            <div className="testimonial-client-img mb-3">
                                <img src="images/testi/testi-2.jpg" className="img-fluid  rounded-circle img-thumbnail" />
                            </div>
                            <h6 className="mb-0">Charle nathan</h6>
                            <small>Designer</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

if (document.getElementById('ourclient')) {
    ReactDOM.render(<OurClient />, document.getElementById('ourclient'));
}