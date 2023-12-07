
import React,{ useState } from 'react'


export default function Input () {
    const [data, setData]=useState('');

    const onChengeDeta=(event)=>{
        setData(event.target.value);
    }

    const addNewData=()=>{

      const newData = {
        text:data,
        completed:false
      }
      console.log(newData)

    }

  return (
    <div>
      <center>
        <input type='text' placeholder='inter tha data' onChange={onChengeDeta}/>
        <br/>
        <button onClick={addNewData}>click</button>
        </center>
    </div>
  )
}
