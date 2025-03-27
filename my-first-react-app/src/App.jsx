import ToDoList from "./components/ToDoList";
function App() {

  let appName = 'My ToDo App';

  return (
    <section className="app">
      <h1>{appName}</h1>
      <ToDoList />
      { /* We can use just this code as well instead of import on the top */}

    </section>
  )
}

export default App

/* First We tried this one then went to My ToDo App
let myName = 'Thapa';
let isCool = true;
return (
  <section className="app">
    <h1>{myName} is {isCool ? '' : 'not'} cool</h1>
  </section>
)
  */