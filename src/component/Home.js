import React from 'react';

export class Home extends React.Component{

    //Send the case study meta data to the DB
    // casestudy(){
    //     this.props.history.push('/cs');
    // }
    // View Case study records after fetching them from the DB
    // viewCaseStudies(){
    //     this.props.history.push('/view');
    // }

    render(){
        return(
            <div>
                {/*<div className="home-div-link">*/}
                {/*    <button onClick={()=>this.casestudy()} className="btn btn-primary home-btn"> create.js CASE STUDY </button>*/}
                {/*</div>*/}

                {/*<div className="home-div-link">*/}
                {/*    <button onClick={()=>this.viewCaseStudies()} className="btn btn-primary home-btn">VIEW CASE STUDY </button>*/}
                {/*</div>*/}

            </div>
        );
    }
}