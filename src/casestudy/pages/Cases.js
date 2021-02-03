import React,{useState,useEffect} from 'react';
import CaseList from "../components/CaseList";

import axios from "../../axios";

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
                    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAq1BMVEUAAAAkoUj/3wD6TVYbeTYOPRvAqAAXZS2gjABgVAAgjT+8OkGdMDYSUSTbREwFFAmAcADfwwAJKRJeHSEgHAB9JysgCgtAOAA/FBYMNRgJJhFSGRwYFQAKLRQMCwBIPwB1JCkwKgADDQaJKi/32ABQRgAQRyAHHg4GGQvTuQB4aQAimkUUWCg3ERO3oAAEDwcUBgfrzgCrlgBsXgAoIwAdgzsZbzKMegAWYizb1lscAAAC7ElEQVR4nO3a61baQBSG4YGCHMpJsKUgoIajRa1US3v/V1YIgdlJZiKuJMtp1/v8gplZhE+cTbKDUgAAAAAAAAAAAAAAAAAAAAAAAAAAAIBLGp+sGrvpajHJ7L46n4gXKxdMSrGDNo3rmh8XZG/T0VHMQQrt6EHrLgYpFi9v3giyiBxzaF6WLkivYdXbTdeq53g9vsOKUTTI2LxskCoIkJPbz1a3u+nvF2eq7l9sXLJYykPaFpVTBcmgah30lbVqhQvS4JxFHxjkZ1KQujhixfEgs0lCkIL431rnEwTI2XXv5NowXdNu9OidGK719fiwHNMNppbxqWxPTVp6k7cM02JXX+jRjtztVT1uKEzrYKqUXNJcCNJJDFIY+zOeYca1ILXkIBV/ZpF7kPR7ZKTHDXsk2An2GcBx5292sxe52nxeWFYr4/hHVS2ji9BqGUR/cZREG6hedzPI5Si0WgYRZ8SefvfN3II09JVhwzCdfHn49Bpe3RTXfW1xCagfrrb68TbTIEBOprrDODVMv9FqDO91VRb9Q8/QWFwo9aCfPWQaJF3Vup+EVsuq1TZ8e5RDfWyXyq/fQ7EFUb8iOdaeu0HkSXwsSPTcfV9vcwsC5OTx28mjYbqv3enRKzHcF4Vr1dX8gWE3YWSYaZD01+xzPR7Z7EptC9G97UDVemcXxQ8iO/APrgex9LUOt3RF53qZb5DcOo2ePzLWA4clA7oo+EdMW1b70/nfl2fbfY8M6nHB7zeWwdPjHc9SfGX0dwXvk9mttydlvvV2/CFKUKZ+hJ9KjtxDnL8R5NAKOv1SKPMgWd1n9y9ITPfZjx/Byn92KrXb+Mp099mBnFx/sdqfqsw757gKXmzZjPNOhxo0RYFdxFd2VRoZVK3N6Xo9qWrtZ//o47pXfmeiqZUcxFuLv7ljQTZPL7I3lxxEiQ8k+yDPX62ed9OjqySRBqPy2nGW4xpWepalAAAAAAAAAAAAAAAAAAAAAAAAAID/x1/fnlaG/54xgwAAAABJRU5ErkJggg==',
                    client_name: split_at_index( val.client_name,13)
                });
            //id = val._id;
        })
                      return  <div><h1>IBM CASE STUDIES</h1><CaseList items={CASES}/></div>;

    };


}

