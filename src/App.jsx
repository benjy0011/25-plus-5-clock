import './App.css'
import BreakControl from './components/BreakControl'
import SessionControl from './components/SessionControl'
import Timer from './components/Timer'

function App() {

  return (
      <div className="container text-center mt-5 main">
        <h1><u>25 + 5 Clock</u></h1>
        <div className="row mb-5">
          <div className="col">
            <BreakControl />
          </div>
          <div className="col">
            <SessionControl/>
          </div>
        </div>
        <div>
          <Timer />
        </div>
      </div>
  )
}

export default App
