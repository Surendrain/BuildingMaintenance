import React from 'react'

function MeterReading(props){
    let {unitPrice,unitsConsumed} = props.readings
    return(
        <React.Fragment>
            <span>Unit Price : {unitPrice}</span>
            <span>Total Units consumed : {unitsConsumed}</span>
            <span>Total Expense : {unitPrice * unitsConsumed}</span>
        </React.Fragment>
    )

} 

export default MeterReading