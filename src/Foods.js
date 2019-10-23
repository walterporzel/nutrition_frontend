import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function Foods() {
    const [data, setData] = useState( [] );
    const [search, setSearch] = useState ( {search: ''} );

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://127.0.0.1:8000/foods',
            );

            setData(result.data);
        };

        fetchData();
    }, []);

    const onSearchChange = (e) => {
        setSearch({search: e.target.value})
        console.log(search.search)
    }


    return (
        <div>
            <input type="search" placeholder="search foods" onChange={onSearchChange}/>
            <Link to='newFood'><button>Create Food</button></Link>
            {data.filter(food => {
                let searchValue = search.search.toLowerCase()
                let foodName = food.name.toLowerCase()
                if (!searchValue){
                    return true
                }
                else if(foodName.includes(searchValue)){
                    return true
                }
                else{
                    return false
                }
            }).map(item => (
                <Link to={'/foods/' + item.id}><p>{item.name}</p></Link>
            ))}
        </div>
    );
}

export default Foods;