import React, { FormEvent, useState } from "react";
import { InputsContainer, MediaFormContainer } from "./styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useForm from "../../hooks/useForm";
import CircularProgress from "@mui/material/CircularProgress";
import { useContractMethods } from "../../hooks/useContractMethods";
import { primaryColor, starWarsYellow } from "../../styles/colors";

const MediaForm = () => {
  const [form, onChange, clear] = useForm({ media: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { sendMedia } = useContractMethods();

  const onSubmitForm = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await sendMedia(form.media);
      clear();
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MediaFormContainer>
      <form onSubmit={onSubmitForm}>
        <InputsContainer>
          <TextField
            name={"media"}
            value={form.media}
            onChange={onChange}
            label={"Media Link"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"text"}
            InputLabelProps={{
              style: { color: starWarsYellow },
            }}
          />
        </InputsContainer>
        <Button
          type={"submit"}
          fullWidth
          variant={"contained"}
          sx={{ backgroundColor: starWarsYellow }}
        >
          {isLoading ? (
            <CircularProgress color={"inherit"} size={24} />
          ) : (
            <>Submit</>
          )}
        </Button>
      </form>
    </MediaFormContainer>
  );
};

export default MediaForm;
