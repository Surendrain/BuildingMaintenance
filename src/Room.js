import React from 'react'
import MeterReading from './MeterReading';

function Room(props){
    return(
        <React.Fragment>
            <span>Room No :</span> {props.roomNo}<br/>
            <span>Tenant Name :</span> {props.tenantName}<br/>
            <MeterReading readings={props.readings}/><hr/>
        </React.Fragment>
    )

} 

export default Room