import axios from "axios";
import token from '../token.js';


const getData = async () => {
    try {
        console.log('\x1b[33mFetching data...\x1b[39m');
        const dataResponse = await axios.get('https://api.kantacky.com/muji/store', {
            headers: {
            'AccessToken': token
            }
        });
        const data = dataResponse.data.data;
        console.log('\x1b[32mData received!\x1b[39m');

        return data;
        } catch (error) {
        console.error(error);
        }
  };
  
  export default getData;