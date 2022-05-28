import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const MakeAdmin = () => {
  const {data: users, isLoading, refetch} = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
        method: 'GET',
        headers: {
            'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then((res) => res.json())
  );
  return (
    <div>
    <h2 className="text-xl text-center mb-6">Users: {users?.length}</h2>
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
              users?.map((user, index)=> <UserRow key={user._id} user={user} index={index} refetch={refetch}></UserRow>)
          }
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default MakeAdmin;
