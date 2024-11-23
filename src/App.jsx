import { useState } from 'react'
// import './App.css'
import AdminDashboard from './pages/admin/adminDashboard/AdminDashboard'
import Products from './pages/admin/products/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AdminDashboard />
     {/* <Products /> */}
    </>
  )
}

export default App
