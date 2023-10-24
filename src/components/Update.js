import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const loadedUser = useLoaderData();

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email }
     
        fetch(`http://localhost:4000/users/${loadedUser._id}`, {
            method:'PUT',
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
               if(data.modifiedCount > 0){
                form.reset();
                alert("user updated successfully")
               }
            })
    }


    return (
        <div>
            <h3>Update information of LoadesUser is : {loadedUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" defaultValue={loadedUser?.name} />
                <br />
                <input type="text" name="email" id="" defaultValue={loadedUser?.email} />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default Update;