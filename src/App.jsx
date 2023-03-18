import { useState } from "react";

import "./App.css";
import StockForm from "./components/StockForm/StockForm";

function App() {
  const [tableData, setTableData] = useState([]);

  const addData = (obj) => {
    setTableData((prev) => [...prev, obj]);
  };

  return (
    <div className="app">
      <StockForm className="stock-form" handleSubmit={addData} />
    </div>
  );
}

export default App;
