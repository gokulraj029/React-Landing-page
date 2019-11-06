import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Blog extends Component {
    render() {
        return (
            <section className="section bg-light" id="blog">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mx-auto">
                            <div className="section-title-icon">
                                <i className="pe-7s-photo-gallery text-custom"></i>
                            </div>
                            <h5>Our Latest News</h5>
                            <p className="mt-3 text-muted">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                     <div className="col-lg-4">
                        <div className="blog-box">
                            <img src="images/blog/blog-1.jpg" alt="" className="img-fluid mx-auto d-block rounded" />
                            <div className="blog-info p-3">
                                <a href="#">
                                    <h3 className="pt-2 text-dark"> A enim ad minim veniam quis. </h3>
                                </a>
                                <div>
                                    <div className="admin-post pt-2">
                                        <span className=""><i className="mdi mdi-clock"></i> 01 Nov 2018 </span>
                                        <i className="mdi mdi-account"></i>  <a href="#" className="text-dark">Albert Lynn</a>
                                        <div className="separator-line mt-2 mb-2  "></div>
                                        <p className="pt-0  text-muted ">The most well-known dummy text is the Lorem Ipsum which is said to have originated.</p>
                                    </div>
                                    <div className="pt-3 pb-3">
                                        <a href="#" className="text-custom">Read More <i className="mdi mdi-arrow-right"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="blog-box">
                            <img src="images/blog/blog-5.jpg" alt="" className="img-fluid mx-auto d-block rounded" />
                            <div className="blog-info p-3">
                                <a href="#">
                                    <h3 className="pt-2 text-dark"> Lorem ipsum dolor sit amet...  </h3>
                                </a>
                                <div>
                                    <div className="admin-post pt-2">
                                        <span className=""><i className="mdi mdi-clock"></i> 01 Nov 2018 </span>
                                        <i className="mdi mdi-account"></i>  <a href="#" className="text-dark">Terrence Roloff</a>
                                        <div className="separator-line mt-2 mb-2  "></div>
                                        <p className="pt-0  text-muted ">The most well-known dummy text is the Lorem Ipsum which is said to have originated.</p>
                                    </div>
                                    <div className="pt-3 pb-3">
                                        <a href="#" className="text-custom">Read More <i className="mdi mdi-arrow-right"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="blog-box">
                            <img src="images/blog/blog-3.jpg" alt="" className="img-fluid mx-auto d-block rounded" />
                            <div className="blog-info p-3">
                                <a href="#">
                                    <h3 className="pt-2 text-dark"> Consectetuer adipiscing elit aenean commodo...  </h3>
                                </a>
                                <div>
                                    <div className="admin-post pt-2">
                                        <span className=""><i className="mdi mdi-clock"></i> 01 Nov 2018 </span>
                                        <i className="mdi mdi-account"></i>  <a href="#" className="text-dark">Karleen Hammond</a>
                                        <div className="separator-line mt-2 mb-2  "></div>
                                        <p className="pt-0  text-muted ">The most well-known dummy text is the Lorem Ipsum which is said to have originated.</p>
                                    </div>
                                    <div className="pt-3 pb-3">
                                        <a href="#" className="text-custom">Read More <i className="mdi mdi-arrow-right"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

if (document.getElementById('blog')) {
    ReactDOM.render(<Blog />, document.getElementById('blog'));
}