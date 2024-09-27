import styles from '../styles/Home.module.css';

export default function Form({ handleSubmit, inputValue, handleInputChange, message, openLoginModal }) {
  return (
    <div className={styles.container}>
      <button className={styles.loginButton} onClick={openLoginModal}>Sign In</button>
      <main className={styles.main}>
        <h1 className={styles.title}>What can I help you ship?</h1>
        <p className={styles.description}>
          Generate Software Documentation for your project, ask questions, modify, and much more.
        </p>
        <div className={styles.inputContainer}>
          <input
            type="text"
            className={styles.input}
            placeholder="Ask GenDoncs for software project title..."
            value={inputValue} // Bind input value
            onChange={handleInputChange} // Update state on change
          />
          <button className={styles.submitButton} onClick={handleSubmit}>↗</button> {/* Trigger POST on click */}
        </div>
        <div className={styles.suggestions}>
          <button className={styles.suggestionButton}>Generate a SaaS pricing calculator with Python</button>
          <button className={styles.suggestionButton}>Cron Job for some reason...</button>
          <button className={styles.suggestionButton}>Web page with Angular for Beauty Salon</button>
          <button className={styles.suggestionButton}>{message}</button> {/* Mostrar mensaje del servidor */}
        </div>
      </main>
      <footer className={styles.footer}>
        <a href="/faq" className={styles.link}>FAQ</a>
        <a href="/terms" className={styles.link}>Terms</a>
        <a href="/privacy" className={styles.link}>Privacy</a>
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className={styles.link}>ICS</a>
      </footer>
    </div>
  );
}
