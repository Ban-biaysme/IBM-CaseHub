import React,{useState,useEffect} from 'react';
import CaseList from "../components/CaseList";

import axios from "../../axios";
import "./ViewAllCases.css";

let CASES = [];
export default class Cases extends React.Component{
    constructor(props){
        super(props);
        this.state={ data: ''};

        this.componentDidMount=this.componentDidMount.bind(this);
    }

    //call this on page load
    componentDidMount() {
        //communicate with backend

        axios.get(`view-all`).then((res) => {
            this.setState({data:res.data});
                   });
    }




    render(){
        function split_at_index(value,index)
        {
            return value.substring(0, index);
        }
        CASES=[];

               Array.from(this.state.data).map((val)=> {


            CASES.push(
                {
                    project_id: val._id,
                    project_name:split_at_index( val.project_name, 17),
                    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ibm.com%2Fdesign%2Flanguage%2Fibm-logos%2F8-bar&psig=AOvVaw0hNa1JyCw00i_-HeGSa79Y&ust=1612493201646000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIi46bWbz-4CFQAAAAAdAAAAABAV',
                    client_name: split_at_index( val.client_name,13)
                });
            //id = val._id;
        })
                      return  <div className="view-all-main-div"><h1 className="ibm-padding">IBM CASE STUDIES</h1><CaseList items={CASES}/></div>;

    };


}

