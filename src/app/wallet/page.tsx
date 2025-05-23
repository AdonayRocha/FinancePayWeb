// app/wallet/page.tsx
'use client';

import CardDisplay from '../../components/cardDisplay/carddisplay';
import './wallet_style.css';

export default function WalletPage() {
    return (
        <div className="wallet-wrapper">
            <div className="wallet-content">
                { }
                <div className="sidebar">
                    <CardDisplay titulo="Investimentos" valor="-" />
                    <CardDisplay titulo="BTC" valor="00,00" />
                    <CardDisplay titulo="ADA" valor="00,00" />
                    <CardDisplay titulo="GMG" valor="00,00" />
                </div>

                { }
                <div className="info-section">
                    <CardDisplay titulo="Saldo" valor="R$ 00,00" />
                    <CardDisplay titulo="Último gasto" valor="R$ 00,00" />
                    <CardDisplay titulo="Último ganho" valor="R$ 00,00" />
                    <CardDisplay titulo="Lucratividade" valor="R$ 00,00" />
                </div>
            </div>
        </div>
    );
}
