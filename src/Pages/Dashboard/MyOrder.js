import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import ConfirmModal from "./ConfirmModal";
import OrderRow from "./OrderRow";

const MyOrder = () => {
  const [deleteOrder, setDeleteOrder] = useState(null);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const email = user?.email;
  const { data: orders, isLoading, refetch } = useQuery("orders", () =>
    fetch(`http://localhost:5000/order?email=${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        navigate("/");
      }
      return res.json();
    })
  );
  if (isLoading) {
    return (
      <div className="my-10">
        <Loading></Loading>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-xl text-center mb-7">My Orders: {orders?.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>PRODUCT name</th>
              <th>Quantity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              orders?.map((order, index) => <OrderRow key={order._id} order={order} index={index} setDeleteOrder={setDeleteOrder}></OrderRow>)
            }
          </tbody>
        </table>
      </div>
          {deleteOrder && <ConfirmModal deleteOrder={deleteOrder} setDeleteOrder={setDeleteOrder} refetch={refetch}></ConfirmModal>}   
    </div>
  );
};

export default MyOrder;
