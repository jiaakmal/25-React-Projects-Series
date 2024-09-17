import React, { useState } from "react";
import DATA from "./data";
import './style.css'
export default function Accordion() {

    const [selected , setSelected] = useState(null)
     function handleClick(currentId) {
        setSelected(currentId === selected ? null : currentId)
        console.log(selected)
    }
  return (
    <div className="wrapper">
      <div className="accordion">
        {DATA && DATA.length > 0 ? (
          DATA.map((item) => (
            <div className="item" key={item.id}>
              <div onClick={()=> handleClick(item.id) } className="title">
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {selected === item.id ? 
               <div className="content">{item.answer}</div>
               : null
            }
            </div>
          ))
        ) : (
          <div>No data available.</div>
        )}
      </div>
    </div>
  );
}
