'use client';

import './navbar_style.css';
import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="header">
      <h1 className="logo">FINANCEPAY</h1>
      <nav className="nav">
        <Link href="/wallet" className="nav-link">Minha Carteira</Link>
        <Link href="/criptos" className="nav-link">Criptos</Link>
        <Link href="/user" className="nav-link">Usuário</Link>
      </nav>
    </header>
  );
}
