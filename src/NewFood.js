import React, {useState } from 'react';
import './App.css';
import axios from 'axios';

function NewFood(props){
    const [product, setProduct] = useState({
        name: '', 
        serving_size: null,
        serving_size_unit: '',
        calories: null,
        fat: null,
        carbs: null,
        protien: null
    });
    const apiUrl = 'http://127.0.0.1:8000/foods';

    const saveProduct = (e) => {
        e.preventDefault();
        const data = {
            name: product.name,
            serving_size: product.serving_size,
            serving_size_unit: product.serving_size_unit,
            calories: product.calories,
            fat: product.fat,
            carbs: product.carbs,
            protien: product.protien
        };
        axios.post(apiUrl, data)
        .then((result) => {
            props.history.push('/foods/' + result.data.id)
        })
    };

    const onChange = (e) => {
        e.persist();
        setProduct({...product, [e.target.name]: e.target.value});
    }

    return(
        <form onSubmit={saveProduct}>
            <label>Food Name: </label>
            <input type='text' name='name' id='id' placeholder='Enter name' value={product.name} onChange={onChange} />
            <label>Serving Size: </label>
            <input type='number' name='serving_size' id='serving_size' placeholder='Enter serving size' value={product.serving_size} onChange={onChange} />
            <label>Serving Size Unit: </label>
            <input type='text' name='serving_size_unit' id='serving_size_unit' placeholder='Enter unit' value={product.serving_size_unit} onChange={onChange} />
            <label>Calories: </label>
            <input type='number' name='calories' id='calories' placeholder='Enter calories' value={product.calories} onChange={onChange} />
            <label>Fat: </label>
            <input type='number' name='fat' id='fat' placeholder='Enter fat' value={product.fat} onChange={onChange} />
            <label>Carbs: </label>
            <input type='number' name='carbs' id='carbs' placeholder='Enter carbs' value={product.carbs} onChange={onChange} />
            <label>Protien: </label>
            <input type='number' name='protien' id='protien' placeholder='Enter protien' value={product.protien} onChange={onChange} />
            <button type='submit'>Save Food</button>
        </form>
    )
}

export default NewFood;