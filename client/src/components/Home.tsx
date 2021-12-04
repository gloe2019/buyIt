import React, { useEffect } from "react";

import Page from "../interfaces/page";
import Products from "./Products";

const Home: React.FunctionComponent<Page> = (props) => {
  useEffect(() => {
    console.log(`Loading ${props.name}`);
    console.log(props)
  }, []);

  return (
    <div>
      Home page
      <Products name="Products" state={props.state} />
    </div>
  );
};

export default Home;
