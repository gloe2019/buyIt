import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import routes from "./config/routes";
import useData from "./hooks/useData";
import Home from "./components/Home";
// import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
// Routing should be done from here --> connect to backend!

const App = () => {
  const { register, login, state, setState } = useData()
  useEffect(() => {
    let _user = localStorage.getItem('user')
    let _token = localStorage.getItem('token')
    if (_user && _token) {
      setState({
        ...state,
        user: _user,
        token: _token
      })
    }

  }, [])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component name={route.name}
                  properties={{ register, login, state }}
                />}
              />
            );
          })} */}
          <Route path="/" element={<Home name="Home" state={state} />} />
          <Route path="/register" element={<Register name="Register" function={register} />} />
          <Route path="/login" element={<Login name="Login" function={login} state={state} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
