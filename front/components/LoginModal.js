import { useState, useEffect } from 'react';
import styles from '../styles/LoginModal.module.css'; // Archivo CSS específico para el modal

const LoginModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(isOpen); // Controla la visibilidad con la transición

  // Maneja las transiciones del modal
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true); // Activa la transición de entrada
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleLogin = async () => {
    setError(null);
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) throw new Error('Login failed');

      const data = await response.json();
      console.log('Login successful', data);
      onClose(); // Cierra el modal tras login exitoso
      window.location.reload(); // Forzar refresco de la app
    } catch (err) {
      setError(err.message);
    }
  };

  if (!isVisible) return null; // Si el modal no está visible, no renderiza nada

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.active : ''}`}>
      <div className={`${styles.modal} ${isOpen ? styles.active : ''}`}>
        <h2>Login</h2>
        {error && <p>{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={onClose} className={styles.closeButton}>Close</button>
      </div>
    </div>
  );
};

export default LoginModal;
