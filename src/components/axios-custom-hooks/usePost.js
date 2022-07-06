import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../server-api/Api.js";

// The default URL from backend
axios.defaults.baseURL = api;

const usePost = ({ url, method, headers, body }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios[method](url, headers, body)
            .then((res) => {
                setResponse(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [method, url, body, headers]);

    return { response, error, loading };
};

export default usePost;
