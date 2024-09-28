import React from 'react';
import axios from 'axios';

const Api = () => {

    async function apicall() {
        try {
            const response = await axios.get("https://api.restful-api.dev/objects");
            const names = response.data.map(items => items.name);
            console.log(names);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    }

    return (
        <>
            <div>API</div>
            <button onClick={apicall}>
                API call
            </button>
        </>
    );
}

export default Api;
