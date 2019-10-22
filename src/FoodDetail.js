import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { tsPropertySignature } from '@babel/types';

function FoodDetail(props) {
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
    }, [path]);

    const deleteFood = (id) => {
        const food = {
            name: data.name,
            serving_size: data.serving_size,
            serving_size_unit: data.serving_size_unit,
            calories: data.calories,
            fat: data.fat,
            carbs: data.carbs,
            protien: data.protien
        };
        axios.delete(path, food)
        .then((result) => {
            props.history.push('/foods')
        })
    }
    return (
        <div>
            <h3>{data.name}</h3>
            <p>Serving size: {data.serving_size} {data.serving_size_unit}</p>
            <h4>Calories: {data.calories} cal</h4>
            <p>Fat: {data.fat}g</p>
            <p>Carbs: {data.carbs}g</p>
            <p>Protien: {data.protien}g</p>
            <div>
                <Link to={'/updateFood/'+data.id}><button>Update Food</button></Link>
                <button onClick={() => {deleteFood(data.id) }}>Delete Food</button>
            </div>
        </div>
    );
}

export default FoodDetail;