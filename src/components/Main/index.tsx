import React from "react";
import { motion } from "framer-motion";
import "./style.scss";

import { FaExchangeAlt } from "react-icons/fa";
const index = () => {
 const [inputTemperatura, setInputTemperatura] = React.useState<number>(0);
 const [temperatura, setTemperatura] = React.useState(0);

 function pegarValueInput(e: React.ChangeEvent<HTMLInputElement>) {
  setInputTemperatura(Number(e.target.value));
  setTemperatura(0);
 }

 function calcularTemperatura() {
  let valueOption = document.getElementById("sel") as HTMLOptionElement;
  if (valueOption.value === "cel") {
   setTemperatura(Number((inputTemperatura * 9) / 5 + 32));
  } else if (valueOption.value === "fah") {
   setTemperatura(Number(((inputTemperatura - 32) * 5) / 9));
  }
  setInputTemperatura(0);
 }

 return (
  <main>
   <h1>Convert Temp</h1>
   <div className="m-container">
    <div className="m-leftSide">
     <select id="sel">
      <option value="cel">Celsius para Fahrenheit</option>
      <option value="fah">Fahrenheit para Celsius</option>
     </select>
     <input
      type="number"
      placeholder="Ex: 40"
      value={inputTemperatura}
      onChange={pegarValueInput}
     />
     <button onClick={calcularTemperatura}>Calcular</button>
    </div>
    <h1 className="m-transform">
     <FaExchangeAlt />
    </h1>
    {temperatura !== 0 && (
     <motion.div
      initial={{ scale: 0.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="m-rightSide"
     >
      <motion.h1
       initial={{ scale: 0.2, opacity: 0 }}
       animate={{ scale: 1, opacity: 1 }}
       transition={{ delay: 0.4, duration: 1.4 }}
      >
       {temperatura !== 0 ? temperatura.toFixed(2) : ""}
      </motion.h1>
     </motion.div>
    )}
   </div>
  </main>
 );
};

export default index;
