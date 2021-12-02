import React, { useEffect } from 'react'
import Page from '../interfaces/page'

const About: React.FunctionComponent<Page> = props => {
  useEffect(() => {
    console.log(`Loading ${props.name}`)
  }, [ props.name ])
  
  return (<p>About Page!</p>)
}

export default About