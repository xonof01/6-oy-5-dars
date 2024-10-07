import Navbar from './assets/components/Navbar'
import Header from './assets/components/Header'
import { Route, Routes } from 'react-router-dom'
import { Ideas, Overview, Tickets } from './pages'
import './App.css'

function App() {
  return (
    <div className='flex justify-between'>
      <Navbar/>
      <div className="w-[80%] py-[36px] px-[30px]">
        <Header/>
        <Routes>
          <Route path='/' element={<Overview/>}/>
          <Route path='/tickets' element={<Tickets/>}/>
          <Route path='/ideas' element={<Ideas/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
