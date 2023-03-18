import { useState } from "react";

const StockForm = () => {
  const formValues = useState({
    itemName: "",
    date: "",
    qty: "",
    type: "",
    details: "",
    remark: "",
  });

  return (
    <form>
      <label htmlFor="item-name">
        Item:{" "}
        <input
          type="text"
          name="itemName"
          id="item-name"
          value={formValues.itemName}
        />
      </label>
      <label htmlFor="item-qty">
        Item Qty: <input type="number" name="item-qty" id="item-qty" />
      </label>
    </form>
  );
};

export default StockForm;
