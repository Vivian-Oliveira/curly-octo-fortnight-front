import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export const MediaCardContainer = styled(Card)`
  width: 100%;

  iframe {
    display: block;
    border-style: none;
  }
`;

export const MediaCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FavoriteText = styled.p`
  margin: 0 0 0 4px;
  padding: 0;
  font-size: 17px;
  color: ${props => props.color};
  letter-spacing: 1px;
`
