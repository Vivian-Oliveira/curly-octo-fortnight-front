import MediaCard from "../../components/MediaCard";
import { Container } from "./styles";
import { useWallet } from "../../hooks/useWallet/index";
import {useEffect} from "react";
import { Button } from "@mui/material";
import MediaForm from "../../components/MediaForm";
import {useMedias} from "../../hooks/useMedias";
import {Media} from "../../types/Media";

function MainPage() {
  const { account, connectWallet, checkIfWalletIsConnected } = useWallet();
  const { medias } = useMedias();

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

    useEffect(() => {
        console.log(medias);
    }, [medias])

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

      <MediaForm />

        {medias?.map((media: Media) =>
          (
            <MediaCard
                title={media.sender}
                src={media.media}
                onClick={() => {}}
            />
        ))}
    </Container>
  );
}

export default MainPage;
