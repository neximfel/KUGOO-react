import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../src/components/Header/Header.jsx"
import Footer from "../src/components/Footer/Footer.jsx"
import Page1 from "../src/pages/Page1/Page1.jsx"
import Page2 from "../src/pages/Page2/Page2.jsx"


function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" index element={<Page1/>} />
            <Route path="/page2" index element={<Page2/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App