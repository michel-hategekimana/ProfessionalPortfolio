import About from "../components/About"
import Contact from "../components/Contact"
import Experience from "../components/Experience"
import Hero from "../components/Hero"
import Project from "../components/Project"

const HomePage = () => {
  return (
    <div>
      <Hero />
        <About />
        <Experience />
        <Project />
        <Contact />
    </div>
  )
}

export default HomePage