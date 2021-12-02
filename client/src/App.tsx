import { BrowserRouter, Route, } from "react-router-dom"
import { Routes } from "react-router-dom"
import routes from "./config/routes"
// Routing should be done from here --> connect to backend!

const App: React.FunctionComponent<{}> = props => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component name={route.name}/>}
              />
            )
          })}
          {/* <Route path="/" element={<Home name="Home"/>} />
          <Route path="/about" element={<About name="About"/>} /> */}
      </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App