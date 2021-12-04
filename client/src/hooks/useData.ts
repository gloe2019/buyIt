import axios from "axios";
import { useState, useEffect } from "react";
import IUser from "../interfaces/user";

const useData = () => {
  // const [user, setUser] = useState<IUser | null>(null);
  // const [token, setToken] = useState<string | null>(null);

  const [state, setState] = useState({
    user: "",
    token: "",
    products: [{}],
  });

  useEffect(() => {
    axios.get("http://localhost:7000/api/products").then((res) => {
      setState((prev) => ({
        ...prev,
        products: res.data,
      }));
    });
  }, []);

  // const navigate = useNavigate();

  const register = (userObj: {}) => {
    axios
      .post("http://localhost:7000/api/users/register", userObj)
      .then((res) => console.log(res.data));
  };

  const login = (userObj: {}) => {
    axios.post("http://localhost:7000/api/users/login", userObj).then((res) => {
      console.log(res.data);
      // setUser(res.data.user);
      // setToken(res.data.token);
      setState((prev) => ({
        ...prev,
        user: res.data.user,
        token: res.data.token,
      }));
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);
    });
  };
  return {
    register,
    login,
    state,
    setState,
  };
};

export default useData;
