import { useEffect } from 'react'
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"
import { AuthPage } from './pages/AuthPage';



function App() {

  return (
    <>
      <AuthPage />  
    </>
  )
}

export default App
