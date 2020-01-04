import React from "react"

class ButtonComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"Vijay"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){

        this.setState((prev)=>{
            let msk =(prev.name==="Vijay")?"Surendra":"Vijay";
            return {
                name:msk
            }
        })
    }

    render() {
        return (
        <div>
            <h1>{this.state.name}</h1>
            <button onClick={this.handleClick}>Click Me</button>
            </div>
            );
    }
}

export default ButtonComponent;