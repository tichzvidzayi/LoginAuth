import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    axios.defaults.withCredentials= true;
    useEffect(() => {
        axios.get('http://localhost:3001/home')
            .then(res => {
                console.log(res)
                if (res.data === "Success") { navigate("./login") }
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <h1> Home Component</h1>
    )
}

export default Home;