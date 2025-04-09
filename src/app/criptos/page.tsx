'use client';

import { useState } from 'react';
import BotaoAcao from '../../components/botaoAcao/BotaoAcao';
import './cripto_style.css';

export default function CriptosPage() {
  const [idConta, setIdConta] = useState('');
  const [valor, setValor] = useState('');

  const adicionarSaldo = async () => {
    try {
      const response = await fetch('http://localhost:8080/saldo/atualizar', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "id": 1,
          saldo: parseFloat(valor)
        }),
      });

      if (!response.ok) throw new Error('Erro ao adicionar saldo');

      const data = await response.json();
      alert('Saldo adicionado com sucesso: R$ ' + data.valor);
    } catch (error) {
      if (error instanceof Error) {
        alert('Erro ao adicionar saldo: ' + error.message);
      } else {
        alert('Erro desconhecido');
      }
    }
  };

  return (
    <div className="criptos-wrapper">
      <div className="instruction-box">
        Deixe-nos ajudar a organizar seus investimentos, selecione:
      </div>

      <div className="form-inputs">
        <input
          type="text"
          placeholder="ID da conta"
          value={idConta}
          onChange={(e) => setIdConta(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={valor}
          min={1}
          onChange={(e) => {
            const newValue = Number(e.target.value);
            if (newValue >= 1 || e.target.value === '') {
              setValor(e.target.value);
            }
          }}
        />
      </div>

      <div className="grid">
        <BotaoAcao texto="Adicionar Saldo" aoClicar={adicionarSaldo} />
        <BotaoAcao texto="Remover Saldo" />
        <BotaoAcao texto="Consultar Saldo" />
        <BotaoAcao texto="Consultar Criptos" />
      </div>
    </div>
  );
}
