import React from "react";
//import DataContext from "../context-data/contextData";

const TableDetails = (props) => {
  //const ctx = useContext(DataContext);

  const deleteHandler = (id) => {
    props.onDelete(id);
  };
  return (
    <div>
      <h3>{props.table}</h3>
      <table id={props.table}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Dish</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((Order) => {
            if (props.table === Order.Table) {
              return (
                <tr key={Order.Id}>
                  <td>{Order.Id}</td>
                  <td>{Order.Name}</td>
                  <td>{Order.Price}</td>
                  <td>
                    <button
                      onClick={() => {
                        deleteHandler(Order.Id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableDetails;
