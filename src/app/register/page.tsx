'use client';

import '../register/register_style.css';


export default function RegisterPage() {
  return (
    <div className="register-wrapper">
      <div className="register-container">
        <h2 className="register-title">Cadastro</h2>
        <form>
          <label htmlFor="name" className="register-label">Nome</label>
          <input id="name" type="text" placeholder="Digite seu nome" className="register-input" />

          <label htmlFor="email" className="register-label">E-Mail</label>
          <input id="email" type="email" placeholder="Digite seu e-mail" className="register-input" />

          <label htmlFor="password" className="register-label">Senha</label>
          <input id="password" type="password" placeholder="Digite sua senha" className="register-input" />

          <label htmlFor="confirmPassword" className="register-label">Confirmar senha</label>
          <input id="confirmPassword" type="password" placeholder="Confirme sua senha" className="register-input" />

          <button type="submit" className="register-button">Confirmar</button>
        </form>
      </div>
    </div>
  );
}
