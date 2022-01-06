import styled from "styled-components";
import TextField from "@mui/material/TextField";

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 10vh;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  // margin-bottom: 20px;
`;

export const MediaFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const SignUpButtonContainer = styled.div`
  width: 80vw;
  max-width: 450px;
`;

export const LogoImage = styled.img`
  width: 70vw;
  max-width: 350px;
`;

export const StyledTextField = styled(TextField)`
  height: 55px;
  .MuiOutlinedInput-root {
    color: orange;
    & > fieldset {
      border-color: orange;
    }
  }
`;
