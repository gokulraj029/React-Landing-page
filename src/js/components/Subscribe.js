import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Subscribe extends Component {
    render() {
        return (
            <section className="section bg-subscriber">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mx-auto">
                            <h5 className="text-white">Subscribe Today</h5>
                            <p className="mt-3 text-muted">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-12">
                        <div className="text-center search-form">
                            <form action="#">
                                <input type="text" placeholder="Enter Email Address" />
                                <button type="submit" className="btn btn-custom">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

if (document.getElementById('subscribe')) {
    ReactDOM.render(<Subscribe />, document.getElementById('subscribe'));
}