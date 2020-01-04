import React from 'react'

function MeterReading(props){
    let {unitPrice,unitsConsumed} = props.readings
    return(
        <React.Fragment>
            <span>Unit Price :</span>{unitPrice}<br/>
            <span>Total Units consumed :</span>{unitsConsumed}<br/>
            <span>Total Expense</span>💸💲{unitPrice * unitsConsumed}
        </React.Fragment>
    )

} 

export default MeterReading