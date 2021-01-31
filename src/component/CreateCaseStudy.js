import React from 'react';
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

// import Modal from "react-bootstrap/Modal";

import "./CreateCaseStudy.css";



export class CreateCaseStudy extends React.Component{
    constructor(props){
        super(props);
        this.state={project_name:'', Project_industry:'', country:'', client_name:'',client_Code_name:'',
            address:'', phone:'', email:'', Project_start_date:'',
            Project_end_date:'', problem_space:'', approach:'', idea:'', impact:''};

    }

    addCaseStudy(){
        Axios.post('http://3.104.104.28:3001/insert-cs', {
            project_name: this.state.project_name,
            Project_industry: this.state.Project_industry,
            country: this.state.country,
            city: this.state.city,
            client_name: this.state.client_name,
            client_code_name: this.state.client_code_name,
            client_address: this.state.address,
            client_phone: this.state.phone,
            client_email: this.state.email,
            Project_start_date: this.state.Project_start_date,
            Project_end_date: this.state.Project_end_date,
            problem_space: this.state.problem_space,
            approach: this.state.approach,
            idea: this.state.idea,
            impact: this.state.impact

        }).then(()=> {
            alert('Case study added successfully!!!!')
        });

        console.log(this.state.project_name);
        console.log(this.state.Project_industry);
        console.log(this.state.client_name);
        console.log(this.state.Project_start_date);
        console.log(this.state.Project_end_date);
        console.log(this.state.problem_space);
        console.log(this.state.Project_end_date);
    }

