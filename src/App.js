import './App.css';
import React, {useState} from 'react';
// import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import {Home}  from "./component/Home";
import {CreateCS}  from "./component/CreateCS";
import {View}  from "./component/View";
import {Login} from "./component/Login";
import {CreateCaseStudy} from "./component/CreateCaseStudy";

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
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/cs" exact>
                            <CreateCS />
                        </Route>
                        <Route path="/view"exact>
                            <View />
                        </Route>
                        <Route path="/login"exact>
                            <Login />
                        </Route>

                        <Route path="/caseS"exact>
                            <CreateCaseStudy />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </main>
                </div>
            </Router>

    );
}

export default App;
