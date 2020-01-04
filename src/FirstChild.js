import React from 'react'

function FirstChild(props){
    const myName = props.name;
    const numbers = [1, 2, 3, 4, 5,5];
    const listItems = numbers.map((number,i) =>
  <li key={i} id={i}>{number}</li>
);
    return(
        <div>
            <h3>FirstChild Component -- {myName}</h3>
            <ul>
            {listItems}
            </ul>
        </div>
    )

}

export default FirstChild;