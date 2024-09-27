import Head from 'next/head';
import { useState } from 'react';
import Form from '../components/Form';
import LoadingScreen from '../components/LoadingScreen';
import Response from '../components/Response';
import LoginModal from '../components/LoginModal';

export default function Home() {
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Controla la visibilidad del modal

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const response = await fetch('http://localhost:80/input', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: inputValue }), 
      });
      const result = await response.json();
      console.log('Response:', result);
      setData(result);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>GDocs AI</title>
        <meta name="description" content="Ask questions, generate UI, debug, execute code, and much more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} // Cierra el modal cuando se haga clic en "Close"
      />

      {loading ? (
        <LoadingScreen />
      ) : data ? (
        <Response data={data} />
      ) : (
        <Form
          handleSubmit={handleSubmit}
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          message={message}
          openLoginModal={() => setIsLoginModalOpen(true)} // Abre el modal cuando se haga clic en "Login"
        />
      )}
    </div>
  );
}
