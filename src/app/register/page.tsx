'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { FormEvent } from 'react';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
`;

const Container = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 0 16px;
  font-family: 'Segoe UI', sans-serif;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 32px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 6px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 0;
  border: none;
  border-bottom: 2px solid #000;
  background-color: transparent;
  outline: none;
  font-size: 15px;
  margin-bottom: 28px;
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
  display: block;
  margin: 0 auto;

  &:hover {
    background-color: #0d2e26;
  }
`;

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
