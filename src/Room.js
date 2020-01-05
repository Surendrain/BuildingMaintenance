import React from 'react'
import MeterReading from './MeterReading';
import './index.css'


function Room(props){
    return(
        <div className='meter' style={{  border: '3px solid green', padding:'20px'}} >
            <span>Room No : {props.roomNo}</span> 
            <span>Tenant Name : {props.tenantName}</span> 
            <MeterReading readings={props.readings}/>
        </div>
    )

} 

export default Room