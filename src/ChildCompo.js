import React from "react";
import "./ChildCompo.css";
import {Link} from 'react-router-dom'

function ChildCompo(props) {
  return (
    <div>
      {props.users.map((user) => {
        return (
          <div className="ChildCompo">
           <Link to={"/"+user.id}> <div>
            <h1>Name: {user.name} </h1>
            <p>UserName:{user.username}</p>
            <p>Email:{user.email}</p>
            </div>
            </Link>
            <button onClick={() => props.click(user.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
export default ChildCompo;
