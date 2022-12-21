import axios from "axios";
import { USERNAME, PASSWORD } from '../../secrets';

const getData = async () => {
    try {
        console.log('\x1b[33mAccessing token...\x1b[39m');
        // First, get the access token using the `Username` and `Password` headers
        const tokenResponse = await axios.post('https://api.kantacky.com/auth/token', {}, {
            headers: {
            'Username': USERNAME,
            'Password': PASSWORD
            }
        });
        const accessToken = tokenResponse.data.token;
        console.log('\x1b[32mToken received!\x1b[39m');
    
        console.log('\x1b[33mAccessing Data...\x1b[39m');
        // Then, use the `AccessToken` header to get the data from the API
        const dataResponse = await axios.get('https://api.kantacky.com/bulo/tasks/personal/muji/stores', {
            headers: {
            'AccessToken': accessToken
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