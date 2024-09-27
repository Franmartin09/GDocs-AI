import { useEffect, useState } from 'react';
import styles from '../styles/LoadingScreen.module.css'; // Importamos los estilos desde un archivo CSS

export default function LoadingScreen() {
  const textsWithImages = [
    { text: "Cargando información 1...", imgSrc: "/images/definicion.png" },
    { text: "Procesando datos 2...", imgSrc: "/images/requirement.png" },
    { text: "Verificando archivos 3...", imgSrc: "/images/arquitectura.png" },
    { text: "Compilando recursos 4...", imgSrc: "/images/datos.png" },
    { text: "Enviando peticiones 5...", imgSrc: "/images/tecnico.png" },
    { text: "Generando reportes 6...", imgSrc: "/images/proceso.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // Estado para controlar la visibilidad

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Oculta el texto actual

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textsWithImages.length);
        setIsVisible(true); // Muestra el siguiente texto
      }, 500); // Tiempo de duración de la animación de salida

    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []);

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingBox}>
        <div className={`${styles.textWithImage} ${isVisible ? styles.show : styles.hide}`}>
          <img
            src={textsWithImages[currentIndex].imgSrc}
            alt={`Icono ${currentIndex + 1}`}
            className={styles.loadingImage}
          />
          <p className={styles.loadingText}>{textsWithImages[currentIndex].text}</p>
        </div>
      </div>
    </div>
  );
}
