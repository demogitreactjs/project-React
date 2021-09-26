import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class User extends Component {
    state={
        user:{}
    }
    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
        .then(res=>res.json())
        .then(res => { 
            console.log(res)
            this.setState({user:res})
     } )
    }

    render() {
        // const {name , username , email}=this.state.user;
        // return (
        //     <div>
        //         <p>Name: {name}</p>
        //         <p>UserName: {username}</p>
        //         <p>Email: {email}</p>
        //         <Link to="/">Go toAll Users</Link>
        //     </div>
        // )
        console.log("address is ",this.state.user.address)
      
        return this.state.user.address ? (
            <div>
           <p>User{this.state.user.address.street}</p>
           <p>User{this.state.user.address.city}</p>
           <p>User{this.state.user.address.zipcode}</p>
           <p>User{this.state.user.address.suite}</p>
          <Link to="/">Go to All Users </Link>
            </div>
          
        ):
        (<h1>No suere</h1>)
    }
}
