import React from 'react'

export default function Content() {

    return (
        <div style={{display:'flex', height:'500px'}}>
           <div style={{display:'flex', justifyContent:'center', alignItems:'center',background:'lightgreen', flex:'3', margin:'20px'}}>
               <h3>Aside</h3>
           </div>
           <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-evenly', background:'orange', flex:'5',margin:'20px'}}>
               <div style={{flex:'1', background:'lightgray', width:'150px', height:'150px', margin:'5px' , textAlign:'center'}}>img1</div>
               <div style={{flex:'1',background:'lightgray',width:'150px', height:'150px', margin:'5px',textAlign:'center'}}>img2</div>
               <div style={{flex:'1',background:'lightgray',width:'150px', height:'150px', margin:'5px',textAlign:'center'}}>img3</div>
            </div>
        </div>
    )
}
