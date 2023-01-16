import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/userSlice'
import './FormStyle.css'
function Form() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch();

    const handlesubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({ name, email }));
    }

    return (

        <form onSubmit={handlesubmit}>

            <div className='form-group'>
                <input
                    type="text"
                    placeholder='Enter Name'
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className='form-group'>
                <input
                    type="email"
                    placeholder='Enter Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className='form-group'>
                <input
                    type="submit"
                    placeholder='Add User'
                />
            </div>
        </form>
    )
}

export default Form
