import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../src/components/Header/Header.jsx"
import Page1 from "../src/pages/Page1/Page1.jsx"


function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" index element={<Page1/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App