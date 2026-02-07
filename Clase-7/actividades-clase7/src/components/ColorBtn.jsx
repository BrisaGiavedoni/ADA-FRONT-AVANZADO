import React from "react";

const ColorBtn = () => {
  const [color, setColor] = React.useState("blue");
  return (
    //     Hacer un botón que al hacer clic cambie el color de un texto (usar
    // estado booleano).
    <div>
      <h1 style={{ color: color }}>Texto de ejemplo</h1>
      <button
        onClick={() => {
          if (color === "blue") {
            setColor("red");
          } else {
            setColor("blue");
          }
        }}
      >
        Cambiar color
      </button>
    </div>
  );
};

export default ColorBtn;
