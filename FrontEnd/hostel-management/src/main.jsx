import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AddStudent from './componnets/AddStudent.jsx'
import ViewStudents from './componnets/ViewStudents.jsx'
import StudentDetail from './componnets/StudentDetail.jsx'
import Firstpage from './componnets/Pages/Firstpage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Firstpage/>
  </StrictMode>,
)
