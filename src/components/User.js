import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const User = () => {
    
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

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
                const reamingUser = users.filter(user => user._id !== _id );
                setUsers(reamingUser);
            }
         })
    }

    return (
        <div>
            <h3>user: {loadedUsers.length}</h3>
            <div>
                {
                    loadedUsers.map(user => <p key={user._id}> {user.name} {user.email} <Link to={`/update/${user._id}`}><button>Update</button></Link> <button
                     onClick={()=> handleDelete(user._id)}>X</button></p>)
                }
            </div>
        </div>
    );
};

export default User;