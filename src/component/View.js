import React from 'react';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export class View extends React.Component{
    constructor(props){
        super(props);
        this.state={ data: ''};

        this.componentDidMount=this.componentDidMount.bind(this);
    }

    //call this on page load
    componentDidMount() {
        //communicate with backend
        Axios.get('http://localhost:3001/get-all').then((res) => {
            this.setState({data:res.data});
            console.log(res.data);
        });
    }

    render(){
        return(
            <div className="container">
                <h1> CASE STUDY RECORDS </h1>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr> <th> Project ID</th>
                                <th> Client Name </th>
                                <th> Industry </th>
                                <th> Problem </th>
                                <th> Project Idea </th>
                                <th> Project Impact </th>
                            </tr>
                        </thead>
                        <tbody>
                        {Array.from(this.state.data).map((val)=> {
                            return(
                                <tr> <td> {val.project_id}</td>
                                    <td> {val.client_name}</td>
                                    <td> {val.industry}</td>
                                    <td> {val.problem}</td>
                                    <td> {val.idea}</td>
                                    <td> {val.impact}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}