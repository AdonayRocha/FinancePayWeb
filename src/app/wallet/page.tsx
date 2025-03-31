'use client';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 0;
  font-family: 'Segoe UI', sans-serif;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 1600px;
  padding: 0 40px;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 280px;
`;

const CardLeft = styled.div`
  background-color: #DBE1DD;
  padding: 32px;
  border-radius: 14px;
  font-weight: 600;
  font-size: 22px;
  text-align: center;
  font-family: 'Kodchasan', sans-serif;

  &:first-child {
    background-color: #d9d9d9;
    border: 2px solid #ccc;
    font-weight: bold;
    font-family: 'Kodchasan', sans-serif;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  flex: 1;
`;

const CardRight = styled.div`
   background: linear-gradient(180deg, #0c2d23 0%, #1e4f43 100%);
  color: white;
  padding: 44px 48px;
  border-radius: 14px;
  font-size: 24px;
  font-weight: 500;
  width: 100%;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

export default function WalletPage() {
  return (
    <Wrapper>
      <Content>
        <Sidebar>
          <CardLeft>Investimentos</CardLeft>
          <CardLeft>BTC<br />00,00</CardLeft>
          <CardLeft>ADA<br />00,00</CardLeft>
          <CardLeft>GMG<br />00,00</CardLeft>
        </Sidebar>

        <InfoSection>
          <CardRight><strong>Saldo:</strong> R$00,00</CardRight>
          <CardRight><strong>Gastos nos últimos 30 Dias:</strong> R$00,00</CardRight>
          <CardRight><strong>Ganhos nos últimos 30 Dias:</strong> R$00,00</CardRight>
          <CardRight><strong>Lucro nos últimos 30 Dias:</strong> R$00,00</CardRight>
        </InfoSection>
      </Content>
    </Wrapper>
  );
}