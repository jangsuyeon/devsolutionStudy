import './App.css'
import { Route, Routes } from 'react-router-dom'
import Index from './Index'
import CodeReview from './codereview/codereview'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/codeReview' element={<CodeReview />} />
      </Routes>
    </>
  )
}

export default App
