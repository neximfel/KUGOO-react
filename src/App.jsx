import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../src/components/Header/Header.jsx"


function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App