import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Slider extends Component{
   render(){
      return(
        <section className="home-slider" id="home">
            <div className="container-fluid">
                <div className="row">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" style={{ backgroundImage: 'url(https://iso.500px.com/wp-content/uploads/2016/04/stock-photo-150595123.jpg)' }} >
                                <div className="bg-overlay"></div>
                                <div className="home-center">
                                    <div className="home-desc-center">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="text-center text-white">
                                                        <h4 className="home-small-title">This theme is fully customize</h4>
                                                        <h1 className="home-title mx-auto mt-4">A digital web studio creating stunning & engaging online experiences</h1>
                                                        <p className="home-subtitle mx-auto pt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                                        <div className="pt-5">
                                                            <a href="#" className="btn btn-outline-custom btn-round">Contact Us</a>
                                                            <a href="#" className="btn btn-custom btn-round m-3">Get Started</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item"  style={{ backgroundImage: 'url(https://techcastle.com/wp-content/uploads/2019/06/how-to-prevent-computer-viruses.jpeg)' }} >
                                <div className="bg-overlay"></div>
                                <div className="home-center">
                                    <div className="home-desc-center">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="text-center text-white">
                                                        <h4 className="home-small-title">This theme is fully customize</h4>
                                                        <h1 className="home-title mx-auto mt-4">We love make things amazing and simple</h1>
                                                        <p className="home-subtitle mx-auto pt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                                        <div className="pt-5">
                                                            <a href="#" className="btn btn-outline-custom btn-round">Contact Us</a>
                                                            <a href="#" className="btn btn-custom btn-round m-3">Get Started</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item"  style={{ backgroundImage: 'url(https://images.idgesg.net/images/article/2019/07/cso_security_threat_virus_malicious_binary_code_bluebay2014_gettyimages-983223752_2400x1600-100801546-large.jpg)' }} >
                                <div className="bg-overlay"></div>
                                <div className="home-center">
                                    <div className="home-desc-center">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="text-center text-white">
                                                        <h4 className="home-small-title">This theme is fully customize</h4>
                                                        <h1 className="home-title mx-auto mt-4">Clean & Professional Multipurpose Landing Page</h1>
                                                        <p className="home-subtitle mx-auto pt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                                        <div className="pt-5">
                                                            <a href="#" className="btn btn-outline-custom btn-round">Contact Us</a>
                                                            <a href="#" className="btn btn-custom btn-round m-3">Get Started</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
      );
   }
}
export default slider;
ReactDOM.render(<Slider />, document.getElementById('slider'));