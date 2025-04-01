import { useState } from 'react';
import './index.css';
import Header from './components/Header';
import BookList from './components/BookList'; // Make sure spelling is correct!

function App() {
  // Holds quantities per book: { 0: 2, 1: 3, ... }
  const [cart, setCart] = useState({});

  // This function is triggered when a book's counter changes
  const handleCountChange = (index, newCount) => {
    console.log("Updated book index:", index, "New count:", newCount);
    setCart(prevCart => ({
      ...prevCart,
      [index]: newCount
    }));
  };

  // Calculate total count across all books
  const totalCount = Object.values(cart).reduce((sum, count) => sum + count, 0);

  return (
    <div className="app">
      {/* Header receives total item count */}
      <Header cartCount={totalCount} />

      {/* BookList sends updates via onCountChange */}
      <BookList onCountChange={handleCountChange} />
    </div>
  );
}

export default App;
