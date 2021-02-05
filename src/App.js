import './App.css';
import React from 'react';
import {Route, Redirect, Switch, BrowserRouter as Router} from 'react-router-dom';
import {Home}  from "./component/Home";
import {View}  from "./component/View";
import Login from "./component/Login";
import UserCases  from "./casestudy/pages/UserCases";
import MainNavigation from './component/Navigation/MainNavigation';
import Cases from "./casestudy/pages/Cases";
import CaseStudy from "./casestudy/pages/CaseStudy";
import CaseStudyForm from "./component/CaseStudyForm";
import IndividualCaseStudy from "./casestudy/pages/IndividualCaseStudy";
import {EditCaseStudy} from "./casestudy/pages/EditCaseStudy";
export default App;

const serverURI = 'http://127.0.0.1:3001';
//const serverURI = 'http://3.104.104.28:3001';

function App() {
    const [token, setToken] = React.useState('');
    let token1 = localStorage.getItem('login-token');
    if(!token1) {
        return <Login setToken={setToken} serverURI={serverURI}/>
    }

    return (
            <Router>
                <div>
                <MainNavigation />
                <main>
                    <Switch>
                        {/*Route to the Home component*/}
                        <Route path="/" exact>
                            <Home />
                        </Route>

                       {/*Route to the Create case study component*/}
                                           <Route path="/create" exact>
                            <CaseStudyForm serverURI={serverURI}/>
                        </Route>
                         <Route path="/indiView/:CaseId" component={IndividualCaseStudy} />
                        <Route path="/EditCaseStudy/:CaseId" component={EditCaseStudy}/>
                        {/*<Route path="/:CaseId/CaseStudy" exact>*/}
                        {/*    <CaseStudy serverURI={serverURI}/>*/}
                        {/*</Route>*/}
                        {/*Route to the Login component*/}
                        <Route path="/Cases" exact>
                            <Cases serverURI={serverURI} />
                        </Route>
                        <Route path="/login" exact>
                            <Login  />
                        </Route>
                        {/*Route to the UserCases component*/}
                        <Route path="/mycases" exact>
                            <UserCases />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </main>
            </div>
        </Router>
    );
}
