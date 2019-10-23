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
                        <td>{val.calories}</td>
                        <td>{val.fat}</td>
                        <td>{val.carbs}</td>
                        <td>{val.protien}</td>
                    </tr>
                ))}
                <tr className='totals'>
                    <td>Totals</td>
                    <td>{totalCal}</td>
                    <td>{totalFat}</td>
                    <td>{totalCarbs}</td>
                    <td>{totalProtien}</td>
                </tr>
            </table>
        </div>
    )

}
export default Fooodlog