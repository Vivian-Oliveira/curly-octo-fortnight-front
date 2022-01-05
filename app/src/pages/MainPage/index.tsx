import MediaCard from "../../components/MediaCard";
import { Container } from "./styles";
import { useWallet } from "../../hooks/useWallet/index";
import { useEffect } from "react";
import { Button } from "@mui/material";

function MainPage() {
  const { account, connectWallet, checkIfWalletIsConnected } = useWallet();

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <Container>
      {!account && (
        <Button
          variant="contained"
          sx={{ backgroundColor: "#ED254E" }}
          onClick={connectWallet}
        >
          Connect Wallet
        </Button>
      )}

      <MediaCard
        title="teste"
        src="https://www.youtube.com/embed/hjIhCG_nIPA"
        onClick={() => {}}
      />
    </Container>
  );
}

export default MainPage;
