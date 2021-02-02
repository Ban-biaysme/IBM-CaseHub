import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';

import CaseList from "../components/CaseList";
import axios from "axios";
let x;


const CaseStudy = () => {
    const caseId = useParams().CaseId;
    const [cases, setCases] = useState([]);
    useEffect(() => {
        async function fetchData(){
            console.log("i am here")
            const request = await axios.get("/view-by-id1",{params:{_id:caseId}});
            console.log("i am here2")
            console.log(request)
            setCases(request.data)
            console.log(cases)
            return request;
        }
fetchData();
    },[{caseId}]

    );
    Array.from(cases).map((val)=> {
        if(val._id === caseId){
            x=val;
            console.log(x)}
        //id = val._id;
    })

    return (<div>
        <h1> Project ID : {caseId}</h1>
        <h2> Industry : </h2>
        <h2> Client Name : </h2>
        <h4> Client Location :</h4>
        <h4> Problem Space :</h4>
        <p>  </p>
        <h4> Impact : </h4>
        <p>  </p>
        <h4> Idea : </h4>
        <p>   </p>
        <h4> Approach : </h4>
        <p>  </p>
        <h4> project_start_date : </h4>
        <h1> DatabaseId :</h1>





    </div>);
}

export default CaseStudy;
