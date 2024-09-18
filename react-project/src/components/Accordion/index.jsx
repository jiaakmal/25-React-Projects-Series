import React, { useState } from "react";
import DATA from "./data";
import './style.css'
export default function Accordion() {

    const [selected , setSelected] = useState(null)
     function handleClick(currentId) {
        setSelected(currentId === selected ? null : currentId)
        console.log(selected)
    }

    const [enableMultiSelection , setEnableMultiSelection] = useState(false);
    const [multiple , setMultiple] = useState([]);
    function handleMultiSelection(currentId){
      let copyMultiple = [...multiple]
      const findIndexOfCurrentId = copyMultiple.indexOf(currentId)
      console.log(findIndexOfCurrentId)
      if(findIndexOfCurrentId === -1){
        copyMultiple.push(currentId)
        console.log(copyMultiple)
      } else {
        copyMultiple.splice(findIndexOfCurrentId, 1)
        console.log(copyMultiple)
      }
      setMultiple(copyMultiple)
    }


  return (
    <div className="wrapper">
        <button onClick={ ()=> setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
      <div className="accordion">
        {DATA && DATA.length > 0 ? (
          DATA.map((item) => (
            <div className="item" key={item.id}>
              <div onClick={enableMultiSelection ? 
                ()=>handleMultiSelection(item.id) : 
                ()=> handleClick(item.id) } 
                className="title">
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {
                enableMultiSelection ? multiple.includes(item.id)&&<div className="content">{item.answer}</div>
                : selected === item.id && <div className="content">{item.answer}</div>
                  
              }
              {/* {selected === item.id ? 
               <div className="content">{item.answer}</div>
               : null
            } */}
            </div>
          ))
        ) : (
          <div>No data available.</div>
        )}
      </div>
    </div>
  );
}
