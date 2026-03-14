import { useEffect } from 'react'
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"
import { AuthPage } from './pages/AuthPage';
import { Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage';



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<AuthPage />} />
        <Route path='/home/' element={<HomePage/>}/>{/*тут домашняя страница */}
        <Route path='/*' element/> {/*тут страница ошибки */}
      </Routes>
    </>
  )
}

export default App
