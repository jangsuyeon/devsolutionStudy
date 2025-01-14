import React, { useState } from 'react'
import "/public/css/demo.css"
import "/public/vendor/css/core.css"
import "/public/vendor/css/theme-default.css"
import "/public/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
import "/public/vendor/js/menu.js"
import "/public/css/project/projectList.css"
import Dashboard from './dashboard/DashBoard'; // Dashboard 컴포넌트 불러오기

function Index(props) {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
      <div>
      {/* Dashboard 컴포넌트 렌더링 */}
      <Dashboard />
    </div>
    )
}


export default Index