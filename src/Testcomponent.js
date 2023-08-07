import React, { useState } from "react";

export default function Testcomponent() {

    const [count, setCount] = useState(0);
    

    // const increase = (name) => {
    //     setCount(count + 1);
    //     console.log(count);
    // }

    const increase = (name) => {
        const a = 4;
        const b = 10;
        // setCount(a+b);
        
        if(count<9){
            setCount(count + 1);
        }else{
            setCount('Done');
        }
    }

  return (
    <div>
        <div style={{ margin: '50px' }}>
            
            <h2>{count}</h2>
            <button  onClick={() => increase(count)}>Add</button>
        </div>
    </div>
  )
}
