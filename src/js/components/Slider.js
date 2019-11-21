import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SliderServiceData from '../data/slider.json'
class Slider extends Component{
   render(){
      return(
        <section className="home-slider" id="home">
            <div className="container-fluid">
                <div className="row">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            {SliderServiceData.map((sliderData, index) => {
                                console.log(sliderData.image);
                                return(
                                    <div className={index === 0 ? 'carousel-item active' : 'carousel-item'} key={index} style={{backgroundImage: `url(${sliderData.image})` }}>
                                        <div className="bg-overlay"></div>
                                        <div className="home-center">
                                            <div className="home-desc-center">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="text-center text-white">
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
                                )
                            })}

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
export default Slider;
// ReactDOM.render(<Slider />, document.getElementById('slider'));