import React, { useState } from 'react';
import './Contador.css';

const Contador = () => {
  const [count, setCount] = useState(0);

  const incrementarContador = () => {
    setCount(count + 1);
  };

  const decrementarContador = () => {
    setCount(count - 1);
  };

  const resetarContador = () => {
    setCount(0);
  };

  return (
    <div className="contador-container">
      <h1>Contador</h1>
      <p>O botão foi clicado <span className="count">{count}</span> vezes.</p>
      <div className="botoes">
        <button onClick={incrementarContador} className="botao-contador">
            Incrementar
        </button>
        <button onClick={resetarContador} className="botao-contador reset">
            Resetar
        </button>
        <button onClick={decrementarContador} className="botao-contador decremento">
            Decrementar
        </button>
      </div>
    </div>
  );
};

export default Contador;
