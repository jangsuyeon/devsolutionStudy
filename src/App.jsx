
import { Route, Routes } from 'react-router-dom'
import Index from './Index'
import Layout from './dashboard/Layout'
import DashBoard from './dashboard/DashBoard'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/layout' element={<Layout />} />
        <Route path='/dashboard' element={<DashBoard />} />
      </Routes>
    </>
  )
}

export default App
