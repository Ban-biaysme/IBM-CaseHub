import './App.css';
import React from 'react';
import {Route, Redirect, Switch, BrowserRouter as Router} from 'react-router-dom';
import {Home}  from "./component/Home";
import {View}  from "./component/View";
import Login from "./component/Login";
import {CreateCaseStudy} from "./component/CreateCaseStudy";
import {Export}  from "./component/Export";
import MainNavigation from './component/Navigation/MainNavigation';
export default App;

const serverURI = 'http://127.0.0.1:3001';
//const serverURI = 'http://3.104.104.28:3001';

function App() {
    const [token, setToken] = React.useState('');

    if(!token) {
        return <Login setToken={setToken} serverURI={serverURI}/>
    }

    return (
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
                        <Route path="/case-study" serverURI={serverURI} exact>
                            <CreateCaseStudy serverURI={serverURI}/>
                        </Route>
                        {/*Route to the View component*/}
                        <Route path="/view" exact>
                            <View serverURI={serverURI}/>
                        </Route>
                        {/*Route to the Login component*/}
                        <Route path="/login" exact>
                            <Login  />
                        </Route>
                        {/*Route to the Export component*/}
                        <Route path="/export" exact>
                            <Export />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </main>
            </div>
        </Router>
    );
}