import React from 'react'
import { SignUp } from './SignUp'
import { Home } from './Home'
import { MainContent } from './MainContent'

function App() {
  const [showSignUp, setShowSignUp] = React.useState(false)
  const [showHome, setShowHome] = React.useState(false)
  const [showMainContent, setShowMainContent] = React.useState(true)

  const DisplaySignUp = () => setShowSignUp(prev => !prev)
  const DisplayHome = () => setShowHome(prev => !prev)
  const DisplayMainContent = () => setShowMainContent(prev => !prev)

  React.useEffect(() => {
    DisplayHome()
  }, [showSignUp])

  React.useEffect(() => {
    DisplayMainContent()
  }, [showHome])


  return (
    <div className='grid'>
      {showSignUp && <SignUp open={showSignUp} handleClick={DisplaySignUp}/>}
      {showHome && <Home handleClick={DisplaySignUp}/>}
      {showMainContent && <MainContent/>}
    </div>
  )
}

export default App
