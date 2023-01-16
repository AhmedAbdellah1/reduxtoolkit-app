import React from 'react'
import { useSelector } from 'react-redux'
import './SidebarStyle.css'

function Sidebar() {
    const { name } = useSelector(state => state.user);
    return (
        <div className='sidebar'>
            <ul>
                <li><a href='#3'>Home</a></li>
                <li><a href='#3'>About</a></li>
                <li><a href='#3'>Contact</a></li>
                <li><a href='#3'>Blog</a></li>
                <li><a href='#3'>Hello {name}</a></li>
            </ul>
        </div>
    )
}
export default Sidebar
