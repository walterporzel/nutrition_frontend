import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Route, Link} from 'react-router-dom'

function Foods() {
    const [data, setData] = useState( [] );

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://127.0.0.1:8000/foods',
            );

            setData(result.data);
        };

        fetchData();
    }, []);
    return (
        <div>
            {data.map(item => (
                <Link to={'/foods/' + item.id}><p>{item.name}</p></Link>
            ))}
        </div>
    );
}

export default Foods;