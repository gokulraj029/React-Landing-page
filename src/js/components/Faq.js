import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OurFaqData from '../data/faq.json'

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
                    <div className="col-lg-12">
                        <div className="faq-content row">
                            {OurFaqData.map((ourFaq, index) => {
                                return(
                                    <div className="faq-inner col-lg-6" key={index}>
                                        <h4>{ourFaq.heading}</h4>
                                        <p className="text-muted">{ourFaq.paragraph}</p>
                                        <div className="underline"></div>
                                    </div>
                                )
                            })}
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