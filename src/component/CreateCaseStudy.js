import React from 'react';
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

// import Modal from "react-bootstrap/Modal";

import "./CreateCaseStudy.css";



export class CreateCaseStudy extends React.Component{
    constructor(props){
        super(props);
        this.state={project_id: '', project_name:'', Project_industry:'', Project_type:'', client_name:'', Project_start_date:'',
            Project_end_date:'',problem_space:'', approach:'',idea:'',impact:''};

    }

    addCaseStudy(){
        Axios.post('http://3.104.104.28:3001/insert-cs', {
            project_id: this.state.project_id,
            project_name: this.state.project_name,
            Project_industry: this.state.Project_industry,
            Project_type: this.state.Project_type,
            client_name: this.state.client_name,
            Project_start_date: this.state.Project_start_date,
            Project_end_date: this.state.Project_end_date,
            problem_space: this.state.problem_space,
            approach: this.state.approach,
            idea: this.state.idea,
            impact: this.state.impact

        }).then(()=> {
            alert('Case study added successfully!!!!')
        });

        console.log(this.state.project_id);
        console.log(this.state.project_name);
        console.log(this.state.Project_industry);
        console.log(this.state.Project_type);
        console.log(this.state.client_name);
        console.log(this.state.Project_start_date);
        console.log(this.state.Project_end_date);
        console.log(this.state.problem_space);
        console.log(this.state.Project_end_date);
    }

