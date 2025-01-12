import './App.css'
import { Route, Routes } from 'react-router-dom'
import Index from './Index'
import ProjectList from './project/ProjectList'
import ProjectAdd from './project/projectAdd'
import ProjectDetail from './project/ProjectDetail'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        
        <Route path='/project' element={<ProjectList />} />
        <Route path='/project/add' element={<ProjectAdd />} />
        <Route path='/project/detail' element={<ProjectDetail />} />
      </Routes>
    </>
  )
}

export default App
