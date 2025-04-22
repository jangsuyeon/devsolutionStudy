import './App.css'
import { Route, Routes } from 'react-router-dom'
import Index from './Index'
import ProjectList from './project/ProjectList'
import ProjectAdd from './project/projectAdd'
import ProjectDetail from './project/ProjectDetail'

import Kanban from './work/KanbanBoard';

import CodeReview from './codereview/Codereview'
import SideMenu from './component/menu/SideMenu'

import ChatList from './chat/chatList'

function App() {
  return (
    <>
      <div className="layout-wrapper">
        <div className="layout-container layout-content-navbar">
          {/* 공통 메뉴 */}
          <SideMenu />
          {/* 내용 */}
          <Routes basename="/devsolutionStudy">
            <Route path='/devsolutionStudy' element={<Index />} />

            <Route path='/devsolutionStudy/project' element={<ProjectList />} />
            <Route path='/devsolutionStudy/project/add' element={<ProjectAdd />} />
            <Route path='/devsolutionStudy/codeReview' element={<CodeReview />} />
            <Route path='/devsolutionStudy/KanbanBoard' element={<Kanban />} />

            <Route path='/devsolutionStudy/chatList' element={<ChatList />} />
            <Route path='/devsolutionStudy/project/detail' element={<ProjectDetail/>} />

            <Route path='/devsolutionStudy/project/detail' element={<ProjectDetail/>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
