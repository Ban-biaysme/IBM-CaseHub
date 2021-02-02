import React from 'react';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './IndiView.css';

export class IndiView extends React.Component{
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
        return (
            // Array.from(this.state.data).map((val)=>
                <div className="ibm-main-div">

                    <div className="container heading">
                        <h1 className="text-color"> <p>{/*{val.project_name}*/} ANZ BANK web app </p></h1>
                    </div>

                    <div className="row ibm-div-padding">
                        <div className="col-lg-3 mb-4 text-left ">
                                <h5 className="text-color"> Project Name :
                                    <span className="data"> anz bank app  {/*{val.project_name}*/} </span>
                                </h5>
                        </div>

                        <div className="col-lg-3 mb-4 text-left ">
                            <h5 className="text-color"> Industry :
                                <span className="data"> anz bank app  {/*{val.project_name}*/} </span>
                            </h5>
                        </div>


                    </div>


                    <div>

                        <div className="col-lg-3 mb-4 text-left ">
                            <div>
                                <h5 className="text-color"> Industry :
                                    {/*<p> anz bank app /!*{val.project_name}*!/ </p>*/}
                                </h5>
                            </div>

                        </div>
                        <div className="col-lg-3 mb-4 text-left ">
                            <div>
                                <p> banking  </p>
                            </div>

                        </div>
                    </div>


                    {/*end of the row*/}


                    {/*    <div className="col-lg-4 mb-4 text-center">*/}

                    {/*        <div>*/}
                    {/*            <h5 className="text-color">*/}
                    {/*                Project Name : */}
                    {/*            </h5>*/}
                    {/*            <p>*/}
                    {/*                anz bank app*/}
                    {/*                /!*{val.project_name}*!/*/}
                    {/*            </p>*/}
                    {/*        </div>*/}

                    {/*        <div>*/}
                    {/*            <h5 className="text-color">*/}
                    {/*                Industry*/}
                    {/*            </h5>*/}
                    {/*            <p>*/}
                    {/*                /!*{val.Project_industry}*!/*/}
                    {/*                banking*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    /!*end of left col*!/*/}

                    {/*    <div className="col-lg-4 mb-4 text-center">*/}


                    {/*        <div>*/}
                    {/*            <h5 className="text-color">*/}
                    {/*                Start date*/}

                    {/*            </h5>*/}
                    {/*            <p>*/}
                    {/*                /!*{val.Project_start_date}*!/*/}
                    {/*                20/02/2020*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <h5 className="text-color">*/}
                    {/*                project end date*/}
                    {/*            </h5>*/}
                    {/*            <p>*/}
                    {/*                /!*{val.Project_end_date}*!/*/}
                    {/*                20/02/2021*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    /!*end of left col*!/*/}
                    {/*    <div className="col-lg-4 mb-4 text-center">*/}
                    {/*        <div>*/}
                    {/*            <h5 className="text-color">*/}
                    {/*                Client Name*/}

                    {/*            </h5>*/}
                    {/*            <p>*/}
                    {/*                /!*{val.client_name}*!/*/}
                    {/*                ANZ BANK*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    /!*end of left col*!/*/}

                    {/*</div>*/}
                    {/*/!*end of the row*!/*/}

                    <div className="col-lg-12 ibm-div-padding">
                        <h2 className="text-color">Problem:</h2>
                        {/*<p>{val.problem_space} </p>*/}
                        <br/><br/>
                    </div>
                    <div className="col-lg-12 ibm-div-padding">
                        <h2 className="text-color">Approach:</h2>
                        {/*<p> {val.approach} </p>*/}
                        <br/><br/>
                    </div>
                    <div className="col-lg-12 ibm-div-padding">
                        <h2 className="text-color">Idea:</h2>
                        {/*<p> {val.idea} </p>*/}
                        <br/><br/>
                    </div>
                    <div className="col-lg-12 ibm-div-padding">
                        <h2 className="text-color">Impact:</h2>
                        {/*<p> {val.impact} </p>*/}
                        <br/><br/>
                    </div>
                </div>
           // )
        )
    }
}