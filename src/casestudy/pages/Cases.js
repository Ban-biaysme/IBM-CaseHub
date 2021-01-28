import React,{useState,useEffect} from 'react';


//import CaseList from "../components/CaseList";
import axios from "D:/React/ibm-case-study-project-frontend/src/component/axios";

const fetchUrl = "/get-all";
function Cases(){
    const [cases,setCases] = useState([]);

useEffect(()=>{
    async function fetchData(){
const request = await axios.get(fetchUrl);
console.log(request);
return request;
    }
    fetchData();

},[fetchUrl]);
}
export default Cases;
