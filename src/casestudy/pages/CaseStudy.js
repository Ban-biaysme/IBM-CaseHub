import React from 'react';
import axios from "../../axios";

export default class CaseStudy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: ''};
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        const caseId = this.props.match.params.CaseId;
        axios.get("view-by-id1", {params: {_id: caseId}}).then((res) => {
            let matchData = res.data.filter((val) => {
                if (val._id === caseId) {
                    return val;
                }
            });
            this.setState({data:matchData});
        });
    }

    render() {
        return (
            <div>
                <h1> Project Name : {this.state.data ? this.state.data[0].project_name : ''}</h1>
                <h2> Industry : {this.state.data ? this.state.data[0].project_industry : ''}</h2>
                <h2> Client Name : {this.state.data ? this.state.data[0].client_name : ''}</h2>
                <h4> Client Location :{this.state.data ? this.state.data[0].country : ''}</h4>
                <h4> Problem Space :</h4>
                <p>{this.state.data ? this.state.data[0].problem_space : ''}</p>
                <h4> Impact : </h4>
                <p>{this.state.data ? this.state.data[0].impact : ''}</p>
                <h4> Idea : </h4>
                <p>{this.state.data ? this.state.data[0].idea : ''}</p>
                <h4> Approach : </h4>
                <p>{this.state.data ? this.state.data[0].approach : ''}</p>
                <h4> project_start_date :{this.state.data ? this.state.data[0].project_start_date : ''} , </h4>

            </div>
        );
    }
}
