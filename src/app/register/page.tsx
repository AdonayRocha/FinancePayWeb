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
  font-family: 'Koh Santepheap', sans-serif;
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
  font-family: 'Koh Santepheap', sans-serif;
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
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Cadastro realizado com sucesso!');
    router.push('/user');
  };

  return (
    <Wrapper>
      <Container>
        <Title>Cadastro</Title>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="name">Nome</Label>
          <Input id="name" type="text" placeholder="Digite seu nome" />

          <Label htmlFor="email">E-Mail</Label>
          <Input id="email" type="email" placeholder="Digite seu e-mail" />

          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" placeholder="Digite sua senha" />

          <Label htmlFor="confirmPassword">Confirmar senha</Label>
          <Input id="confirmPassword" type="password" placeholder="Confirme sua senha" />

          <Button type="submit">Confirmar</Button>
        </form>
      </Container>
    </Wrapper>
  );
}