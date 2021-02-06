import React, {useEffect, useState} from 'react';
import axios from "../../axios";
import './IndiView.css';

export default class IndividualCaseStudy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: ''};
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        const caseId = this.props.match.params.CaseId;
        axios.post("/view-by-id1", {params: {_id: caseId}}).then((res) => {
            this.setState(res.data[0]);
        });
    }

    render() {
        console.log(this.state.data );
        return (
                <div className="ibm-main-div1">
                   <div className=" ibm-div-padding">
                    <h1 className="text-color-h1"> Project Name : <span className="data">{this.state.project_name }</span>
                    </h1>
                </div>

<div className="ibm-div-padding">
                <div className="row">
                    <div className="col-lg-4 mb-4 ">
                        <h5 className="text-color-h5"> Industry : <span className="data"> {this.state.project_industry }</span>
                        </h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 mb-4 ">
                        <h5 className="text-color-h5"> Client Name: <span className="data">{this.state.client_name }</span>
                        </h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 mb-4 ">
                        <h5 className="text-color-h5"> Client Location : <span className="data">{this.state.country }</span>
                        </h5>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-lg-4 mb-4 ">
                        <h5 className="text-color-h5"> Project start date : <span className="data">{this.state.project_start_date}</span>
                        </h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 mb-4  ">
                        <h5 className="text-color-h5"> Project end date : <span className="data">{this.state.project_end_date }</span>
                        </h5>
                    </div>
                </div>
   </div>

                {/*end of raw*/}
       <div className="ibm-div2">
                <div className="col-lg-12 ibm-div-padding">
                    <h2 className="text-color-h2">Problem Space :</h2>
                    <p>{this.state.problem_space}</p>
                </div>

                <div className="col-lg-12 ibm-div-padding">
                    <h2 className="text-color-h2">Impact :</h2>
                    <p>{this.state.impact }</p>
                </div>

                <div className="col-lg-12 ibm-div-padding">
                    <h2 className="text-color-h2">Idea :</h2>
                    <p>{this.state.idea }</p>
                </div>

                <div className="col-lg-12 ibm-div-padding">
                    <h2 className="text-color-h2">Approach :</h2>
                    <p>{this.state.approach }</p>
                </div>

            </div>

                </div>
                // end of main div
        );
    }
}
