import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Get extends Component {
    render() {
        return (
            <section className="section bg-cta">
                <div className="container">
                    <div className="bg-dark-overlay"></div>
                    <div className="row">
                        <div className="col-lg-9 text-white critarea-desc mt-3 mb-3">
                            <h5>Are you ready to enjoy? get this perfect theme now!</h5>
                        </div>
                        <div className="col-lg-3 mt-4 mb-3 text-right">
                            <a href="#" className="btn btn-outline-custom">Get Started</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Get

// if (document.getElementById('get')) {
//     ReactDOM.render(<Get />, document.getElementById('get'));
// }