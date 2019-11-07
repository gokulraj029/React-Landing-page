import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ServiceData from '../data/services.json'

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

                    {ServiceData.map((service, index) => {
                        return(
                   
                            <div className="col-lg-4" key={index}>
                                <div className="services-box text-center mt-2 p-3">
                                    <div className="services-icon text-custom mb-3">
                                        <i className={`${service.icon}`}></i>
                                    </div> 
                                    <div className="services-desc">
                                        <h4 className="">{service.heading}</h4>
                                        <p className="text-muted  pt-2">{service.paragraph}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}                     
                </div>
            </div>
        </section>

        );
    }
}

if (document.getElementById('services')) {
    ReactDOM.render(<Services />, document.getElementById('services'));
}