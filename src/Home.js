import React from 'react'

export default function Home(props) {
    // setInterval(()=>{
    //     props.history.push('/contact')
    // }, 3000)
    

    return (
        <div style={{background:'pink',height:'500px', textAlign:'center'}}>
            <h1>Home</h1>
            <button onClick={
                ()=>props.history.push('/contact')
            }>Goto Contact</button>
        </div>
    )
}