    render() {
        return (
            <div className="ibm-main-div">
                <div className="col-lg-12 text-center">
                    <h1><span className="ibm-form-title">  PROJECT CASE STUDY</span></h1>
                    <br/><br/>
                </div>

            <div className="row">
                <div className="col-lg-6 mb-4">

                    <div className="control-group form-group">
                        <div className="controls">
                            <label htmlFor="project_id">Project ID</label>
                            <input onChange={event => {this.setState({project_id:event.target.value})}} type="text" className="form-control" id="project_id"/>
                        </div>
                    </div> {/*end of project id*/}

                    <div className="control-group form-group">
                        <div className="controls">
                            <label>Industry:</label>
                            <select id="Project_industry" name="industry" className="form-control" required
                                    onChange={event => {this.setState({Project_industry:event.target.value})}} >
                                <option disabled selected value="0">-- Select an option--</option>
                                <option value="banking">Banking</option>
                                <option value="healthcare"> Heath Care</option>
                                <option value="telecom">Telecommunication</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div> {/*end of Industry*/}


                    <div className="form-group">
                        <label>Project Start Date:</label>
                        <div className="datepicker date input-group p-0 shadow-sm">
                            <input type="date" id="startdate" name="checkin" placeholder="Checking in date YYYY-mm-dd*"
                                   min='1899-01-01' className="form-control py-3 px-3" required="required"
                                   data-validation-required-message="Please enter project start date."
                                   onChange={event => {this.setState({Project_start_date:event.target.value})}} />
                            <div className="input-group-append"><span className="input-group-text px-3"><i
                                className="fas fa-clock"></i></span></div>
                        </div>
                    </div>


                    {/*<div className="control-group form-group">*/}
                    {/*    <div className="controls">*/}
                    {/*        <label htmlFor="client_name">Client Name</label>*/}
                    {/*        <input onChange={event => {this.setState({client_name:event.target.value})}} type="text" className="form-control" id="project_id"/>*/}
                    {/*    </div>*/}
                    {/*</div> /!*end of client name*!/*/}

                </div>

                <div className="col-lg-6 mb-4">

                    <div className="control-group form-group">
                        <div className="controls">
                            <label htmlFor="project_name">Project Name</label>
                            <input onChange={event => {this.setState({project_name:event.target.value})}} type="text" className="form-control" id="project_id"/>
                        </div>
                    </div> {/*end of project id*/}

                    <div className="control-group form-group">
                        <div className="controls">
                            <label>Project Type:</label>
                            <select id="Project_type" name="type" className="form-control" required
                                    onChange={event => {this.setState({Project_type:event.target.value})}}>
                                <option disabled selected value="0">-- Select an option--</option>
                                <option value="agile">Agile</option>
                                <option value="garage"> Garage</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div> {/*end of Project Type*/}

                    <div className="form-group">
                        <label>Project End Date:</label>
                        <div className="datepicker date input-group p-0 shadow-sm">
                            <input type="date" id="enddate" name="checkin" placeholder="Checking in date YYYY-mm-dd*"
                                   min='1899-01-01' className="form-control py-3 px-3" required="required"
                                   data-validation-required-message="Please enter project end date."
                                   onChange={event => {this.setState({Project_end_date:event.target.value})}}/>
                            <div className="input-group-append"><span className="input-group-text px-3"><i
                                className="fas fa-clock"></i></span>
                            </div>
                        </div>
                    </div> {/*end of Project end date */}

                </div>

            </div>   {/*end of first row */}

                <div className="control-group form-group">
                    <div className="controls">
                        <label htmlFor="client_name" >Client Name</label>
                        <input onChange={event => {this.setState({client_name:event.target.value})}} type="text" className="form-control" id="project_id"/>
                    </div>
                </div> {/*end of client name*/}


                <div className="row">

                    <div className="col-lg-12 text-center">
                        <button className="btn btn-primary" id="ibm-project-description" type="button" data-toggle="collapse"
                                    data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                PLEASE ADD PROJECT DESCRIPTION
                        </button>
                    </div>

                    <div className="col-lg-12 text-center">
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                                {/*Beginning of the collapsed section */}

                                <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="control-group form-group">
                                        <div className="controls">
                                            <h5> PROJECT PROBLEM :</h5>
                                            <textarea id="problem_space" name="comments" rows="3" cols="10" className="form-control"
                                                     placeholder="Please enter project problem"
                                                      maxLength="999"
                                                      onChange={event => {this.setState({problem_space:event.target.value})}}/>
                                        </div>
                                    </div>  {/* end of Problem */}
                                </div>

                                <div className="col-lg-6 mb-4">
                                    <div className="control-group form-group">
                                        <div className="controls">
                                            <h5>PROJECT APPROACH :</h5>
                                            <textarea id="approach" name="comments" rows="3" cols="10" className="form-control"
                                                      placeholder="Please enter project approach"
                                                      maxLength="999"
                                                      onChange={event => {this.setState({approach:event.target.value})}}/>
                                        </div>
                                    </div>  {/* end of Approach */}
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="control-group form-group">
                                        <div className="controls">
                                            <h5>PROJECT IDEA :</h5>
                                            <textarea id="idea" name="comments" rows="5" cols="30" className="form-control"
                                                      placeholder="Please enter project idea"
                                                      maxLength="999"
                                                      onChange={event => {this.setState({idea:event.target.value})}}/>
                                        </div>
                                    </div> {/* end of Idea */}
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="control-group form-group">
                                        <div className="controls">
                                            <h5> PROJECT IMPACT :</h5>
                                            <textarea id="impact" name="comments" rows="3" cols="10" className="form-control"
                                                      placeholder="Please enter project impact"
                                                      maxLength="999"
                                                      onChange={event => {this.setState({impact:event.target.value})}}/>
                                        </div>
                                    </div> {/* end of Impact */}
                                </div>
                                </div>
                                {/*End of the collapsed section */}

                            </div>
                        </div>
                    </div>
                </div>

                    {/*<div className="col-lg-6 mb-4">*/}
                    {/*    <div className="control-group form-group">*/}
                    {/*        <div className="controls">*/}
                    {/*            <label>Problem :</label>*/}
                    {/*            <textarea id="problem_space" name="comments" rows="5" cols="20" className="form-control"*/}
                    {/*                      data-validation-required-message="Please enter your message"*/}
                    {/*                      maxLength="999"*/}
                    {/*                      onChange={event => {this.setState({problem_space:event.target.value})}}/>*/}
                    {/*        </div>*/}
                    {/*    </div>  /!* end of Problem *!/*/}
                    {/*</div>*/}
                    {/*<div className="col-lg-6 mb-4">*/}
                    {/*    <div className="control-group form-group">*/}
                    {/*        <div className="controls">*/}
                    {/*            <label>Approach :</label>*/}
                    {/*            <textarea id="approach" name="comments" rows="5" cols="30" className="form-control"*/}
                    {/*                      data-validation-required-message="Please enter your message"*/}
                    {/*                      maxLength="999"*/}
                    {/*                      onChange={event => {this.setState({approach:event.target.value})}}/>*/}
                    {/*        </div>*/}
                    {/*    </div>  /!* end of Approach *!/*/}
                    {/*</div>*/}

                    {/*<div className="col-lg-6 mb-4">*/}
                    {/*    <div className="control-group form-group">*/}
                    {/*        <div className="controls">*/}
                    {/*            <label>Idea :</label>*/}
                    {/*            <textarea id="idea" name="comments" rows="5" cols="30" className="form-control"*/}
                    {/*                      data-validation-required-message="Please enter your message"*/}
                    {/*                      maxLength="999"*/}
                    {/*                      onChange={event => {this.setState({idea:event.target.value})}}/>*/}
                    {/*        </div>*/}
                    {/*    </div> /!* end of Idea *!/*/}
                    {/*</div>*/}
                    {/*<div className="col-lg-6 mb-4">*/}
                    {/*    <div className="control-group form-group">*/}
                    {/*        <div className="controls">*/}
                    {/*            <label>Impact :</label>*/}
                    {/*            <textarea id="impact" name="comments" rows="5" cols="30" className="form-control"*/}
                    {/*                      data-validation-required-message="Please enter your message"*/}
                    {/*                      maxLength="999"*/}
                    {/*                      onChange={event => {this.setState({impact:event.target.value})}}/>*/}
                    {/*        </div>*/}
                    {/*    </div> /!* end of Impact *!/*/}

                    {/*</div>*/}

                <div className="col-lg-12 text-center">
                    <div>
                        <button className="btn btn-success" id="ibm-save-btn" onClick={() => this.addCaseStudy()}> SAVE CASE STUDY</button>
                    </div>
                    <br />
                </div>
        </div>

        )

    }
}

