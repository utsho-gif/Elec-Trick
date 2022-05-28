import React from "react";

const AllOrderRow = ({ purchase, index, setDeleteOrder }) => {
  const {productName, email} = purchase;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>{productName}</td>
      <td>
      <div>
          <label onClick={() => setDeleteOrder(purchase)} for="confirm-del" class="btn btn-error">
            Delete
          </label>
        </div>
      </td>
    </tr>
  );
};

export default AllOrderRow;
