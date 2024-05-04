import axios from 'axios'

const initializeApp = () => {

    // base URL for all API request via axios
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL


    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {

    } else {
        // Removes console.log from production
        console.log = () => { };
    }

}

export default initializeApp;
