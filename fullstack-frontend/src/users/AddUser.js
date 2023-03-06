import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

export default function AddUser() {

    //Navigate to homepage
    let navigate=useNavigate()
    //Creation of the object that we are going to use to create a person
    const [user, setUser]=useState({
        name:"",
        username:"",
        email:""
    })

    //Deconstruct the previous object
    const{name,username,email}=user

    //Function to input the value
    const onInputChange=(e)=>{
        //The ...user will keep on adding the new update
        setUser({...user,[e.target.name]: e.target.value});

    }

    //Create the function to add the user
    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user);
        navigate("/");
    }

    //Creation of the form to register a user
  return (
    <div className="container">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Register User</h2>
            <form onSubmit={(e)=>onSubmit(e)}>
            <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                    Name
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                    First Name
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter your first name"
                name="username"
                value={username}
                onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                    Email
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter your email address"
                name="email"
                value={email}
                onChange={(e)=>onInputChange(e)}/>
            </div>
            <button type="submit" className='btn btn-outline-primary'>Submit</button>
            <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
            </form>
        </div>
    </div>
  )
}
