import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import slider from '../data/slider.json'
class Slider extends Component{
   render(){
      return(
        <section className="home-slider" id="home">
            <div className="container-fluid">
                <div className="row">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    {slider.map((sliderData, index) =>{
                                                        return(                           
                        <div className="carousel-inner"  key={index}>
                         
                            <div className="carousel-item active" style={{ backgroundImage: 'url(https://iso.500px.com/wp-content/uploads/2016/04/stock-photo-150595123.jpg)' }} >
                                <div className="bg-overlay"></div>
                                <div className="home-center">
                                    <div className="home-desc-center">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="text-center text-white" >
                                                        <h4 className="home-small-title">{sliderData.title}</h4>
                                                        <h1 className="home-title mx-auto mt-4">{sliderData.subtitle}</h1>
                                                        <p className="home-subtitle mx-auto pt-4">{sliderData.paragraph}</p>
                                                        <div className="pt-5">
                                                            <a href="#" className="btn btn-outline-custom btn-round">{sliderData.contact}</a>
                                                            <a href="#" className="btn btn-custom btn-round m-3">{sliderData.start}</a>
                                                        </div>
                                                    </div>  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                                                        )
                                                    })}                        
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