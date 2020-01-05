import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import Room from './Room';
import data from './data';


class App extends React.Component{
  render(){
    return(
     <React.Fragment>
       <div>
       <GiHamburgerMenu className='hamburger'/>
       <h1 className="app-name">#992 Building Maintenance</h1>
       </div>
       {data.map((item,i) => <Room style={{  border: '3px solid gray'}} key= {i} roomNo= {item.No} tenantName={item.tenantName} readings={item.readings}/>)}
     </React.Fragment>
    )
  }
}


export default App;
