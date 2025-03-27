function ToDoList() {

    const todoList = ['Köpa Kaffee', 'Mata Katten', 'Äta Glass', 'Duscha Katten']

    return (
        <ul>
            {
                todoList.map(todo => {
                    return <li>{todo}</li>
                })
            }
        </ul>
    )
}
export default ToDoList;

{/* we did this before const todolist array
    return (
        <ul>
            <li>Köpa Kaffee</li>
            <li>Mata Katten</li>
            <li>Äta Glass</li>
            <li>Tömma Kattlådan</li>
        </ul>
    ) 
*/}
