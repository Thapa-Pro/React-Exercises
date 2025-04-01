import { useState } from 'react';

function AddTodoForm({ handleAddTodo }) {
    const [input, setInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input !== '') handleAddTodo(input);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={(event) => setInput(event.target.value)}
                type="text"
                placeholder="Ny Todo"
            />
            <button>Lägg till</button>
        </form>
    )
}

export default AddTodoForm