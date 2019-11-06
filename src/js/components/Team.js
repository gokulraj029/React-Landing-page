import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Team extends Component {
    render() {
        return (
            <section className="section" id="team">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="section-title text-center mx-auto">
                            <div className="section-title-icon">
                                <i className="pe-7s-like2 text-custom"></i>
                            </div>
                            <h5>Our Professional Team</h5>
                            <p className="mt-3 text-muted">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-4 pt-4">
                    <div className="col-lg-3 mt-3">
                        <div className="team-box p-4">
                            <div className="team-img">
                                <img src="images/team/team-1.jpg" alt="" className=" mx-auto d-block rounded-circle " height="130" />
                            </div>
                            <div className="team-desc text-center mt-4">
                                <h6 className="team-name text-custom mb-1">Robert McClanahan</h6>
                                <p className="team-work text-muted">CEO/Founder</p>
                            </div>
                            <ul className="list-inline team-social mt-4 mb-0 text-center">
                                <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="mdi mdi-google"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="mdi mdi-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                        <div className="team-box p-4">
                            <div className="team-img">
                                <img src="images/team/team-2.jpg" alt="" className=" mx-auto d-block rounded-circle" height="130" />
                            </div>
                            <div className="team-desc text-center mt-4">
                                <h6 className="team-name text-custom mb-1">Diane Williams</h6>
                                <p className="team-work text-muted">CTO/Co-Founder</p>
                            </div>
                            <ul className="list-inline team-social mt-4 mb-0 text-center">
                                <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="mdi mdi-google"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="mdi mdi-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                        <div className="team-box p-4">
                            <div className="team-img">
                                <img src="images/team/team-3.jpg" alt="" className=" mx-auto d-block rounded-circle" height="130" />
                            </div>
                            <div className="team-desc text-center mt-4">
                                <h6 className="team-name text-custom mb-1">Andrew Tomlinson</h6>
                                <p className="team-work text-muted">Sr. Web Designer</p>
                            </div>
                            <ul className="list-inline team-social mt-4 mb-0 text-center">
                                <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="mdi mdi-google"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="mdi mdi-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                        <div className="team-box p-4">
                            <div className="team-img">
                                <img src="images/team/team-4.jpg" alt="" className=" mx-auto d-block rounded-circle" height="130" />
                            </div>
                            <div className="team-desc text-center mt-4">
                                <h6 className="team-name text-custom mb-1">James Miller</h6>
                                <p className="team-work text-muted">Sr. Web Developer</p>
                            </div>
                            <ul className="list-inline team-social mt-4 mb-0 text-center">
                                <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="mdi mdi-google"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="mdi mdi-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

if (document.getElementById('team')) {
    ReactDOM.render(<Team />, document.getElementById('team'));
}