import { useHistory} from "react-router";
import {useState} from "react";


      const Logout = () => {
          const history = useHistory();
        localStorage.clear();
          window.location.reload();
          history.push({
              pathname:  "/"

          });

           };


     /*   return <Redirect to="/login" push={true} />*/




export default Logout;

