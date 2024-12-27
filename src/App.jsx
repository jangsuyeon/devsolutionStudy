import './App.css'
import { Route, Routes } from 'react-router-dom'
import Index from './Index'
import ProjectList from './project/ProjectList'
import ProjectAdd from './project/projectAdd'
import CodeReview from './codereview/codereview'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        
        <Route path='/project' element={<ProjectList />} />
        <Route path='/project/add' element={<ProjectAdd />} />
        <Route path='/codeReview' element={<CodeReview />} />
      </Routes>
    </>
  )
}

export default App
