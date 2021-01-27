import React,{ useState } from 'react';
import Axios from "axios";

export class CreateCaseStudy extends React.Component{
    constructor(props){
        super(props);
        this.state={project_id: '', project_name:'', Project_industry:'', Project_type:'', Project_start_date:'',
            Project_end_date:'',problem_space:'', approach:'',idea:'',impact:'' };
    }

    addCaseStudy(){
        Axios.post('http://http://3.104.104.28/:3001/insert-cs', {
            project_id: this.state.project_id,
            client_name: this.state.client_name,
            industry: this.state.industry,
            problem: this.state.problem,
            idea: this.state.idea,
            impact: this.state.impact

        }).then(()=> {
            alert('Case study added successfully!!!!')
        });
    }

    render() {
        return (
            <div>
                <div className="col-lg-12 text-center">
                    <h2 className="form-heading text-uppercase">
                      <span className="text-wrapper">
                          <span className="letters">CREATE CASE STUDY</span>
                        </span></h2>
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
                                    data-validation-required-message="select an Industry"
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
                        {/*<div className="datepicker date input-group p-0 shadow-sm">

                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />


                            <input type="date" id="startdate" name="project-startdate" placeholder="pro-start-date YYYY-mm-dd*"
                                   min='1899-01-01' className="form-control py-3 px-3" required="required"
                                   data-validation-required-message="Please enter project start date."/>
                            <div className="input-group-append"><span className="input-group-text px-3"><i
                                className="fas fa-clock"></i></span></div>
                        </div>*/}
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
                                    data-validation-required-message="select an Industry">
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
                                   data-validation-required-message="Please enter project end date."/>
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
                    <div className="col-lg-12 mb-4">

                        <div className="control-group form-group">
                            <div className="controls">
                                <label>Problem :</label>
                                <textarea id="problem_space" name="comments" rows="5" cols="30" className="form-control"
                                          data-validation-required-message="Please enter your message"
                                          maxLength="999"
                                          onChange={event => {this.setState({problem_space:event.target.value})}}/>
                            </div>
                        </div>  {/* end of Problem */}

                        <div className="control-group form-group">
                            <div className="controls">
                                <label>Approach :</label>
                                <textarea id="approach" name="comments" rows="5" cols="30" className="form-control"
                                          data-validation-required-message="Please enter your message"
                                          maxLength="999"
                                          onChange={event => {this.setState({approach:event.target.value})}}/>
                            </div>
                        </div>  {/* end of Approach */}

                        <div className="control-group form-group">
                            <div className="controls">
                                <label>Idea :</label>
                                <textarea id="idea" name="comments" rows="5" cols="30" className="form-control"
                                          data-validation-required-message="Please enter your message"
                                          maxLength="999"
                                          onChange={event => {this.setState({idea:event.target.value})}}/>
                            </div>
                        </div> {/* end of Approach */}

                        <div className="control-group form-group">
                            <div className="controls">
                                <label>Impact :</label>
                                <textarea id="impact" name="comments" rows="5" cols="30" className="form-control"
                                          data-validation-required-message="Please enter your message"
                                          maxLength="999"
                                          onChange={event => {this.setState({impact:event.target.value})}}/>
                            </div>
                        </div> {/* end of Approach */}

                    </div>
                </div>
            </div>
        // end of the main div
        )

    }
}

