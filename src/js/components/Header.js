import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DataNav from '../data/nav.json'
import Slider from '../components/Slider'
import Features from '../components/Features'
import Team from '../components/Team'
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom'
class Header extends Component{

   render(){
      return(
        <BrowserRouter>
        <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky">
            <div className="container">
                <a className="navbar-brand" href="#">Virus</a>
                <a className="navbar-brand" href="bootatrap_component.html">Bootstrap Component</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="mdi mdi-menu"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        
                        {DataNav.map((Post, index) => {
                            return( 
                                <li className="nav-item " key={index}>
                                    {/* <a className="nav-link" href="#{Post.menuName}">{Post.menuName}</a> */}
                                    <NavLink exact activeclass="active" to={Post.path}>{Post.menuName}</NavLink>
                                </li>
                            )
                        })}
                        
                    </ul>
                </div>
            </div>
        </nav>
        {/* <Slider></Slider> */}

        {/* Path set component */}
        
        <Switch>
            <Route exact path="/" component={Slider} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/team" component={Team} />
        </Switch>

        </div>
        </BrowserRouter>
      );
   }
}
export default Header;
// ReactDOM.render(<Header />, document.getElementById('header'));