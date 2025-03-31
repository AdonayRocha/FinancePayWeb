'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; /* <- sem calc, pois já controlamos via layout */
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
    <Wrapper>
      <Container>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="email">E-Mail</Label>
          <Input id="email" type="email" placeholder="Digite seu e-mail" />

          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" placeholder="Digite sua senha" />

          <LinkRow>
            <a href="#">esqueci a senha</a>
            <Link href="/register">cadastre-se</Link>
          </LinkRow>

          <Button type="submit">Confirmar</Button>
        </form>
      </Container>
    </Wrapper>
  );
}