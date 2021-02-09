import axios from "axios";
const instance =axios.create({

    baseURL:"http://54.206.202.79:3001/"
});
export default instance;
