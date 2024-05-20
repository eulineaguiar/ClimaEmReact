import React, { useState } from 'react';
import './App.css';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');

  const quotes = [
    "A vida é o que acontece enquanto você está ocupado fazendo outros planos. - John Lennon",
    "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo. - Winston Churchill",
    "Se você quer algo que nunca teve, precisa fazer algo que nunca fez. - Thomas Jefferson",
    "O segredo da felicidade não é fazer sempre o que se quer, mas querer sempre o que se faz. - Leon Tolstoi",
    "A persistência é o caminho do êxito. - Charles Chaplin"
  ];

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote-container"> {/* Aplicando a classe CSS aqui */}
      <h1 className="title">Citação Aleatória</h1> {/* Aplicando a classe CSS aqui */}
      <button className="generate-button" onClick={generateQuote}>Gerar Citação</button> {/* Aplicando a classe CSS aqui */}
      {quote && <p className="quote">{quote}</p>} {/* Aplicando a classe CSS aqui */}
    </div>
  );
};

export default QuoteGenerator;
