import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DataNav from '../data/nav.json'
class Header extends Component{

   render(){
      return(

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
                                    <a className="nav-link" href="#{Post.menuName}">{Post.menuName}</a>
                                </li>
                            )
                        })}
                        
                    </ul>

                </div>
            </div>
        </nav>
      );
   }
}
export default header;
ReactDOM.render(<Header />, document.getElementById('header'));