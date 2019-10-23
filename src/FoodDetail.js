import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { tsPropertySignature, arrayExpression } from '@babel/types';
import Fooodlog from './Foodlog';

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
        <div className='wrapper'>
            <div className='labelWrapper'>
                <h2 className='labelTitle'>Nutrition Facts</h2>
                <p className='upperLabelRow'>{data.name}</p>
                <p className='upperLabelRow'>Serving size: {data.serving_size} {data.serving_size_unit}</p>
                <hr className='thickLine'/>
                <p>Amount Per Serving</p>
                <hr />
                <div className='labelRow'>
                    <p className='labelBold'><p className='labelBoldTitle'>Calories</p> {data.calories}</p>
                    <p>Calories from Fat {Math.round(data.fat*9)}</p>
                </div>
                <hr className='mediumLine'/>
                <div className='percentHeader'>% Daily Value*</div>
                <hr />
                <div className='labelRow'>
                    <p className='labelBold'> <p className='labelBoldTitle'>Total Fat</p>{data.fat}g</p>
                    <p className='percentValue'>{Math.round((data.fat/65)*100)}%</p>
                </div>
                <hr />
                <div className='labelRow'>
                    <p className='labelBold'> <p className='labelBoldTitle'>Total Carbohydrates</p>{data.carbs}g</p>
                    <p className='percentValue'>{Math.round((data.carbs/300)*100)}%</p>
                </div>
                <hr />
                <div className='labelRow'>
                    <p className='labelBold'> <p className='labelBoldTitle'>Protein</p>{data.protien}g</p>
                    <p className='percentValue'>{Math.round((data.protien/100)*100)}%</p>
                </div>
                <hr className='mediumLine'/>
                <p>*Percent Daily Values are based on a 2000 calorie diet</p>
            </div>
            <div>
                    <Link to={'/updateFood/'+data.id}><button>Update Food</button></Link>
                    <button onClick={() => {deleteFood(data.id) }}>Delete Food</button>
                    <button onClick={() => props.log.push(data)}>Save Food</button>
            </div>
            
        </div>

    );
}

export default FoodDetail;