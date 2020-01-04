import React from 'react'
import Room from './Room';
import data from './data';

class App extends React.Component{
  render(){
    return(
     <React.Fragment>
       {data.map((item,i) => <Room key= {i} roomNo= {item.No} tenantName={item.tenantName} readings={item.readings}/>)}
     </React.Fragment>
    )
  }
}


export default App;
