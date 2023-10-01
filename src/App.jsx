
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import About from './pages/About'
import Tracker from './pages/TrackerPage'
import HowTo from './pages/HowTo'


function App() {
 

  return (
    <>
     {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path='/About' element={<About />} />
  <Route path='/tracker' element={<Tracker />} />
  <Route path='/howto' element={<HowTo />} />
</Routes>

    </>
  )
}

export default App
