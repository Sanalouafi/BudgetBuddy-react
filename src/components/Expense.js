import React from 'react';
const Expense =() =>{
    return(
        <tr>
        <td style={{ textAlign: "center" }}>1</td>
        <td>Rent</td>
        <td>Rent</td>
        <td>1000</td>
        <td >
          <button className="mini ui blue button">Edit</button>

          <button className="mini ui red button">Delete</button>
        </td>
      </tr>
    )
}

export default Expense;