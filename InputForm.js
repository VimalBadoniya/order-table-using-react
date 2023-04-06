import React, { useRef } from "react";

let k = 100;
const InputForm = (props) => {
  const getId = () => {
    k += 1;
    return k;
  };

  const tableRef = useRef("");
  const nameRef = useRef("");
  const priceRef = useRef("");
  const submitHandler = (event) => {
    event.preventDefault();
    let newData = {
      Table: tableRef.current.value,
      Name: nameRef.current.value,
      Price: priceRef.current.value,
      Id: getId(),
    };
    props.onSubmit(newData);
    localStorage.setItem(`${newData.Id}`, `${JSON.stringify(newData)}`);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Dish Name</label>
          <input type="text" id="name" ref={nameRef} required></input>
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input type="number" id="number" ref={priceRef} required></input>
        </div>

        <div>
          <label htmlFor="selecttable">Select Table</label>
          <select id="selecttable" ref={tableRef} required>
            <option value="">Select</option>
            <option value="Table-1">Table-1</option>
            <option value="Table-2">Table-2</option>
            <option value="Table-3">Table-3</option>
          </select>
        </div>

        <div>
          <button type="submit">Add Order</button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
