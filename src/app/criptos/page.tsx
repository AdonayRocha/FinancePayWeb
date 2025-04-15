'use client';

import { useState } from 'react';
import BotaoAcao from '../../components/botaoAcao/BotaoAcao';
import './cripto_style.css';

export default function CriptosPage() {
  const [idConta, setIdConta] = useState('');
  const [valor, setValor] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const adicionarSaldo = async () => {
    setMensagem('');
    setMensagemErro('');

    try {
      const response = await fetch('http://localhost:8080/saldo/movimentacao', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: parseInt(idConta),
          saldo: parseFloat(valor)
        }),
      });

      if (!response.ok) throw new Error('Erro ao adicionar saldo');

      const data = await response.json();
      setMensagem(`Saldo adicionado com sucesso: R$ ${data.valor}`);
    } catch (error) {
      if (error instanceof Error) {
        setMensagemErro(`*Erro ao adicionar saldo: ${error.message}`);
      } else {
        setMensagemErro('*Erro desconhecido');
      }
    }
  };

  const removerSaldo = async () => {
    setMensagem('');
    setMensagemErro('');

    try {
      const response = await fetch('http://localhost:8080/saldo/movimentacao', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: parseInt(idConta),
          saldo: -Math.abs(parseFloat(valor))
        }),
      });

      if (!response.ok) throw new Error('Erro ao remover saldo');

      const data = await response.json();
      setMensagem('Saldo removido com sucesso!');
    } catch (error) {
      if (error instanceof Error) {
        setMensagemErro(`*Erro ao remover saldo: ${error.message}`);
      } else {
        setMensagemErro('*Erro desconhecido');
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
        <BotaoAcao texto="Remover Saldo" aoClicar={removerSaldo} />
        <BotaoAcao texto="Consultar Saldo" />
        <BotaoAcao texto="Consultar Criptos" />
      </div>

      {mensagem && <p style={{ color: 'green', marginTop: '10px' }}>{mensagem}</p>}
      {mensagemErro && <p style={{ color: 'red', marginTop: '10px' }}>{mensagemErro}</p>}
    </div>
  );
}