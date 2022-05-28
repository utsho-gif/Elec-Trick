import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin, onlyUSer] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-purple-600 text-2xl text-center font-bold mt-10">
          Welcome to your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-60 bg-white lg:bg-transparent text-base-content">
          {onlyUSer && (
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
          )}
          {onlyUSer && (
            <li>
              <Link to="/dashboard/review">Add Review</Link>
            </li>
          )}
          <li>
            <Link to="/dashboard/profile">Profile</Link>
          </li>
          {admin && (
            <li>
              <Link to="/dashboard/admin">Make Admin</Link>
            </li>
          )}
          <li>
            <Link to="/dashboard/adddoctor">Add Doctor</Link>
          </li>
          <li>
            <Link to="/dashboard/managedoctors">Manage Doctor</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
