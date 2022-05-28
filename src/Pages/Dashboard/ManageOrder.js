import React, { useEffect, useState } from "react";
import AdminModal from "./AdminModal";
import AllOrderRow from "./AllOrderRow";

const ManageOrder = () => {
  const [purchases, setPuchases] = useState([]);
  const [deleteOrder, setDeleteOrder] = useState(null);
  const [isReload, setIsReload] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
          setPuchases(data)});
  }, [!isReload]);
  return (
    <div>
      <h2 className="text-xl text-center mb-6">All order: {purchases?.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>email</th>
              <th>Product Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {purchases?.map((purchase, index) => (
              <AllOrderRow
                key={purchase._id}
                purchase={purchase}
                index={index}
                setDeleteOrder={setDeleteOrder}
              ></AllOrderRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleteOrder && <AdminModal deleteOrder={deleteOrder} setDeleteOrder={setDeleteOrder} setIsReload={setIsReload} isReload={isReload}></AdminModal>} 
    </div>
  );
};

export default ManageOrder;
