import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OurFooterMenu from '../data/footerHeader.json';
import OurSocialIconData from '../data/social.json';

export default class Fooder extends Component {
    render() {
        return (
            <section className="section bg-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-content">
                            <ul className="list-unstyled text-center footerlink">
                                {OurFooterMenu.map((footerMenu, index) => {
                                    console.log(footerMenu);
                                    return(
                                        <li className="list-inline-item" key={index}><a href="#">{footerMenu.menuName}</a></li>
                                    )
                                })}
                            </ul>
                            <div className="footer-alt text-center mt-5 mb-5">
                                <p className="mb-0">2018 © Brizzle. All Rights Reserved</p>
                            </div>
                            <div className="footer-icon mt-4">                                       
                                <ul className="list-unstyled social-icon text-center">
                                    {OurSocialIconData.map((socialIcon, index) => {
                                        return(
                                            <li className="list-inline-item" key={index}>
                                                <a href="#"><i className={`${socialIcon.Social_icon}`}></i></a>
                                            </li>
                                        )
                                    })}
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