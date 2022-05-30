import React from "react";
import { toast } from "react-toastify";

const ConfirmModal = ({ deleteOrder, setDeleteOrder, refetch }) => {
  const { _id } = deleteOrder;
  const handleDelete = () => {
    fetch(`https://hidden-reef-48781.herokuapp.com/order/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Deleted Successfully");
          setDeleteOrder(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="confirm" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you confirm to delete?
          </h3>
          <p class="py-4">Order will be remove permanently!</p>
          <div class="modal-action">
            <button onClick={() => handleDelete()} class="btn btn-error">
              Remove
            </button>
            <label for="confirm" class="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
