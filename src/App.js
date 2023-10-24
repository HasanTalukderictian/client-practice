import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function App() {
  
  const [users, setUsers] = useState([]);

  // useEffect( ()=>{
  //   fetch('http://localhost:4000/users')
  //   .then(res => res.json())
  //   .then(data => setUsers(data))
  // },[])

  const handleAdduser =(event) =>{
       event.preventDefault();
       const form = event.target;
       const name = form.name.value;
       const email = form.email.value;
       const user = { name, email }
       console.log(user);
       fetch("http://localhost:4000/users", {
        method:'POST',
        headers: {
          'content-type': 'application/json',
        },
        body:JSON.stringify(user)
       })
       .then(res => res.json())
       .then(data => {
       
        console.log(data);

        if(data.insertedId){
          form.reset();
          alert('user added successfully');
        }
        // const newUser = [...users, data];
        // setUsers(newUser);
       
       })
  }
 

  return (
    <div className="App">
     

        <form onSubmit={handleAdduser}>
          <input type="text" name="name" id="" />
          <br />
          <input type="email" name="email" id="" />
          <br />
          <input type="submit" value="Add" />
          <br />
        </form>

        <Link to='/users'><button>Show Users</button></Link>
      </div>
   
  );
}

export default App;
