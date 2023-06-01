import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Layout from './Components/Layout'
import NewsLayout from './Components/NewsLayout'
import NewsResult from './Components/NewsResult'



const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}/>
            <Route path='/news/' element={<NewsLayout />}>
              <Route path=':newsTopic' element={<NewsResult />} />
            </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
