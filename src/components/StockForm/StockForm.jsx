import { useState } from "react";
import "./StockForm.css";

const StockForm = (props) => {
  const [formValues, setFormValues] = useState({
    itemCode: "",
    itemName: "",
    date: "",
    qty: "",
    stockType: "stock-out",
    details: "",
    remark: "",
  });

  const normalSetValue = (target) => {
    setFormValues((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  };

  const handleChange = (e) => {
    const target = e.target;
    normalSetValue(target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.handleSubmit;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Stock-In / Stock-Out</h2>
      <label htmlFor="item-code">Item: </label>
      <input
        type="text"
        name="itemCode"
        id="item-code"
        value={formValues.itemCode}
        onChange={handleChange}
      />

      <label htmlFor="item-name">Item: </label>
      <input
        type="text"
        name="itemName"
        id="item-name"
        value={formValues.itemName}
        onChange={handleChange}
      />

      <label htmlFor="item-qty">Item Qty: </label>
      <input
        type="number"
        name="qty"
        id="item-qty"
        value={formValues.qty}
        onChange={handleChange}
      />

      <div id="type-radios">
        <label htmlFor="stock-in">Stock In </label>
        <input
          type="radio"
          name="stockType"
          id="stock-in"
          value="stock-in"
          checked={formValues.stockType == "stock-in"}
          onChange={handleChange}
        />

        <label htmlFor="stock-out">Stock Out </label>
        <input
          type="radio"
          name="stockType"
          id="stock-out"
          value="stock-out"
          checked={formValues.stockType == "stock-out"}
          onChange={handleChange}
        />
      </div>

      <label htmlFor="details">Details: </label>
      <input
        type="text"
        name="details"
        id="details"
        value={formValues.details}
        list={formValues.stockType == "stock-in" ? "inList" : "outList"}
        onChange={handleChange}
      />
      <datalist id="inList">
        <option value="New Item Arrive"></option>
        <option value="Stock from Warehouse"></option>
        <option value="Sale Return"></option>
      </datalist>
      <datalist id="outList">
        <option value="Broke | Expire"></option>
        <option value="Stock to Warehouse"></option>
        <option value="Sale"></option>
      </datalist>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default StockForm;
