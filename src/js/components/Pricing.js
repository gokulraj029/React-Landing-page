import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OurPriceData from '../data/price.json'

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
                    {OurPriceData.map((ourPrice, index)=>{
                        return(
                            <div className="col-lg-4 mt-3" key={index}>
                                <div className="pricing-box price-box-active text-center p-4">
                                    <div className="pricing-title mt-3 mb-4">
                                        <h5 className="mb-0">{ourPrice.heading}</h5>
                                    </div>
                                    <div className="price-plan">
                                        <h6> <sup>{ourPrice.amount_type}</sup>{ourPrice.amount_rupee}<span>/{ourPrice.amount_month}</span></h6>
                                    </div>
                                    <div className="plan-features mt-4 mb-5">
                                        <p>{ourPrice.plan1}</p>
                                        <p>{ourPrice.plan2}</p>
                                        <p>{ourPrice.plan3}</p>
                                        <p>{ourPrice.plan4}</p>
                                        <p>{ourPrice.plan5}</p>                              
                                    </div>
                                    <div className="mb-4">
                                        <a href="#" className="btn btn-custom">{ourPrice.action}</a>
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

if (document.getElementById('pricing')) {
    ReactDOM.render(<Pricing />, document.getElementById('pricing'));
}