import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <div className='text-center mx-auto justify-center w-1/2 my-10'>
      <h1 className='text-3xl text-center bg-red-950 text-white p-3 rounded justify-center'>Chocolate Management System</h1>
    </div>
    <Outlet></Outlet>
    </>
  )
}

export default App
