import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import todoList from "./data/todoList";
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(todoList);
  let appName = 'My Todo App';

  const handleTodoClick = (id) => {
    todos.forEach(item => {
      if (item.id === id) item.done = !item.done;
    })
    setTodos([...todos]);
  }

  const handleAddTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      task: text,
      done: false
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