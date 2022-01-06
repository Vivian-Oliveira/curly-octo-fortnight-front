import MediaCard from "../../components/MediaCard";
import { Container, MediaGrid, Header } from "./styles";
import { useWallet } from "../../hooks/useWallet/index";
import { useEffect } from "react";
import { Button } from "@mui/material";
import MediaForm from "../../components/MediaForm";
import { useMedias } from "../../hooks/useMedias";
import { Media } from "../../types/Media";
import { starWarsYellow } from '../../styles/colors';

function MainPage() {
  const { account, connectWallet, checkIfWalletIsConnected } = useWallet();
  const { medias } = useMedias();

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    console.log(medias);
  }, [medias]);

  return (
    <Container>
        <Header>
            <h1>Matic Menace</h1>
        </Header>
      {!account && (
        <Button
          variant="contained"
          sx={{ backgroundColor: starWarsYellow, color: "#000", marginTop: "15px" }}
          onClick={connectWallet}
        >
          Connect Wallet
        </Button>
      )}

        {account && <>
            <MediaForm />

            <MediaGrid>
                {medias?.map((media: Media) => (
                    <MediaCard
                        title={`${media.sender}`}
                        src={media.media}
                        mediaId={media.id}
                        onClick={() => {}}
                    />
                ))}
            </MediaGrid>
        </>}
    </Container>
  );
}

export default MainPage;
