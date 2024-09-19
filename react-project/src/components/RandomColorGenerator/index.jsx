import React, { useEffect, useState } from "react";

export default function RandomColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let randomHexColor = "#";
    for (let i = 0; i < 6; i++) {
      console.log(randomHexColor);
      randomHexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(randomHexColor);
  }
  function handleCreateRandomRgbColor() {
    const randomRgbColor = `rgb(${randomColorUtility(
      256
    )}, ${randomColorUtility(256)}, ${randomColorUtility(256)})`;
    setColor(randomRgbColor);
  }

  useEffect( ()=>{
    if(typeOfColor === "hex") handleCreateRandomHexColor()
      else handleCreateRandomRgbColor()
  } , [typeOfColor])

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: color,
        color: "white",
      }}
     >
      <h1>Random Color Generator</h1>
      <button onClick={()=> setTypeOfColor('hex')}>Create HEX Color</button>
      <button onClick={()=> setTypeOfColor('rgb')} >Create RGB Color</button>
      <button
      onClick={
        typeOfColor === "hex"
          ? handleCreateRandomHexColor
          : handleCreateRandomRgbColor
      }
      >Generate Random Color</button>
   
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "60px",
      backgroundColor: "black",
      color: "white",
  
    }}
    >Random Color: {color}</div>

</div>
    
  );
}
