import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import About from "./components/About"
import Hero from "./components/Hero"


const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/about" element={<About />} />
      <Route path="/hero" element={<Hero />} />
        
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App