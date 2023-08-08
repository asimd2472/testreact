import React, { useState, useEffect } from "react";

export default function Testcomponent() {

    const [count, setCount] = useState(0);
    

    // const increase = (name) => {
    //     setCount(count + 1);
    //     console.log(count);
    // }

    useEffect(() => {
        var item_value = sessionStorage.getItem("item_key");
        if(item_value){
            setCount(item_value);
        }else{
            setCount(0);
        }
        
    }, []);

    const increase = (name) => {
        if(count<9){
            var totalCount = (count + 1);
            setCount(totalCount);
            sessionStorage.setItem("item_key", totalCount);
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
