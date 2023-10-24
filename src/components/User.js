import React from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () => {
    
    const users = useLoaderData();

    const handleDelete = _id => {
         console.log(_id);
         fetch(`http://localhost:4000/users/${_id}`, {
            method:'DELETE',
         })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if(data.deletedCount > 0 ){
                alert('Deleted User successfully');
            }
         })
    }

    return (
        <div>
            <h3>user: {users.length}</h3>
            <div>
                {
                    users.map(user => <p key={user._id}> {user.name} {user.email} <button
                     onClick={()=> handleDelete(user._id)}>X</button></p>)
                }
            </div>
        </div>
    );
};

export default User;