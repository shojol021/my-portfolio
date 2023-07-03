import './App.css'
import Banner from './components/banner/Banner'
import Contact from './components/contact/Contact'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </>
  )
}

export default App
