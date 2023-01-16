import React from 'react'
import { useSelector } from 'react-redux'

import './HeaderStyle.css'

function Header() {
    const { name } = useSelector(state => state.user);
    return (
        <div className='header'>
            <h1>Ahmed Abdelah</h1>
            <p>Hello {name}</p>
        </div>
    )
}

export default Header
