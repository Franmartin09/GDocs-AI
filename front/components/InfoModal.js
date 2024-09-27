import { useState, useEffect } from 'react';
import styles from '../styles/InfoModal.module.css'; // Archivo CSS específico para el modal

const InfoModal = ({ isOpen, onClose, message }) => {
  const [isVisible, setIsVisible] = useState(isOpen); // Controla la visibilidad con la transición
  
  // Maneja las transiciones del modal
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true); // Activa la transición de entrada
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300); // Espera el tiempo de la transición antes de ocultarlo
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null; // Si el modal no está visible, no renderiza nada

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.active : ''}`}>
      <div className={`${styles.modal} ${isOpen ? styles.active : ''}`}>
        <h2>Information</h2>
        {message && <p>{message}</p>}
        <button onClick={onClose} className={styles.closeButton}>Close</button>
      </div>
    </div>
  );
};

export default InfoModal;
