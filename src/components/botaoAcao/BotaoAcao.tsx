'use client';

import './botao_acao_style.css';

interface BotaoAcaoProps {
    texto: string;
    aoClicar?: () => void;
}

export default function BotaoAcao({ texto, aoClicar }: BotaoAcaoProps) {
    return (
        <button className="botao-estilizado" onClick={aoClicar}>
            {texto}
        </button>
    );
}
