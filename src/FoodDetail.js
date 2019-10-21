import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Route, Link } from "react-router-dom";

function FoodDetail() {
    const path = 'http://127.0.0.1:8000' + window.location.pathname;
    const [data, setData] = useState( [] );

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                path,
            );
            setData(result.data);
        };
        fetchData();
    }, []);
    return (
        <div>
            <h3>{data.name}</h3>
            <p>Serving size: {data.serving_size} {data.serving_size_unit}</p>
            <h4>Calories: {data.calories} cal</h4>
            <p>Fat: {data.fat}g</p>
            <p>Carbs: {data.carbs}g</p>
            <p>Protien: {data.protien}g</p>
        </div>
    );
}

export default FoodDetail;