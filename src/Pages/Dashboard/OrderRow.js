import React from "react";

const OrderRow = ({ order, index, setDeleteOrder }) => {
    const {productName, quantity} = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>
        <div>
          <label onClick={() => setDeleteOrder(order)} for="confirm" class="btn btn-error">
            Cancel
          </label>
        </div>
      </td>
    </tr>
  );
};

export default OrderRow;
