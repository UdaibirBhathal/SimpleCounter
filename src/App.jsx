import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const getColorClass = () => {
    if (count < 0) return 'red';
    if (count > 0) return 'blue';
    return 'green';
  }

  const resetCount = () => {
    setCount(0);
  }

  return (
    <div className="app-root">
      <div className="counter-box">
        <h1 className="title">Counter</h1>
        <div className={`count-display ${getColorClass()}`}>{count}</div>
        <div className="button-group">
          <button
  onClick={() => {
    if (count > 0) setCount(count - 1);
  }}
  className={`btn ${getColorClass()}`}
>
  –
</button>
          <button
            onClick={resetCount}
            className="btn reset"
          >
            ⟳
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className={`btn ${getColorClass()}`}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
