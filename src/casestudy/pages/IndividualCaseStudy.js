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
        axios.get("/view-by-id1", {params: {_id: caseId}}).then((res) => {
            let matchData = res.data.filter((val) => {
                if (val._id === caseId) {
                    return val;
                }
            });
            this.setState({data:matchData});
        });
    }

    render() {
        console.log(this.state.data );
        return (
                <div className="ibm-main-div1">
                   <div className=" ibm-div-padding">
                    <h1 className="text-color"> Project Name : <span className="data">{this.state.data ? this.state.data[0].project_name : ''}</span>
                    </h1>
                </div>

<div className="ibm-div-padding">
                <div className="row">
                    <div className="col-lg-4 mb-4 ">
                        <h5> Industry : <span className="data"> {this.state.data ? this.state.data[0].project_industry : ''}</span>
                        </h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 mb-4 ">
                        <h5> Client Name: <span className="data">{this.state.data ? this.state.data[0].client_name : ''}</span>
                        </h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 mb-4 ">
                        <h5> Client Location : <span className="data">{this.state.data ? this.state.data[0].country : ''}</span>
                        </h5>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-lg-4 mb-4 ">
                        <h5> Project start date : <span className="data">{this.state.data ? this.state.data[0].project_start_date : ''}</span>
                        </h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 mb-4  ">
                        <h5> Project end date : <span className="data">{this.state.data ? this.state.data[0].project_end_date : ''}</span>
                        </h5>
                    </div>
                </div>
   </div>

                {/*end of raw*/}
       <div className="ibm-div2 ">
                <div className="col-lg-12 ibm-div-padding2">
                    <h2 className="text-color">Problem Space :</h2>
                    <p>{this.state.data ? this.state.data[0].problem_space : ''}</p>
                </div>

                <div className="col-lg-12 ibm-div-padding2">
                    <h2 className="text-color">Impact :</h2>
                    <p>{this.state.data ? this.state.data[0].impact : ''}</p>
                </div>

                <div className="col-lg-12 ibm-div-padding2">
                    <h2 className="text-color">Idea :</h2>
                    <p>{this.state.data ? this.state.data[0].idea : ''}</p>
                </div>

                <div className="col-lg-12 ibm-div-padding2">
                    <h2 className="text-color">Approach :</h2>
                    <p>{this.state.data ? this.state.data[0].approach : ''}</p>
                </div>

            </div>

                </div>
                // end of main div
        );
    }
}
