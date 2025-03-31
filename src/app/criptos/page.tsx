'use client';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 24px;
  font-family: 'Segoe UI', sans-serif;
  min-height: 100vh;
  background-color: white;
`;

const InstructionBox = styled.div`
  background-color: #e6e6e6;
  border-radius: 12px;
  padding: 20px 32px;
  font-size: 22px;
  text-align: center;
  color: #2b2b2b;
  margin-bottom: 100px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 320px);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CardButton = styled.button`
  background: linear-gradient(180deg, #0c2d23 0%, #1e4f43 100%);
  color: white;
  font-size: 20px;
  font-weight: 500;
  border: none;
  border-radius: 16px;
  height: 140px;
  cursor: pointer;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.94;
    transform: scale(1.02);
  }
`;

export default function CriptosPage() {
  return (
    <Wrapper>
      <InstructionBox>
        Deixe-nos ajudar a organizar seus investimentos, selecione:
      </InstructionBox>

      <Grid>
        <CardButton>Adicionar Saldo</CardButton>
        <CardButton>Remover Saldo</CardButton>
        <CardButton>Consultar Saldo</CardButton>
        <CardButton>Consultar Criptos</CardButton>
      </Grid>
    </Wrapper>
  );
}