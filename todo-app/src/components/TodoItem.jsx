function TodoItem({ todo, handleTodoClick }) {
    return (
        <li
            onClick={() => handleTodoClick(todo.id)}
            style={{ backgroundColor: todo.done ? 'green' : 'red' }} /* Ternary Operator */
        >{todo.task}</li>
    )
}

export default TodoItem;