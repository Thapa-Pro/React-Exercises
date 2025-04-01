
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);

  const decrease = () => {
    if (value > 0) setValue(v => v - 1);
  }

  const increase = () => {
    setValue(v => v + 1);
  }

  return (
    <div className="app">
      <section className="counter">
        <button onClick={decrease} >Decrease</button>
        <p>{value}</p>
        <button onClick={increase} >Increase</button>
      </section>
    </div>
  )
}

export default App
