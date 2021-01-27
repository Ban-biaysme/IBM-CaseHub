import './App.css';
import React, {useState} from 'react';
// import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
}
from 'react-router-dom';
import {Home}  from "./component/Home";
import {CreateCS}  from "./component/CreateCS";
import {View}  from "./component/View";
import {Login} from "./component/Login";
import {CreateCaseStudy} from "./component/CreateCaseStudy";
import {Export}  from "./component/Export";
import MainNavigation from './component/Navigation/MainNavigation';


function App() {
     const [token, setToken] = useState('');

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        // <Router>
        //     <div className="container-fluid">
        //         <MainNavigation />
        //         <main>
        //             <Switch>
        //                 <Route path="/" excat component={Home}/>
        //                 <Route path="/cs" excat component={CreateCS}/>
        //                 <Route path="/view" excat component={View}/>
        //                 {/*<Route path="/login" excat component={Login}/>*/}
        //             </Switch>
        //         </main>
        //     </div>
        // </Router>
            <Router>
                <div className="container-fluid">
                <MainNavigation />
                <main>
                    <Switch>
                        {/*Route to the Home component*/}
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        {/*Route to the Create case study component*/}
                        <Route path="/case-study" exact>
                            <CreateCaseStudy />
                        </Route>
                        {/*Route to the View component*/}
                        <Route path="/view"exact>
                            <View />
                        </Route>
                        {/*Route to the login component*/}
                        <Route path="/login"exact>
                            <Login />
                        </Route>
                        {/*Route to the Export component*/}
                        <Route path="/export"exact>
                            <Export />
                        </Route>

                        <Redirect to="/" />
                    </Switch>
                </main>
                </div>
            </Router>

    );
}

export default App;
