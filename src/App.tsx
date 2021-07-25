import { useCallback, useState } from 'react'
import logo from './logo.svg'

import Child from './Child'

import './App.css'

function App() {
  const [isTrueChild, setTrueChild] = useState(false)
  const [isTrueParent, setIsTrueParent] = useState(false)
  console.log('render APP')

  const onToggleChild = useCallback(() => {
    setTrueChild(prev => !prev)
  }, [])

  const onToggleParent = useCallback(() => {
    setIsTrueParent(prev => !prev)
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <div>{isTrueChild ? 'TRUE CHILD' : 'FALSE CHILD'}</div>
        <div>{isTrueParent ? 'TRUE PARENT' : 'FALSE PARENT'}</div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            marginTop: '10px',
            gap: '10px',
          }}
        >
          <div className='toggleParentButton' onClick={onToggleParent}>
            rerender App button
          </div>

          <Child onToggle={onToggleChild} />
        </div>
      </header>
    </div>
  )
}

export default App
