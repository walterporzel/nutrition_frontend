import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function UpdateFood(props){
    const [food, setFood] = useState({
        name: '', 
        serving_size: null,
        serving_size_unit: '',
        calories: null,
        fat: null,
        carbs: null,
        protien: null
    });
    const apiUrl = 'http://127.0.0.1:8000/foods/' + window.location.pathname.replace('/updateFood/', '');

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(apiUrl);
            setFood(result.data);
        };

        fetchData();
    }, [apiUrl]);

    const updateFood = (e) => {
        e.preventDefault();
        const data = {
            name: food.name,
            serving_size: food.serving_size,
            serving_size_unit: food.serving_size_unit,
            calories: food.calories,
            fat: food.fat,
            carbs: food.carbs,
            protien: food.protien
        };
        axios.put(apiUrl, data)
        .then((result) => {
            props.history.push('/foods/' + result.data.id)
        })
    };

    const onChange = (e) => {
        e.persist();
        setFood({...food, [e.target.name]: e.target.value});
    }

    return(
        <form onSubmit={updateFood} className='inputForm'>
            <div className='formRow'>
                <label>Food Name: </label>
                <input type='text' name='name' id='id' placeholder='Enter name' value={food.name} onChange={onChange} />
            </div>
            <div className='formRow'>
                <label>Serving Size: </label>
                <input type='number' name='serving_size' id='serving_size' placeholder='Enter serving size' value={food.serving_size} onChange={onChange} />
                <label> Unit: </label>
                <input type='text' name='serving_size_unit' id='serving_size_unit' placeholder='Enter unit' value={food.serving_size_unit} onChange={onChange} />
            </div>
            <div className='formRow'>
                <label>Calories: </label>
                <input type='number' name='calories' id='calories' placeholder='Enter calories' value={food.calories} onChange={onChange} />
            </div>
            <div className='formRow'>
                <label>Fat: </label>
                <input type='number' name='fat' id='fat' placeholder='Enter fat' value={food.fat} onChange={onChange} />
            </div>
            <div className='formRow'>
                <label>Carbs: </label>
                <input type='number' name='carbs' id='carbs' placeholder='Enter carbs' value={food.carbs} onChange={onChange} />
            </div>
            <div className='formRow'>
                <label>Protien: </label>
                <input type='number' name='protien' id='protien' placeholder='Enter protien' value={food.protien} onChange={onChange} />
            </div>
            <button type='submit'>Save Food</button>
        </form>
    );
}

export default UpdateFood;