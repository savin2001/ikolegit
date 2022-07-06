import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../server-api/Api.js";

// The default URL from backend
axios.defaults.baseURL = api;

const useFetch = ({ url, method }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios[method](url)
            .then((res) => {
                setResponse(res.data);
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
    }, [method, url]);

    return { response, error, loading };
};

export default useFetch;