    render() {
        return (

            <div className="container-fluid">

            <div className="ibm-main-div">

                <div className="col-lg-12 text-center">
                    <h1>   <span className="ibm-form-title"> IBM PROJECT CASE STUDY  </span></h1>
                    <br/><br/>
                </div>

            <div className="row">
                <div className="col-lg-6 mb-4">
                    {/*beginning of First row left column */}
                    <div className="control-group form-group">
                        <div className="controls">
                            <label htmlFor="project_name">Project Name</label>
                            <input onChange={event => {this.setState({project_name:event.target.value})}} type="text" className="form-control" id="project_id"/>
                        </div>
                    </div> {/*end of project name*/}

                    <div className="control-group form-group">
                        <div className="controls">
                            <label>Industry:</label>
                            <select id="Project_industry" name="industry" className="form-control" required
                                    onChange={event => {this.setState({Project_industry:event.target.value})}} >
                                <option disabled selected value="0">-- Select an option--</option>
                                <option value="banking">Banking</option>
                                <option value="healthcare"> Heath Care</option>
                                <option value="education"> Education </option>
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


                </div>
                {/*end  of First row left column */}

                <div className="col-lg-6 mb-4">
                    {/*beginning of First row right column */}

                    <div className="control-group form-group">
                        <div className="controls">
                            <label>Country:</label>
                            <select id="country" name="type" className="form-control" required
                                    onChange={event => {this.setState({country:event.target.value})}}>
                                <option disabled selected value="0">-- Select an option--</option>
                                <option value="australia">Australia</option>
                                <option value="new-zealand"> New Zealand</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div> {/*end of country */}

                    <div className="control-group form-group">
                        <div className="controls">
                            <label htmlFor="city">City</label>
                            <input onChange={event => {this.setState({city:event.target.value})}} type="text" className="form-control" id="city"/>
                        </div>
                    </div> {/*end of city*/}

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
                    {/*end  of right column */}
                </div>

            </div>   {/*end of first row */}

            </div>
            <br />
                {/*beginning  of second row client description */}

                <div className="ibm-main-div">

                <div className="row" >

                    {/*<div className="col-lg-12 text-center">*/}
                    {/*    <button className="btn btn-primary" className="ibm-project-description" type="button" data-toggle="collapse"*/}
                    {/*            data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">*/}
                    {/*        PLEASE ADD  CLIENT DESCRIPTION*/}
                    {/*    </button>*/}
                    {/*</div>*/}

                    {/*<div className="col-lg-12 text-center">*/}
                        {/*<div className="collapse" id="collapseExample">*/}
                        {/*    <div className="card card-body">*/}
                        {/*        /!*Beginning of the collapsed section *!/*/}

                        {/*        <div className="row">*/}
                        {/*            <div className="col-lg-6 mb-4">*/}
                        {/*                <div className="control-group form-group">*/}
                        {/*                    <div className="controls">*/}
                        {/*                        <label htmlFor="client_name">Client Name</label>*/}
                        {/*                        <input onChange={event => {this.setState({client_name:event.target.value})}} type="text" className="form-control" id="project_id"/>*/}
                        {/*                    </div>*/}

                        {/*                    <div className="controls">*/}
                        {/*                        <label htmlFor="client_name">Contact Number</label>*/}
                        {/*                        <input onChange={event => {this.setState({phone:event.target.value})}} type="text" className="form-control" id="project_id"/>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}

                        {/*            <div className="col-lg-6 mb-4">*/}
                        {/*                <div className="control-group form-group">*/}
                        {/*                    <div className="controls">*/}
                        {/*                        <label htmlFor="client_name">Address</label>*/}
                        {/*                        <input onChange={event => {this.setState({address:event.target.value})}} type="text" className="form-control" id="project_id"/>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="controls">*/}
                        {/*                        <label htmlFor="client_name">Email ID</label>*/}
                        {/*                        <input onChange={event => {this.setState({email:event.target.value})}} type="text" className="form-control" id="project_id"/>*/}
                        {/*                    </div>*/}

                        {/*                </div> /!*end of client email and address*!/*/}
                        {/*            </div>*/}

                        {/*        </div>*/}


                        {/*        /!*End of the collapsed section  for client details*!/*/}

                        {/*    </div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*   Client description  ending here */}

                    {/*// <!-- Modal content-->*/}
                    <div className="col-lg-12 text-center">
                        {/*// <!-- Trigger the modal with a button -->*/}
                        <button type="button" className="btn btn-info btn-lg ibm-project-description"  data-toggle="modal"
                                data-target="#ibm-clientModal">ADD  CLIENT DESCRIPTION
                        </button>

                        {/*// <!-- Modal -->*/}
                        <div className="modal fade" id="ibm-clientModal" role="dialog">
                            <div className="modal-dialog">

                                {/*// <!-- Modal content-->*/}
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title"> Client Details </h4>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>

                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-lg-12 mb-4">
                                                <div className="control-group form-group">

                                                    <div className="controls">
                                                        <label htmlFor="client_name">Client Name</label>
                                                        <input onChange={event => {this.setState({client_name:event.target.value})}} type="text" className="form-control" id="client_name"/>
                                                    </div>

                                                    <div className="controls">
                                                        <label htmlFor="client_code_name">Client's Sensitive Name</label>
                                                        <input onChange={event => {this.setState({client_code_name:event.target.value})}} type="text" className="form-control" id="client_code_name"/>
                                                    </div>

                                                    <div className="controls">
                                                        <label htmlFor="phone">Contact Number</label>
                                                        <input onChange={event => {this.setState({phone:event.target.value})}} type="text" className="form-control" id="phone"/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 mb-4">
                                                <div className="control-group form-group">
                                                    <div className="controls">
                                                        <label htmlFor="address">Address</label>
                                                        <input onChange={event => {this.setState({address:event.target.value})}} type="text" className="form-control" id="address"/>
                                                    </div>
                                                    <div className="controls">
                                                        <label htmlFor="email">Email ID</label>
                                                        <input onChange={event => {this.setState({email:event.target.value})}} type="text" className="form-control" id="email"/>
                                                    </div>

                                                </div> {/*end of client email and address*/}
                                            </div>

                                        </div>


                                        {/*End of the collapsed section  for client details*/}

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-info" data-dismiss="modal">Close
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                </div>
                {/*end  of second row client description */}
                <br />

                {/*beginning  of third row client description */}

                <div className="ibm-main-div">
                <div className="row" >
                    <div className="col-lg-12 text-center">
                        <h3><span className="ibm-form-title"> PROJECT DESCRIPTION </span></h3>
                        <br/>
                    </div>

                    <div className="col-lg-12 text-center">
                        <button className="btn btn-primary" className="ibm-project-description" type="button" data-toggle="collapse"
                                data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                                PLEASE ADD PROJECT PROBLEM
                        </button>
                    </div>

                    <div className="col-lg-12 text-center">
                        <div className="collapse" id="collapseExample1">
                            <div className="card card-body">
                                {/*Beginning of the collapsed section */}

                                <div className="row">
                                <div className="col-lg-12 mb-4">
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

                                </div>
                                {/*End of the collapsed section */}

                            </div>
                        </div>
                    </div>
                </div>

                {/*end of first collapsable div*/}
                <div className="row">

                    <div className="col-lg-12 text-center">
                        <button className="btn btn-primary" className="ibm-project-description" type="button" data-toggle="collapse"
                                data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                            PLEASE ADD PROJECT IDEA
                        </button>
                    </div>

                    <div className="col-lg-12 text-center">
                        <div className="collapse" id="collapseExample2">
                            <div className="card card-body">

                                {/*Beginning of the collapsed section */}
                <div className="row">
                    <div className="col-lg-12 mb-4">
                        <div className="control-group form-group">
                            <div className="controls">
                                <h5>PROJECT IDEA :</h5>
                                <textarea id="idea" name="comments" rows="3" cols="10" className="form-control"
                                          placeholder="Please enter project idea"
                                          maxLength="999"
                                          onChange={event => {this.setState({idea:event.target.value})}}/>
                                            </div>
                                        </div> {/* end of Idea */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/*end of second collapsable div */}

                <div className="row">

                    <div className="col-lg-12 text-center">
                        <button className="btn btn-primary" className="ibm-project-description" type="button" data-toggle="collapse"
                                data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                            PLEASE ADD PROJECT APPROACH
                        </button>
                    </div>

                    <div className="col-lg-12 text-center">
                        <div className="collapse" id="collapseExample3">
                            <div className="card card-body">
                                {/*Beginning of the collapsed section */}

                                <div className="row">
                                    <div className="col-lg-12 mb-4">
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


                                {/*End of the collapsed section */}

                            </div>
                        </div>
                    </div>
                </div>

                {/*end of third collapsable div*/}

                <div className="row">

                    <div className="col-lg-12 text-center">
                        <button className="btn btn-primary" className="ibm-project-description" type="button" data-toggle="collapse"
                                data-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
                            PLEASE ADD PROJECT IMPACT
                        </button>
                    </div>

                    <div className="col-lg-12 text-center">
                        <div className="collapse" id="collapseExample4">
                            <div className="card card-body">
                                {/*Beginning of the collapsed section */}

                                <div className="row">
                                    <div className="col-lg-12 mb-4">
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
                    </div>
                {/*End of forth collapsable div*/}

                <div className="col-lg-12 text-center">
                    <div>
                        <button className="btn btn-primary btn-xl text-uppercase" id="ibm-save-btn" onClick={() => this.addCaseStudy()}> SAVE CASE STUDY</button>

                        <button className="btn btn-primary btn-xl text-uppercase" id="ibm-save-draft-btn"> SAVE AS DRAFT</button>
                    </div>
                    <br />
                </div>

            </div>
        )

    }
}

