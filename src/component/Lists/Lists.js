import React from 'react';
import List from './List'
import './List.css'
import { useSelector } from 'react-redux'

function Lists() {

    const data2 = useSelector((state) => state)

    return <div className="lists">
        {data2.map((item) => {
            return <List id={item.id} key={item.id} note={item.note} data={data2} complete={item.complete} />
        })}
    </div>;
}

export default Lists;
