import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ManageRow from "./ManageRow";
import ProductModal from "./ProductModal";

const ManageAllProduct = () => {
  const [deleteOrder, setDeleteOrder] = useState(null);
  const {
    data: adminPro,
    isLoading,
    refetch,
  } = useQuery("managepro", () =>
    fetch("https://hidden-reef-48781.herokuapp.com/product").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return (
      <div className="mb-14">
        <Loading></Loading>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-xl text-center mb-6">
        All Products: {adminPro?.length}
      </h2>
      <div class="overflow-x-auto">
        <table class="table w-full mb-12">
          <thead>
            <tr>
              <th></th>
              <th>product id</th>
              <th>Product Name</th>
              <th>Available quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {adminPro?.map((adminPr, index) => (
              <ManageRow
                key={adminPr._id}
                adminPr={adminPr}
                index={index}
                setDeleteOrder={setDeleteOrder}
              ></ManageRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleteOrder && (
        <ProductModal
          deleteOrder={deleteOrder}
          setDeleteOrder={setDeleteOrder}
          refetch={refetch}
        ></ProductModal>
      )}
    </div>
  );
};

export default ManageAllProduct;
