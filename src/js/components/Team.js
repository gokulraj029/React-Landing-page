import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OurTeamDtat from '../data/team.json'

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
                    {OurTeamDtat.map((ourTeam, index)=>{
                        return(
                            <div className="col-lg-3 mt-3" key={index}>
                                <div className="team-box p-4">
                                    <div className="team-img">
                                        <img src={`${ourTeam.profile}`} alt="" className=" mx-auto d-block rounded-circle " height="130" />
                                    </div>
                                    <div className="team-desc text-center mt-4">
                                        <h6 className="team-name text-custom mb-1">{ourTeam.name}</h6>
                                        <p className="team-work text-muted">{ourTeam.desination}</p>
                                    </div>
                                    <ul className="list-inline team-social mt-4 mb-0 text-center">
                                        <li className="list-inline-item"><a href="#"><i className={`${ourTeam.facebook}`}></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className={`${ourTeam.google}`}></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className={`${ourTeam.twitter}`}></i></a></li>
                                    </ul>
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

if (document.getElementById('team')) {
    ReactDOM.render(<Team />, document.getElementById('team'));
}