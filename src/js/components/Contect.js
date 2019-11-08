import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Contect extends Component {
    render() {
        return (
        <section className="section" id="contact">
            <div className="container">
                 <div className="col-lg-12">
                    <div className="section-title text-center mx-auto">
                        <div className="section-title-icon">
                            <i className="pe-7s-headphones text-custom"></i>
                        </div>
                        <h5>Contact Us</h5>
                        <p className="mt-3 text-muted">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.</p>
                    </div>
                </div>

                <div className="row vertical-content mt-5">
                    <div className="col-lg-4">                      
                        <div className="contact-info mb-5">   
                            <i className="pe-7s-phone mr-3 "></i>                        
                            <p className=""> <span className="contact-heading"> Customer care Number </span>:<br /> <span className="mt-2">+1 234 56 7894</span></p>         
                        </div>   

                        <div className="contact-info mb-5">
                            <i className="pe-7s-map-marker mr-3"></i>
                            <p className=""> <span className="contact-heading"> Office Address </span>:<br /> <span className="mt-2">4461 Cedar Street Moro, AR 72368</span></p>                            
                        </div>

                        <div className="contact-info mb-5">
                            <i className=" pe-7s-mail-open mr-3"></i>
                            <p className=""> <span className="contact-heading"> Email Address </span> :<br /> <span className="mt-2">Support@gmail.com</span></p>                           
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="custom-form mt-4">
                            <div id="message"></div>
                            <form method="post" action="php/contact.php" name="contact-form" id="contact-form">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">                                            
                                            <input name="name" id="name" type="text" className="form-control" placeholder="Your name..." />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Your email..." />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input name="text" id="sub" type="text" className="form-control" placeholder="Your subject..." />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your message..."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom" value="Send Message" />
                                        <div id="simple-msg"></div>
                                    </div>
                                </div>
                            </form>
                        </div>  
                    </div>                  
                </div>
            </div>
        </section>
        );
    }
}

if (document.getElementById('contect')) {
    ReactDOM.render(<Contect />, document.getElementById('contect'));
}