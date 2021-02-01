import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


import "./Home.css";



export class Home extends React.Component {


    onChange;

    searchCaseStudy() {
        return undefined;
    }

    render() {
        return (

            <div className="ibm-home-div">
                <div className="col-lg-12 text-center">

                    <br/><br/>
                </div>
                <div className="container">
                    <div className="input-group">
                        <input type="search" className="form-control" placeholder="Search for case studies" aria-label="Search"
                               aria-describedby="search-addon"/>
                        <button type="button" className="btn btn-primary">search</button>
                    </div>

                    <div className="row justify-content-evenly">
                        <div className="col-sm-3">

                            <div className="control-group form-group">
                                <div className="controls">
                                    <select id="Project_industry" name="industry" className="form-control" required
                                            onChange={event => {
                                                this.setState({project_industry: event.target.value})
                                            }}>
                                        <option disabled selected value="0">All Industries</option>
                                        <option value="banking">Banking</option>
                                        <option value="healthcare"> Heath Care</option>
                                        <option value="telecom">Telecommunication</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">

                            <div className="control-group form-group">
                                <div className="controls">
                                    <select id="Project_industry" name="industry" className="form-control" required
                                            onChange={event => {
                                                this.setState({project_industry: event.target.value})
                                            }}>
                                        <option disabled selected value="0">All Companies</option>
                                        <option value="banking"> ANZ</option>
                                        <option value="healthcare"> Wellington Hospital</option>
                                        <option value="telecom"> Vodafone</option>
                                        <option value="other"> Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <br></br>
                        <div className="col-lg-12 text-center">
                            <h6>Or</h6>
                            <button className="btn btn-primary" type="submit">View all</button>
                        </div>


                    </div>





                </div>
            </div>



        )
    }
}























































