import { useState } from 'react'

function GeneratorForm({ handleGeneratedPokemon }) {
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleGeneratedPokemon(type, amount)
    }

    return (
        <form onSubmit={handleSubmit} className="generator__form">
            <input
                onChange={(e) => setType(e.target.value)}
                type="text"
                className="generator__input generator__input--text"
                placeholder="Pokemon Type"
            />
            <input
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                className="generator__input generator__input--number"
                placeholder="Amount"
            />
            <button className="generator__button">Generate</button>
        </form>
    )
}

export default GeneratorForm