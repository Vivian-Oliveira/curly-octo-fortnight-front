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
