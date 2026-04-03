import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import About from "./components/About"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Project from "./components/Project"
import Contact from "./components/Contact"
import HomePage from "./pages/HomePage"
import BlogSection from "./components/BlogSection"


const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>

      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />


      
        
      </Route>
      <Route path="/blog" element={<BlogSection />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App