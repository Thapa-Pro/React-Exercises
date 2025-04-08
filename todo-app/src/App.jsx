import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
//import todoList from "./data/todoList";
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  let appName = 'My Todo App';
  const url = 'https://jsonplaceholder.typicode.com/todos';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setTodos([...data]));
  }, []);



  const handleTodoClick = (id) => {

    todos.forEach(item => {
      if (item.id === id) item.completed = !item.completed;
    })
    setTodos([...todos]);

    console.log(todos);

  }

  const handleAddTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      title: text,
      completed: false
    }
    setTodos([...todos, newTodo]);
  }

  return (
    <section className="app">
      <h1>{appName}</h1>
      <TodoList
        handleTodoClick={handleTodoClick}
        todos={todos}
      />
      <AddTodoForm
        handleAddTodo={handleAddTodo}
      />
    </section>
  )
}

export default App