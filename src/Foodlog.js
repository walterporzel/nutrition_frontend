import React, {useState } from 'react';
import { tsPropertySignature } from '@babel/types';

function Fooodlog(props){

    let totalCal = null;
    let totalFat = null;
    let totalCarbs = null;
    let totalProtien = null;
    props.log.forEach(value => {
        totalCal = totalCal + Number(value.calories);
        totalFat = totalFat + Number(value.fat);
        totalCarbs = totalCarbs + Number(value.carbs)
        totalProtien = totalProtien + Number(value.protien)
    })
    const reset = () =>{
        props.log.length = 0;
        props.history.push('/log')
    }

    return(
        <div className='wrapper'>
            <table>
                <tr>
                    <th>Food Name</th>
                    <th>Calories</th>
                    <th>Fat</th>
                    <th>Carbohydrates</th>
                    <th>Protien</th>
                </tr>
                {props.log.map(val => (
                    <tr>
                        <td>{val.name}</td>
                        <td>{Number(val.calories)}</td>
                        <td>{Number(val.fat)}g</td>
                        <td>{Number(val.carbs)}g</td>
                        <td>{Number(val.protien)}g</td>
                    </tr>
                ))}
                <tr className='totals'>
                    <td>Totals</td>
                    <td>{totalCal}</td>
                    <td>{totalFat}g</td>
                    <td>{totalCarbs}g</td>
                    <td>{totalProtien}g</td>
                </tr>
                <tr className='totals'>
                    <td>% Daily Value</td>
                    <td>{Math.round(totalCal/2000*100)}%</td>
                    <td>{Math.round(totalFat/65*100)}%</td>
                    <td>{Math.round(totalCarbs/300*100)}%</td>
                    <td>{Math.round(totalProtien)}%</td>
                </tr>
            </table>
            <button onClick={() => {props.log.length = 0; props.history.push('/log')}}>Clear Log</button>
        </div>
    )

}
export default Fooodlog