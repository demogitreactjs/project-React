import React, { useState,useEffect } from "react";
import axios from "axios";
import ChildCompo from "./ChildCompo";
import "./App.css";
import AddUser from "./AddUser";
import { Route, Switch } from "react-router-dom";
import User from "./User";

 function App(){
  const [ users, setUsers]=useState([])

 async function fetchData(){
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = result.data;
    setUsers(users)   
  }

  useEffect(()=>{
    fetchData()
  },[])

 
  

  const deleteHandler = (id) => {
    const newArr = users.filter((person) => person.id !== id);
    setUsers( newArr );
  };
  const  addUer = (user) => {
    user.id = Math.random();
    const newArr = [...users, user];   
    setUsers(newArr)
    console.log(user);
  };
  
    return (
      <div>
        <AddUser addUer={addUer} />
        <div className="App">       
          <Switch>
            <Route exact path="/">
              <ChildCompo users={users} click={deleteHandler} />
            </Route>
            <Route path="/:id"  component={User} />
              
            
          </Switch>
        </div>
      </div>
    );
 
}
export default App;
