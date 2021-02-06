import React from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const PDF = (props => {
    return( <>
        <div className="pdf-file" ref={ ref}>
            <h1>project_name: {props.project_name}</h1>
            <h1>project_industry: {props.project_industry}</h1>
            <h1>country: {props.country}</h1>
            <h1>city: {props.city}</h1>
            <h1>client_name:{props.client_name}</h1>
            <h1>client_code_name:{props.client_code_name}</h1>
            <h1>client_phone:{props.client_phone}</h1>
            <h1>client_email: {props.client_email}</h1>
            <h1>project_start_date: {props.project_start_date}</h1>
            <h1>project_end_date: {props.project_end_date}</h1>
            <h5>problem_space: {props.problem_space}</h5>
            <h5>approach: {props.approach}</h5>
            <h5>idea: {props.idea}</h5>
            <h5>impact: {props.impact}</h5>
        )

        </div><Pdf targetRef = {ref} filename = "post.pdf">
            {({toPdf}) =><button onClick={toPdf}> Download PDF</button>}
        </Pdf> </>

    );
})
export default PDF;
