import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, index, refetch}) => {
    const {email, role, name} = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
          method: "PUT",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
          },
        })
          .then((res) => {
            if (res.status === 403) {
              toast.error("Failed to made an admin");
            }
            return res.json();
          })
          .then((data) => {
            if (data.modifiedCount > 0) {
              refetch();
              toast.success("Succssfully made an admin");
            }
          });
      };
    return (
        <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-success btn-xs">
            Make Admin
          </button>
        )}
      </td>
    </tr>
    );
};

export default UserRow;