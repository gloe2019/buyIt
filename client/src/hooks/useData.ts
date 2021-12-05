import axios from "axios";
import { useState, useEffect } from "react";

const useData = () => {
  // const [user, setUser] = useState<IUser | null>(null);
  // const [token, setToken] = useState<string | null>(null);

  const [state, setState] = useState({
    user: "",
    token: "",
    products: [{}],
    cart: {},
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

  const logout = () => {
    localStorage.clear();
    setState((prev) => ({
      ...prev,
      user: "",
      token: "",
    }));
  };

  const addToCart = (productObj: {}) => {
    let user = localStorage.getItem("user");
    if (user) {
      let parsedUser = JSON.parse(user);
      let id = parsedUser.id;
      console.log(productObj, id);
      axios
        .post(`http://localhost:7000/api/shoppingCart/${id}`, productObj)
        .then((res) => {
          console.log(res.data);
        });
    }
  };

  const getCart = () => {
    let user = localStorage.getItem("user");
    if (user) {
      let parsedUser = JSON.parse(user);
      let id = parsedUser.id;
      axios.get(`http://localhost:7000/api/shoppingCart/${id}`).then((res) => {
        console.log(res.data);
        setState((prev) => ({
          ...prev,
          cart: res.data,
        }));
      });
    }
  };
  return {
    register,
    login,
    logout,
    addToCart,
    getCart,
    state,
    setState,
  };
};

export default useData;
