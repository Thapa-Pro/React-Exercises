import { useState } from 'react';

const Counter = ({ onCountChange }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        const newCount = count + 1;
        setCount(newCount);
        onCountChange(newCount);  // ✅ Sends full count
    };

    const decrement = () => {
        if (count > 0) {
            const newCount = count - 1;
            setCount(newCount);
            onCountChange(newCount);  // ✅ Sends full count
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default Counter;
