import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OurClientData from '../data/ourClient.json'

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
                    {OurClientData.map((clientData, index)=>{
                        // alert(clientData)
                        return(
                            <div className="col-lg-6" key={index}>
                                <div className="testimonial-box text-center pt-4 pb-4 pr-3 pl-3">
                                    <p className="pt-3 text-muted">{clientData.paragraph} </p>
                                    <div className="testimonial-client-img text-center mb-3">
                                        <img src={`${clientData.icon}`} className="img-fluid  rounded-circle img-thumbnail" />
                                    </div>
                                    <h6 className="mb-0">{clientData.name}</h6>
                                    <small>{clientData.desination}</small>
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

if (document.getElementById('ourclient')) {
    ReactDOM.render(<OurClient />, document.getElementById('ourclient'));
}