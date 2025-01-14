import { useState } from 'react'
import './App.css'
import DashBoard from './dashboard/DashBoard'

function Index() {
    const [count, setCount] = useState(0)

    return (
        <>
            <DashBoard />
        </>
    )
}

export default Index