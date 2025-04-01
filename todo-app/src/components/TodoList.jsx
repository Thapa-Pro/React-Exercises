import TodoItem from "./TodoItem";

function TodoList({ handleTodoClick, todos }) {

    return (
        <ul>
            {
                todos.map(todo => {
                    return <TodoItem
                        key={todo.id}
                        todo={todo}
                        handleTodoClick={handleTodoClick}
                    />
                })
            }
        </ul>
    )
}

export default TodoList;