import React, { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import AllTable from "./components/AllTable";
//import DataContext from "./context-data/contextData";
//import TableDetails from "./components/TableDetails";

// <DataContext.Provider>
//   <App></App>
//   <TableDetails></TableDetails>
// </DataContext.Provider>; // here we tried using context to pass data , but we realise that if we use data in context , then when we
//                         //add new data state is not updated to component did not re render. So here we have rendering issue

function App() {
  // const ctx = useContext(DataContext);

  const [data, setData] = useState([]);
  // { Table: "Table-1", Name: "Chicken", Price: 500 },
  // { Table: "Table-2", Name: "Biryani", Price: 300 },
  // { Table: "Table-3", Name: "Egg", Price: 400 },
  // { Table: "Table-2", Name: "Biryani rice", Price: 100 },
  // ]);

  const newDataHandler = (newdata) => {
    //ctx.data.push(newdata);
    setData((oldData) => {
      return [newdata, ...oldData];
    });
  };

  const deleteData = (id) => {
    setData(
      data.filter((row) => {
        return row.Id !== id;
      })
    );
    localStorage.removeItem(id);
  };

  return (
    <div className="App">
      <InputForm onSubmit={newDataHandler}></InputForm>
      <AllTable data={data} onDelete={deleteData}></AllTable>
    </div>
  );
}

export default App;
