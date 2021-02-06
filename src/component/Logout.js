import {Redirect, useHistory} from "react-router";
import {useState} from "react";


      const Logout = () => {
          const history = useHistory();
        localStorage.clear();
          window.location.reload();
          history.push({
              pathname:  "/"

          });
        /*return(
history);*/
           };


     /*   return <Redirect to="/login" push={true} />*/




export default Logout;
/*

function Logout() {
    console.log("logout function")
    localStorage.clear();
    this.props.history.push("/login");
    window.location.reload();
};

*/
