import { useState } from 'react'
import { Card } from "./components/Card"
import { Signin } from './components/Singin'
import { SetDetails } from './components/SetDetails'
function App() {
  const initalProps = {
    username: "Sourabh",
    description: "A Student in 100xDevs Cohort2.0",
    interests: ["Competitive-Programming", "Web-Dev", "Netflix and chill"],
    linkedIn: "https://shorturl.at/rwFO6",
    gitHub: "https://github.com/Curious-Goblin"
  }

  const [props, setProps] = useState(initalProps)
  // setProps(props)
  function updateState(newState) {
    setProps(newState);
  }
  return (
    <div>
      <Signin updateState={updateState}></Signin>
      <SetDetails updateState={updateState}></SetDetails>
      <Card {...props}></Card>
    </div>
  )
}

export default App
