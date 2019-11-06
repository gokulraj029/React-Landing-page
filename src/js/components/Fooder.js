import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Fooder extends Component {
    render() {
        return (
            <section className="section bg-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-content">
                            <ul className="list-unstyled text-center footerlink">
                                <li className="list-inline-item"><a href="#">Home</a></li>
                                <li className="list-inline-item"><a href="#">Services</a></li>
                                <li className="list-inline-item"><a href="#">Features</a></li>
                                <li className="list-inline-item"><a href="#">Clients</a></li>
                                <li className="list-inline-item"><a href="#">Team</a></li>
                                <li className="list-inline-item"><a href="#">Blog</a></li>
                                <li className="list-inline-item"><a href="#">Contact Us</a></li>
                            </ul>
                            <div className="footer-alt text-center mt-5 mb-5">
                                <p className="mb-0">2018 © Brizzle. All Rights Reserved</p>
                            </div>
                            <div className="footer-icon mt-4">                                       
                                <ul className="list-unstyled social-icon text-center">
                                    <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="mdi mdi-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="mdi mdi-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="mdi mdi-dribbble"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="mdi mdi-google"></i></a></li>
                                </ul>                      
                            </div>                              
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        );
    }
}

if (document.getElementById('fooder')) {
    ReactDOM.render(<Fooder />, document.getElementById('fooder'));
}