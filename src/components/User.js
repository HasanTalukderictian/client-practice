import React from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () => {
    
    const users = useLoaderData();

    return (
        <div>
            <h3>user: {users.length}</h3>
            <div>
                {
                    users.map(user => <p key={user._id}> {user.name} {user.email}</p>)
                }
            </div>
        </div>
    );
};

export default User;