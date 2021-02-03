import React from 'react';
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CaseStydyFormStyle.css";

export default  class CaseStudyForm extends React.Component{
    constructor(props){
        super(props);
        this.state={project_name:'', project_industry:'', country:'', city:'', client_name:'',client_code_name:'',
            client_phone:'', client_email:'', project_start_date:'',
            project_end_date:'', problem_space:'', approach:'', idea:'', impact:''};
    }

    addCaseStudy(){
        Axios.post(`${this.props.serverURI}/create`, {
            project_name: this.state.project_name,
            project_industry: this.state.project_industry,
            country: this.state.country,
            city: this.state.city,
            client_name: this.state.client_name,
            client_code_name: this.state.client_code_name,
            client_phone: this.state.phone,
            client_email: this.state.email,
            project_start_date: this.state.project_start_date,
            project_end_date: this.state.project_end_date,
            problem_space: this.state.problem_space,
            approach: this.state.approach,
            idea: this.state.idea,
            impact: this.state.impact

        }).then(()=> {
            alert('Case study added successfully!!!!')
        });
    }

    render(){
        return(
            <div>
            <div className="ibm-main-div1">
                <div className="row">
                    <div className="col-lg-8 mb-4">
                        {/*beginning of First row left column */}
                        <div className="control-group form-group">
                            <div className="controls form-floating">
                                <label htmlFor="project_name" >Case Study Name</label>
                                <input placeholder=" Please enter the project name" onChange={event => {this.setState({project_name:event.target.value})}} type="text" className="project_name" id="project_name"/>
                            </div>

                        </div>

                    </div>
                </div>

                {/*end of project name*/}

                <div className="row">
                    <div className="col-lg-5 mb-4 form-floating">
                        <div className="control-group form-group">
                            <div className="controls">
                                <label>Industry:</label>
                                <select id="Project_industry" name="industry" className="form-control" required
                                        onChange={event => {this.setState({project_industry:event.target.value})}} >
                                    <option disabled selected value="0">-- Select an option--</option>
                                    <option value="banking">Banking</option>
                                    <option value="healthcare"> Heath Care</option>
                                    <option value="education"> Education </option>
                                    <option value="telecom">Telecommunication</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {/*end of Industry*/}

                    <div className="row">
                        <div className="col-lg-4 mb-4">
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
                        </div>

                        <div className="col-lg-2 mb-4">
                            <div className="control-group form-group">
                                <div className="controls">
                                    <label htmlFor="city">City</label>
                                    <input placeholder=" Please enter city"  onChange={event => {this.setState({city:event.target.value})}} type="text" className="form-control" id="city"/>
                                </div>
                            </div> {/*end of city*/}
                        </div>
                    </div>
                {/*end of country and city row*/}

                <div className="row">

                    <div className="col-lg-3 mb-4">
                        <div className="form-group">
                            <label>Project Start Date:</label>
                            <div className="datepicker date input-group p-0 shadow-sm">
                                <input type="date" id="startdate" name="checkin" placeholder="Checking in date YYYY-mm-dd*"
                                       min='1899-01-01' className="form-control py-3 px-3" required="required"
                                       data-validation-required-message="Please enter project start date."
                                       onChange={event => {this.setState({project_start_date:event.target.value})}} />
                                <div className="input-group-append"><span className="input-group-text px-3"><i
                                    className="fas fa-clock" /></span></div>
                            </div>
                        </div>
                    </div>
                    {/*end of project start date*/}

                    <div className="col-lg-3 mb-4">
                        <div className="form-group">
                            <label>Project End Date:</label>
                            <div className="datepicker date input-group p-0 shadow-sm">
                                <input type="date" id="enddate" name="checkin" placeholder="Checking in date YYYY-mm-dd*"
                                       min='1899-01-01' className="form-control py-3 px-3" required="required"
                                       data-validation-required-message="Please enter project end date."
                                       onChange={event => {this.setState({project_end_date:event.target.value})}} />
                                <div className="input-group-append"><span className="input-group-text px-3"><i
                                    className="fas fa-clock" /></span>
                                </div>
                            </div>
                        </div> {/*end of Project end date */}
                    </div>
                </div>

            {/*    End of First row with project info*/}

                <div className="col-lg-6">
                    {/*// <!-- Trigger the modal with a button -->*/}
                    <button type="button" className="btn btn-primary btn-lg client-btn"  data-toggle="modal"
                            data-target="#ibm-clientModal-info"><span className="plus">+</span> CLIENT DESCRIPTION
                    </button>

                    {/*// <!-- Modal -->*/}
                    <div className="modal fade" id="ibm-clientModal-info" role="dialog">
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
                                                    <input onChange={event => {this.setState({client_phone:event.target.value})}} type="text" className="form-control" id="phone"/>
                                                </div>

                                                <div className="controls">
                                                    <label htmlFor="email">Email ID</label>
                                                    <input onChange={event => {this.setState({client_email:event.target.value})}} type="text" className="form-control" id="email"/>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/*End of the collapsed section  for client details*/}

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary client-btn" data-dismiss="modal">CLOSE
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
                {/*End of client detail modal window */}

                <div className="row blue-div">
                    <h2> Case Study Fields<span><i className="fas fa-arrow-down white-arrow" /></span> </h2>
                </div>

                {/*end of client details div*/}
        <div className="project-details-div">
            <br />
                    <div className="col-lg-12 mb-4">
                        <div className="control-group form-group">
                            <div className="controls">
                                <h5> Project Problem:<span> <i className="fas fa-question-circle"
                                title="what is the problem and,or the client is facing? "/></span></h5>
                                <textarea id="problem_space" name="comments" rows="3" cols="10" className="form-control"
                                          placeholder="Please enter project problem"
                                          maxLength="999"
                                          onChange={event => {this.setState({problem_space:event.target.value})}}/>
                            </div>
                        </div>
                    </div>
                    {/* end of Problem */}
                    <div className="col-lg-12 mb-4">
                        <div className="control-group form-group">
                            <div className="controls">
                                <h5>Project Approach :<span> <i className="fas fa-question-circle"
                                                                title="what have IBM team done to address and solve the problem space?"/></span></h5>
                                <textarea id="approach" name="comments" rows="3" cols="10" className="form-control"
                                          placeholder="Please enter project approach"
                                          maxLength="999"
                                          onChange={event => {this.setState({approach:event.target.value})}}/>
                            </div>
                        </div>
                    </div>
                    {/* end of Approach */}
                    <div className="col-lg-12 mb-4">
                        <div className="control-group form-group">
                            <div className="controls">
                                <h5> Project Idea :<span> <i className="fas fa-question-circle"
                                title=" what was the solution both client and IBM team align on to solve the problem?"/></span></h5>
                                <textarea id="idea" name="comments" rows="3" cols="10" className="form-control"
                                          placeholder="Please enter project idea"
                                          maxLength="999"
                                          onChange={event => {this.setState({idea:event.target.value})}}/>
                            </div>
                        </div>
                    </div>
                    {/* end of Impact */}

                    <div className="col-lg-12 mb-4">
                        <div className="control-group form-group">
                            <div className="controls">
                                <h5> Project Impact:
                                    <span> <i className="fas fa-question-circle"
                                    title="what was the value delivered to the client and/or employees fro the idea?"/></span></h5>
                                <textarea id="impact" name="comments" rows="3" cols="10" className="form-control"
                                          placeholder="Please enter project impact"
                                          maxLength="999"
                                          onChange={event => {this.setState({impact:event.target.value})}}/>
                            </div>
                        </div>
                    </div>
                    {/* end of Impact */}


            <div className="col-lg-12 text-center btn-section">

                <button className="btn btn-primary btn-xl text-uppercase save-btn" onClick={() => this.addCaseStudy()}> SAVE AS DRAFT</button>

                <button className="btn btn-primary btn-xl text-uppercase export-btn"  data-toggle="modal"
                        data-target="#ibm-export"> EXPORT </button>

                <button className="btn btn-primary btn-xl text-uppercase publish-btn"> PUBLISH </button>


                {/*// <!-- Modal -->*/}
                <div className="modal fade" id="ibm-export" role="dialog">
                    <div className="modal-dialog">

                        {/*// <!-- Modal content-->*/}
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title"> Export</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>

                            </div>
                            <div className="modal-body">
                                <h5>Choose output format</h5>

                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary export-btn-md" >
                                    One Page PDF </button>
                                <button className="btn btn-primary export-btn-md" >
                                         One Page .pptx </button>
                                <button className="btn btn-primary export-btn-md" >
                                    One Page .key </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
                {/*End of client detail modal window */}
                {/* End of project-details-div */}

                {/*Button section of Create form*/}


                <div className="row blue-div2">
                    <h6> @copyright IBM 2021 </h6>
                </div>

            </div>
        )
    }
}
