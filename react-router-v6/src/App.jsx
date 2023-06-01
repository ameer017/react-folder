import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Stack from './Pages/Stack/Stack'
import Contact from './Pages/Contact/Contact'
import Layout from './Component/Layout'
import Footer from './Component/Footer/Footer'
import NewsResult from './Component/Navbar/NewsResult'
import NewsLayout from './Component/Navbar/NewsLayout'

const App = () => {
  return (
    <>
      <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/stack' element={<Stack />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
      </Routes>


      <Footer />
    </>
  )
}

export default App
