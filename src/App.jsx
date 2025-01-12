import './App.css'
import { Route, Routes } from 'react-router-dom'
import Index from './Index'
import ProjectList from './project/ProjectList'
import ProjectAdd from './project/projectAdd'
<
import CodeReview from './codereview/Codereview'
import SideMenu from './component/menu/SideMenu'

function App() {
  return (
    <>
      <div className="layout-wrapper">
        <div className="layout-container layout-content-navbar">
          {/* 공통 메뉴 */}
          <SideMenu />
          {/* 내용 */}
          <Routes>
            <Route path='/' element={<Index />} />

            <Route path='/project' element={<ProjectList />} />
            <Route path='/project/add' element={<ProjectAdd />} />
            <Route path='/codeReview' element={<CodeReview />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
