import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IUser from "../interfaces/user";

const useData = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // const navigate = useNavigate();

  const register = (userObj: {}) => {
    axios
      .post("http://localhost:7000/api/users/register", userObj)
      .then((res) => console.log(res.data));
    // navigate("/login");
  };

  const login = (userObj: {}) => {
    axios.post("http://localhost:7000/api/users/login", userObj).then((res) => {
      console.log(res.data);
      setUser(res.data.user);
      setToken(res.data.token);

      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      // navigate("/");
    });
  };
  return {
    register,
    login,
    user,
    token,
  };
};

export default useData;
