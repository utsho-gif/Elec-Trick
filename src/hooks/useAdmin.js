import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [onlyUSer, setOnlyUser] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;
    fetch(`https://hidden-reef-48781.herokuapp.com/admin/${email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.admin) {
          setAdmin(data.admin);
          setAdminLoading(false);
        } else {
          setOnlyUser(!data.admin);
        }
      });
  }, [user]);
  return [admin, adminLoading, onlyUSer];
};

export default useAdmin;
