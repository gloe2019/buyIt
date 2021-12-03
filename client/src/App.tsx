import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import routes from "./config/routes";
import useData from "./hooks/useData";

// Routing should be done from here --> connect to backend!

const App: React.FunctionComponent<{}> = (props) => {
  const { register, login, user, token } = useData()

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component name={route.name}
                  properties={{ register, login, user, token }}
                />}
              />
            );
          })}
          {/* <Route path="/" element={<Home name="Home"/>} />
          <Route path="/about" element={<About name="About"/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
