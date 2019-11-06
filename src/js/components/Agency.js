import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Agency extends Component {
    render() {
        return (
        <section className="section bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mx-auto">
                            <div className="section-title-icon">
                                <i className="pe-7s-magic-wand text-custom"></i>
                            </div>
                            <h5>We are digital creative agency</h5>
                            <p className="mt-3 text-muted">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.</p>
                        </div>
                    </div>
                </div>

                <div className="row pt-5 mt-2 vertical-content">
                    <div className="col-lg-6">
                        <div className="Features-img">
                            <div className="video-play-bar">
                                <a href="#" className="video-play-icon"><i className="play-video-btn mdi mdi-play play-position"></i> </a>
                                <img src="images/more-features.jpg" alt="" className="img-fluid mx-auto d-block" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 offset-lg-1 ">
                        <div className="more-features-content p-4">
                            <div className="more-features-icon float-left">
                                <i className="pe-7s-paint-bucket mr-4 mt-3 text-custom"></i>
                            </div>
                            <div className="more-features-desc">
                                <h5 className="">Creativity</h5>
                                <p className="text-muted mb-0">Europan lingues es membres del sam familie. Lor separat existentie Por scientie, musica, sport etc, litot Europa usa li sam vocabular.</p>
                            </div>
                        </div>
                        <div className="more-features-content p-4">
                            <div className="more-features-icon float-left">
                                <i className="pe-7s-world mr-4 mt-3 text-custom"></i>
                            </div>
                            <div className="more-features-desc">
                                <h5 className="">Easy to customize</h5>
                                <p className="text-muted mb-0">Europan lingues es membres del sam familie. Lor separat existentie Por scientie, musica, sport etc, litot Europa usa li sam vocabular.</p>
                            </div>
                        </div>
                        <div className="more-features-content p-4">
                            <div className="more-features-icon float-left">
                                <i className="pe-7s-monitor mr-4 mt-3 text-custom"></i>
                            </div>
                            <div className="more-features-desc">
                                <h5 className="">Responsive Design</h5>
                                <p className="text-muted mb-0">Europan lingues es membres del sam familie. Lor separat existentie Por scientie, musica, sport etc, litot Europa usa li sam vocabular.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
        </section>
        );
    }
}

if (document.getElementById('agency')) {
    ReactDOM.render(<Agency />, document.getElementById('agency'));
}