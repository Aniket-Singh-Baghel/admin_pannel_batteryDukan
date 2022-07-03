import React from 'react'
import value from "../../../../../src/bulk.json"

function ShowAll() {
    
    // temp = ``
    const list =  value.map((i,index) => {
        return (
          <div>
            <p>${i.primaryName}</p>
          </div>
        );
    });


  return (
    <div>
        {list}
    </div>
  )
}

export default ShowAll