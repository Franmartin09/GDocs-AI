// pages/404.js
import Link from 'next/link';
import styles from '../styles/Projects.module.css';

const documents = [
  { id: 1, title: 'Document 1', description: 'Description of Document 1' },
  { id: 2, title: 'Document 2', description: 'Description of Document 2' },
  { id: 3, title: 'Document 3', description: 'Description of Document 3' },
  { id: 4, title: 'Document 4', description: 'Description of Document 4' },
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.cardContainer}>
        {documents.map((doc) => (
          <div key={doc.id} className={styles.card}>
            <h2 className={styles.cardTitle}>{doc.title}</h2>
            <p className={styles.cardDescription}>{doc.description}</p>
          </div>
        ))}
      </div>
      <Link href="/" className={styles.homeLink}>
        Go back to Home
      </Link>
    </div>
  );
}
