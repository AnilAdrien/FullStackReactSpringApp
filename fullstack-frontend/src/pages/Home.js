import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, Link, useParams } from 'react-router-dom';

export default function Home() {

    //Creation of the object that will store the user information
    const[users,setUsers]=useState([])

    //Set the parameter id to delete a user
    const {id}= useParams()

    //By using the use Effect so you tell REACT that 
    //your component needs to do something after the render
    //Every time the page is opened it will open the user information
    useEffect(()=>{
        loadUsers();
    }, []); //If you don't put the empty array, this will run the unlimited time.
    //If you put the empty array, it will run one time when the page loads.

    //To load the information
    //It has to be an async
    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/users");
        //Adding the data in the users array
        setUsers(result.data);
    };

    //Function to delete the user
    const deleteUser = async(id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
    }
  return (
    <div className="container">
        <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //The map will create a new array from calling our function 
                        //for every array element
                        users.map((user, index)=>(
                            <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className="btn btn-primary mx-2" to={`/viewuser/${user.id}`}>View</Link>
                                <Link className="btn btn-outline-primary mx-2" to={`/edituser/${user.id}`}>Edit</Link>
                                <button className="btn btn-danger mx-2" onClick={()=>deleteUser(user.id)}>Delete</button>
                            </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}
