import React, { useEffect } from "react";

import Page from "../interfaces/page";
import Navbar from "./Navbar";
import Products from "./Products";

const Home: React.FunctionComponent<Page> = (props) => {
  useEffect(() => {
    console.log(`Loading ${props.name}`);
    console.log(props)
  }, []);

  return (
    <div>
      <Navbar />
      Home page
      <Products name="Products" state={props.state} />
    </div>
  );
};

export default Home;
