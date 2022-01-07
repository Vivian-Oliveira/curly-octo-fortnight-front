import styled from "styled-components";
import { starWarsYellow } from '../../styles/colors'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
`;

export const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 40px;
  column-gap: 40px;
  margin: 14px 14px 24px 24px;
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${starWarsYellow};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 40px;
`;
