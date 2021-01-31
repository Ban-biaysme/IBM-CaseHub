import React from 'react';


import * as PropTypes from "prop-types";

class Button extends React.Component {
    render() {
        return null;
    }
}

Button.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node
};

export class Home extends React.Component{

    onChange;

    searchCaseStudy() {
        return undefined;
    }

    render(){
        return(
            <div>

                <h1>Welcome to Our Fabulous Database!</h1>

                <div className="row">
                    <div className="col-lg-6">
                        <label>Search By:</label>

                        <div className="input-group rounded">
                            <input type="search" className="form-control rounded" placeholder="Put any related tags..."
                                   aria-label="Search"
                                   aria-describedby="search-addon"/>
                            <span className="input-group-text border-0" id="search-addon">
                            <i className="fas fa-search"></i>
                            </span>
                        </div>

                    </div>
                        <div className="col-lg-3">

                            <div className="control-group form-group">
                                <div className="controls">
                                    <label>Project Industry:</label>
                                    <select id="industry" name="industry" className="form-control" required
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

                        <div className="col-lg-3">
                            <div className="control-group form-group">
                                <div className="controls">
                                    <label>Project Type:</label>
                                    <select id="industry" name="industry" className="form-control" required
                                            data-validation-required-message="select an Industry">
                                        <option disabled selected value="0">-- Select an option--</option>
                                        <option value="agile">Agile Methodology</option>
                                        <option value="integration"> Cloud Integration</option>
                                        <option value="interface">Creating GUI</option>
                                        <option value="webapp">Building Web Application</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center">
                            <div>
                                <button className="btn btn-info" id="search-form-btn" onClick={() => this.searchCaseStudy()}> SEARCH CASE STUDY</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}












