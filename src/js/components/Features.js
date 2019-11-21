import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PostData from '../data/home.json'
class Features extends Component{
   render(){

    let data = [
           
        {
            icon: 'mdi mdi-arrow-right text-custom mr-3',
            desc: 'There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration in some form, by injected humour,available'
        },

        {
            icon: 'mdi mdi-arrow-right text-custom mr-3',
            desc: 'There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration in some form, by injected humour,available'
        },

        {
            icon: 'mdi mdi-arrow-right text-custom mr-3',
            desc: 'There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration in some form, by injected humour,available'
        }
       ] 

    let autnhive = [
        {
            companyName : 'Security System',
            clientName : 'John Doe',
            country : 'Canada',
            delete : 'mdi mdi-delete'
        },
        {
            companyName : 'Virus Security System',
            clientName : 'Hittrer',
            country : 'US',
            delete : 'mdi mdi-delete'
        },
        {
            companyName : 'Virus Devolopment',
            clientName : 'Virus Kernal',
            country : 'Rasiya',
            delete : 'mdi mdi-delete'
        },
        {
            companyName : 'test company',
            clientName : 'Beeter',
            country : 'japan',
            delete : 'mdi mdi-delete'
        },
    ]   
       let DataList = data.map((val , i) => {
            return(
                /* Start Single Feature */
                <div className="features-desc-icon mb-2" key={i}>
                    <i className={`${val.icon}`}></i>
                    <p className="text-muted">{val.desc}</p>
                    
                </div>
                /* End Single Feature */
            )
        })


        let company = autnhive.map((val, i) => {
            return(
                <ul key={i}>
                    <li>{val.companyName}</li>
                    <li>{val.clientName}</li>
                    <li>{val.country}</li>
                    <a href="" className={`${val.delete}`}></a>
                </ul>
            )
        })


        

      return(
        <section className="section bg-light" id="features">
            <div className="container">                
                <div className="row pt-5 mt-2 vertical-content">
                    <div className="col-lg-5">
                        <div className="features-content">
                            <div className="features-title">
                                 <h5>Create Something Totally & Amazing Professional Features</h5>
                                <p className="mt-3 text-muted">This is required when, for example, the final text is not yet available. Dummy text is also known as.</p>
                            </div>

                            <div className="features-desc">
                                {DataList}
                                {company}
                                {PostData.map((Post, index) => {
                                    return <h1 key={index}>{Post.title}</h1>
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 offset-lg-1">
                        <div className="Features-img">
                            <img src="images/features-1.png" alt="" className="img-fluid mx-auto d-block" />
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
      );
   }
}
export default Features;
// ReactDOM.render(<Features />, document.getElementById('features'));