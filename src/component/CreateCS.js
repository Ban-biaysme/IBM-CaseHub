import React from 'react';
import Axios from "axios";


export class CreateCS extends React.Component{

    constructor(props){
        super(props);
        this.state={project_id: '', client_name:'', industry:'', problem:'', idea:'', impact:''};
    }

    addCaseStudy(){
        Axios.post('http://localhost:3001/insert-cs', {
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
            <div id="contact">
                <div className="row">
                    <div className="col-lg-6 mb-4">

                        <div className="control-group form-group">
                            <div className="controls">
                                <label htmlFor="project_id">Project ID</label>
                                <input onChange={event => {this.setState({project_id:event.target.value})}} type="text" className="form-control" id="project_id"/>
                            </div>
                        </div>

                        <div className="control-group form-group">
                            <div className="controls">
                                <label htmlFor="client_name">Client Name </label>
                                <input onChange={event => {this.setState({client_name:event.target.value})}}  type="text" className="form-control" id="client_name"/>
                            </div>
                        </div>

                        <div className="control-group form-group">
                            <div className="controls">
                            <label htmlFor="industry">Industry </label>
                            <input onChange={event => {this.setState({industry:event.target.value})}} type="text" className="form-control" id="industry"/>
                            </div>
                        </div>

                        <div className="control-group form-group">
                            <div className="controls">
                                <label>Choose the Industry:</label>
                                <select id="industry" name="degree" className="form-control" required
                                        data-validation-required-message="select an Industry">
                                    <option disabled selected value="0">-- Select an option--</option>
                                    <option value="banking">Banking</option>
                                    <option value="healthcare"> Heath Care</option>
                                    <option value="telecom">Telecommunication</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>


                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="control-group form-group">
                            <div className="controls">
                            <label htmlFor="problem">Problem </label>
                            <input onChange={event => {this.setState({problem:event.target.value})}} type="text" className="form-control" id="problem"/>
                            </div>
                        </div>

                        {/*<div className="control-group form-group">*/}
                        {/*    <div className="controls">*/}
                        {/*    <label htmlFor="idea">Project Idea</label>*/}
                        {/*    <input onChange={event => {this.setState({idea:event.target.value})}} type="text" className="form-control" id="idea"/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="control-group form-group">
                            <div className="controls">
                                <label>Project Idea :</label>
                                <textarea id="idea" name="comments" rows="5" cols="30" className="form-control"
                                          data-validation-required-message="Please enter your message"
                                          maxLength="999"
                                          onChange={event => {this.setState({idea:event.target.value})}}/>
                            </div>
                        </div>

                        <div className="control-group form-group">
                            <div className="controls">
                                <label>Project Impact:</label>
                                <textarea id="impact" name="comments" rows="5" cols="30" className="form-control"
                                          data-validation-required-message="Please enter your message"
                                          maxLength="999"
                                          onChange={event => {this.setState({impact:event.target.value})}} />
                            </div>
                        </div>

                        {/*<div className="control-group form-group">*/}
                        {/*    <div className="controls">*/}
                        {/*    <label htmlFor="impact">Project Impact</label>*/}
                        {/*    <input onChange={event => {this.setState({impact:event.target.value})}} type="text" className="form-control" id="impact"/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    <div className="col-lg-12 text-center">
                        <div>
                            <button className="btn btn-success"  id="cs-submit" onClick={() => this.addCaseStudy()}> SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}