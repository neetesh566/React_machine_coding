import { useState } from "react";
const DropDown = () => {
  const [selectedoption, setselectedoption] = useState("");
  const fruits = [
    "Apple 🍎",
    "Banana 🍌",
    "Cherry 🍒",
    "Mango 🥭",
    "Orange 🍊",
  ];

  const handlechange = (event) => {
    setselectedoption(event.target.value);
  };
  return (
    <div className="dropdown">
      <h1>Simple Dropdown App</h1>

      <select className="select" value={selectedoption} onChange={handlechange}>
        <option value="">--Select a Fruit--</option>
        {fruits.map((fruit, index) => (
          <option key={index} value={fruit}>
            {fruit}
          </option>
        ))}
      </select>

      {selectedoption && (
        <h2 className="selected-display">You selected : {selectedoption}</h2>
      )}
    </div>
  );
};

export default DropDown;
