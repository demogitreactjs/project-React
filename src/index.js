import React, {useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './site1/App';
import {createStore} from 'react-redux'
import redux from 'redux'





function Test(){
    const inputFocus=useRef(null)
    
   useEffect(()=>{
    inputFocus.current.focus()
   })
    return(
      <div style={{
        width:'200px',height:'200px', border:'1px solid black'
      }}>
        <input ref={inputFocus} type="text"  />
      </div>
    )
  }
//actions(objs) or action creaters , reducers(func that modify state based on actions) , dispatchers(which dispaches actions to the reducers)
function incerement(){
    return {type:"INCREMENT"}
}
function decrement(){
    return {type:"DERCREMENT"}
}

initialaState={
    count:10;
}

function countReducer(state=initialaState, action){
   if(action.type=='INCREMENT'){
       return {...state, count:state.count+1}
   }
   if(action.type=='DECREMENT'){
       return {...state, count:state.count-1}
   }
   return state;
}

const store=createStore(counstReducer)



  ReactDOM.render(
    // <BrowserRouter>
    //    <App/>
    // </BrowserRouter>
    <Test />

,document.getElementById('root'));