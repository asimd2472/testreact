import React from 'react';
import JsonData from './data.json';

export default function Table() {

    const DisplayData=JsonData.map((info, keys)=>{
            return(
                <tr key={keys+1} id={Math.random()}>
                    <td>{keys+1}</td>
                    <td>{info.name}</td>
                    <td>{info.city}</td>
                </tr>
            )
        }
    )
        
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Sr.NO</th>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
}
