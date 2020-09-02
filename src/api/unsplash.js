import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID rlYusB9vCYiv8TGorztiexPaYsXDIWXK0wUmEFcjM88"
    }
});