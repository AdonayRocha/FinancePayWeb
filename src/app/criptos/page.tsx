'use client';

import './cripto_style.css';
import BotaoAcao from '../../components/botaoAcao/BotaoAcao';

export default function CriptosPage() {
  const adicionarSaldo = () => alert('Adicionar Saldo acionado!');
  const removerSaldo = () => alert('Remover Saldo acionado!');
  const consultarSaldo = () => alert('Consultar Saldo acionado!');
  const consultarCriptos = () => alert('Consultar Criptos acionado!');

  return (
    <div className="criptos-wrapper">
      <div className="instruction-box">
        Deixe-nos ajudar a organizar seus investimentos, selecione:
      </div>

      <div className="grid">
        <BotaoAcao texto="Adicionar Saldo" aoClicar={adicionarSaldo} />
        <BotaoAcao texto="Remover Saldo" aoClicar={removerSaldo} />
        <BotaoAcao texto="Consultar Saldo" aoClicar={consultarSaldo} />
        <BotaoAcao texto="Consultar Criptos" aoClicar={consultarCriptos} />
      </div>
    </div>
  );
}
