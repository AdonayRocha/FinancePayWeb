'use client';

import '../user/user_style.css'; 
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/wallet');
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="login-label">E-Mail</label>
          <input id="email" type="email" placeholder="Digite seu e-mail" className="login-input" />

          <label htmlFor="password" className="login-label">Senha</label>
          <input id="password" type="password" placeholder="Digite sua senha" className="login-input" />

          <div className="login-links">
            <a href="#" className="login-link">Esqueci a senha</a>
            <a href="/register" className="login-link">Cadastre-se</a>
          </div>

          <button type="submit" className="login-button">Confirmar</button>
        </form>
      </div>
    </div>
  );
}
