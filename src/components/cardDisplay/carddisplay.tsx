'use client';

import './carddisplay_style.css';

interface CardDisplayProps {
    titulo: string; 
    valor: string;  
}

export default function CardDisplay({ titulo, valor }: CardDisplayProps) {
    return (
        <div className="card-display">
            <h3 className="card-titulo">{titulo}</h3>
            <p className="card-valor">{valor}</p>
        </div>
    );
}
