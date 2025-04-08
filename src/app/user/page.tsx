'use client';

import '../user/user_style.css'; 
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; 
`;

const Container = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 0 16px;
  font-family: 'Segoe UI', sans-serif;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 32px;
`;

const Label = styled.label`
  display: block;
  font-size: 18px;
  margin-bottom: 6px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 0;
  border: none;
  border-bottom: 2px solid #000;
  background-color: transparent;
  outline: none;
  font-size: 17px;
  margin-bottom: 28px;
`;

const LinkRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 32px;

  a {
    color: #0c2d23;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Button = styled.button`
  background-color: #103b2f;
  color: white;
  padding: 12px 36px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #0d2e26;
  }
`;

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
