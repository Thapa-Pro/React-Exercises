// src/App.jsx
import { useState } from 'react';
import './index.css';
import './components/Form.css'; // 🧪 test if it loads styles globally


import Header from './components/Header';
import BookList from './components/BookList';
import LoginForm from './components/LogInForm';
import RegisterForm from './components/RegisterForm';
import initialUsers from './data/users';

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [activeUser, setActiveUser] = useState(null);
  const [cart, setCart] = useState({});
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = (username, password) => {
    const foundUser = users.find(user => user.username === username && user.password === password);
    if (foundUser) {
      setActiveUser(foundUser);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleRegister = (username, password) => {
    if (users.find(u => u.username === username)) {
      alert("Username already exists!");
      return;
    }
    const newUser = { username, password };
    setUsers(prev => [...prev, newUser]);
    setShowRegister(false);
  };

  const handleLogout = () => {
    setActiveUser(null);
    setCart({});
  };

  const handleCountChange = (index, newCount) => {
    setCart(prevCart => ({
      ...prevCart,
      [index]: newCount
    }));
  };

  const totalCount = Object.values(cart).reduce((sum, count) => sum + count, 0);

  return (
    <div className="app">
      {activeUser === null ? (
        showRegister ? (
          <RegisterForm
            onRegister={handleRegister}
            switchToLogin={() => setShowRegister(false)}
          />
        ) : (
          <LoginForm
            onLogin={handleLogin}
            switchToRegister={() => setShowRegister(true)}
          />
        )
      ) : (
        <>
          <Header cartCount={totalCount} />
          <button onClick={handleLogout} style={{ fontWeight: 'bold' }}>Logga Ut</button>
          <BookList onCountChange={handleCountChange} />
        </>
      )}
    </div>
  );
}

export default App;
