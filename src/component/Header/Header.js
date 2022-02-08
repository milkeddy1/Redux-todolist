import React from 'react';
import './Header.css'
import { useSelector } from 'react-redux'

function Header() {

    const data = useSelector((state) => state)

    return <div>
        <h1 className="title">TodoList</h1>
        <h2 className="num_of_todos">{data.length} Todos Left</h2>
    </div>;
}


export default Header;
