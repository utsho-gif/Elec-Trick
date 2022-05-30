import React from "react";
import { toast } from "react-toastify";

const ProductModal = ({ deleteOrder, setDeleteOrder, refetch }) => {
  const { _id } = deleteOrder;
  const handleDelete = () => {
    fetch(`https://hidden-reef-48781.herokuapp.com/product/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success("Deleted Successfully");
          refetch();
          setDeleteOrder(null);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="product-del" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you confirm to delete?
          </h3>
          <p class="py-4">Order will be remove permanently!</p>
          <div class="modal-action">
            <button onClick={() => handleDelete(_id)} class="btn btn-error">
              Remove
            </button>
            <label for="product-del" class="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
