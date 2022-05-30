import React from "react";

const ManageRow = ({adminPr, index, setDeleteOrder}) => {
    const {name, _id, avail_q} = adminPr;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{avail_q}</td>
      <td>
        <div>
          <label
            onClick={() => setDeleteOrder(adminPr)}
            for="product-del"
            class="btn btn-error"
          >
            Delete
          </label>
        </div>
      </td>
    </tr>
  );
};

export default ManageRow;
