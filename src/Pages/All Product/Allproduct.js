import React, { useEffect, useState } from "react";
import Produ from "./Produ";

const Allproduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
          {products?.map((produ) => (
            <Produ key={produ._id} produ={produ}></Produ>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allproduct;
