import { useState, useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState(null);
  const [counter, setCounter] = useState(0);
  const url = 'https://jsonplaceholder.typicode.com/todos';

  useEffect(() => {

  }, []);

  const handleClick = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => setTodos([...data]));
  }

  useEffect(() => {


  }, [counter]);

  return (
    <div className="app">
      <ul>
        {
          todos ? todos.map(todo => <li key={todo.id}>{todo.title}</li>) : <p>Loading...</p>
        }
      </ul>
      <button onClick={handleClick}>ÖKA</button>
    </div>
  )
}

export default App;