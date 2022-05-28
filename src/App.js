import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./Pages/Login/SignUp";
import MakeOrder from "./Pages/MakeOrder/MakeOrder";
import RequireAuth from "./Pages/Login/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddReview from "./Pages/Dashboard/AddReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MyOrder from "./Pages/Dashboard/MyOrder";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import ManageOrder from "./Pages/Dashboard/ManageOrder";
import AddProduct from "./Pages/Dashboard/AddProduct";
import Allproduct from "./Pages/All Product/Allproduct";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/allproduct" element={<Allproduct></Allproduct>}></Route>
        <Route
          path="/makeorder/:id"
          element={
            <RequireAuth>
              <MakeOrder></MakeOrder>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route path="myorder" element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="admin"
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="allorder"
            element={
              <RequireAdmin>
                <ManageOrder></ManageOrder>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addproduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
