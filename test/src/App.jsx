import { useEffect } from 'react'
import './App.css'

import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"

function createTimer() {
  return makeAutoObservable({
    secondsPassed: 0,
    increase() {
      this.secondsPassed += 1
    },
    reset() {
      this.secondsPassed = 0
    }
  })
}

const myTimer = createTimer()
const TimerView = observer(({ timer }) => (
  <button onClick={() => timer.reset()}
    className="px-4 py-2 bg-indigo-500 text-white rounded">
    Seconds passed: {timer.secondsPassed}</button>
))


function App() {

  useEffect(() => {
    const id = setInterval(() => {
      myTimer.increase()
    }, 1000)

    return () => clearInterval(id)
  }, [])

  return (
    <>
      <div className='h-screen flex flex-col items-center justify-center'>
        <p>Я работаю</p>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <div className='mt-5'>
          <TimerView timer={myTimer} />
        </div>
      </div>

    </>
  )
}

export default App
