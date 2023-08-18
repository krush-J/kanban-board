import React from "react";

const Avtar = ({name, available}) => {
  
  // return random color
  const getRandomColor = () => {
    const backgroundColors = [
      "#F44336",
      "#E91E63",
      "#9C27B0",
      "#673AB7",
      "#3F51B5",
      "#2196F3",
      "#03A9F4",
      "#00BCD4",
      "#009688",
      "#4CAF50",
    ];
    // Select a random color from the array
    const randomIndex = Math.floor(Math.random() * backgroundColors.length);
    return backgroundColors[randomIndex];
  };


  return (
    <div style={{
        background:getRandomColor(),
        width:"30px",
        height:"30px",
        borderRadius:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        position:"relative",
    }}>
        <span style={{
            color:"white",
        }}>
            {name[0]}
        </span>
        <span style={{            
            height:"9px",
            width:"9px",
            background:`${available?"green":"#d4d4d4"}`,
            border:"2px solid white",
            borderRadius:"100%",
            position:"absolute",
            right:"0",
            top:"23px"
        }}></span>
    </div>
  );
};

export default Avtar;
