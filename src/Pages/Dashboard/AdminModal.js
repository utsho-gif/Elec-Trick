import React from 'react';
import { toast } from 'react-toastify';

const AdminModal = ({deleteOrder, setDeleteOrder, setIsReload, isReload}) => {
    const {_id} = deleteOrder;
    const handleDelete = () => {
        fetch(`https://hidden-reef-48781.herokuapp.com/purchase/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount) {
                toast.success('Deleted Successfully');
                setIsReload(!isReload);
                setDeleteOrder(null);
              }
        })
    }
    return (
        <div>
        <input type="checkbox" id="confirm-del" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg text-red-500">
              Are you confirm to delete?
            </h3>
            <p class="py-4">
              Order will be remove permanently!
            </p>
            <div class="modal-action">
            <button
            onClick={() => handleDelete(_id)}
            class="btn btn-error"
          >
            Remove
          </button>
              <label for="confirm-del" class="btn">
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AdminModal;