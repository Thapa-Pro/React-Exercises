function TodoItem({ todo, handleTodoClick }) {
    return (
        <li
            onClick={() => handleTodoClick(todo.id)}
            style={{ backgroundColor: todo.completed ? 'green' : 'red' }} /* Ternary Operator */
        >{todo.title}</li>
    )
}

export default TodoItem;