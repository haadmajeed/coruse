import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './components/Banner'
import HouseList from "./components/HouseList"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Banner HeaderText="hello i am haad" />
      <Banner HeaderText="A software enginner" />
      <Banner>
        Hello once again this is the children prop
        <img src={viteLogo} alt="vite" />
      </Banner>
      <HouseList/>
    </>
  )
}


export default App
