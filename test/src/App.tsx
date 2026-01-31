import { useEffect } from 'react'
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"
import { AuthPage } from './pages/AuthPage';
interface TimerViewProps {
  timer: {
    secondsPassed: string;
    reset: () => void;
  };
}
function createTimer() {
  return makeAutoObservable({
    secondsPassed: "",
    increase() {
      this.secondsPassed += "кря "
    },
    reset() {
      this.secondsPassed = ''
    }
  })
}

const myTimer = createTimer()
const TimerView: React.FC<TimerViewProps> = observer(({ timer }) => (
  <button
    onClick={() => timer.reset()}
    className="px-4 py-2 bg-indigo-500 text-white rounded"
  >
    Seconds passed: {timer.secondsPassed}
  </button>
));


function App() {

  useEffect(() => {
    const id = setInterval(() => {
      myTimer.increase()
    }, 1000)

    return () => clearInterval(id)
  }, [])

  return (
    <>
      {/* <div className='h-screen flex flex-col items-center justify-center'>
        <p>Я работаю с утками</p>
        <img className='w-64 h-64' src={"/2911269.png"} alt="Описание" />
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <div className='mt-5'>
          <TimerView timer={myTimer} />
        </div>
      </div> */}


      <AuthPage />



    </>
  )
}

export default App
