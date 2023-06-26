import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button
        className="btn btn-primary">
        Button
      </button>
    </>
  )
}

export default App
