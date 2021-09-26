import React, {  useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

function User(props){
    // state={
    //     user:{}
    // }
    // componentDidMount(){
    //     fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
    //     .then(res=>res.json())
    //     .then(res => { 
    //         console.log(res)
    //         this.setState({user:res})
    //  } )
    // }

    const [user, setUser]=useState([])
      //promise
     function fetchData(){
        fetch(`https://jsonplaceholder.typicode.com/users/${props.match.params.id}`)
        .then(res=>res.json())
        .then(res => { 
                console.log(res)
                setUser(res)
         } )
         
   }
    
      useEffect(()=>{
        fetchData()
      },[])
       
        
      
        return user.address ? (
            <div>
                <h1>Single User</h1>
           <p>User{user.address.street}</p>
           <p>User{user.address.city}</p>
           <p>User{user.address.zipcode}</p>
           <p>User{user.address.suite}</p>
          <Link to="/">Go to All Users </Link>
            </div>
          
        ):
        (<h1>No suere</h1>);
   
}
export default User;
