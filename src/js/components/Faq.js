import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Faq extends Component {
    render() {
        return (
            <section className="section" id="faq">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mx-auto">
                            <div className="section-title-icon">
                                <i className="pe-7s-help1 text-custom"></i>
                            </div>
                            <h5>Simple Faq</h5>
                            <p className="mt-3 text-muted mb-5">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-6">
                        <div className="faq-content">
                            <div className="faq-inner">
                                <h4>Is the Fake Name Generator illegal ?</h4>
                                <p className="text-muted">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions. </p>
                            </div>

                            <div className="underline"></div>

                            <div className="faq-inner">
                                <h4>How can i get a money ?</h4>
                                <p className="text-muted">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                            </div>

                            <div className="underline"></div>

                            <div className="faq-inner">
                                <h4>Is safe use Lorem Ipsum ?</h4>
                                <p className="text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="faq-content">
                            <div className="faq-inner">
                                <h4> How do I get my user name and my password ?</h4>
                                <p className="text-muted">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words. </p>
                            </div>

                            <div className="underline"></div>

                            <div className="faq-inner">
                                <h4>How can i get a job ?</h4>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, fugiat iste nisi tempore nesciunt nemo fuga? Nesciunt, delectus laboriosam nisi repudiandae nam fuga saepe animi recusandae. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                            </div>

                            <div className="underline"></div>

                            <div className="faq-inner">
                                <h4>How many variations exist ?</h4>
                                <p className="text-muted">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

if (document.getElementById('faq')) {
    ReactDOM.render(<Faq />, document.getElementById('faq'));
}