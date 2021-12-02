import React, {useEffect} from 'react'

import Page from "../interfaces/page"
const Home: React.FunctionComponent<Page> = props => {
  useEffect(() => {
    console.log(`Loading ${props.name}`)
  }, [props.name])
  return(<p>Home page</p>)
}

export default Home