import MediaCard from "../../components/MediaCard";
import { Container, MediaGrid, Header, Title } from "./styles";
import { useWallet } from "../../hooks/useWallet/index";
import { useEffect } from "react";
import { Button } from "@mui/material";
import MediaForm from "../../components/MediaForm";
import { useMedias } from "../../hooks/useMedias";
import { Media } from "../../types/Media";
import { starWarsYellow } from '../../styles/colors';
import Lottie from 'react-lottie';
import animationData from '../../assets/18720-baby-yoda.json';

function MainPage() {
  const { account, connectWallet, checkIfWalletIsConnected } = useWallet();
  const { medias } = useMedias();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    console.log(medias);
  }, [medias]);

  return (
    <Container>
        <Header>
            <Title>Matic Menace</Title>
        </Header>
        {!account && <div>
            <iframe width="1800" height="840" src="https://www.youtube.com/embed/PdINAnuLjSI?start=5&autoplay=1&showinfo=0&controls=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>}
      {!account && (
        <Button
          variant="contained"
          sx={{
              color: "#ffd54e",
              letterSpacing: "3px",
              padding: "10px 30px 10px",
              outline: "0",
              border: "4px solid #ffd54e",
              borderRadius: "15px",
              background: "#000",
              textShadow: "none",
              fontSize: "32px",
              transition: "box-shadow .3s ease-out,text-shadow .3s ease-out",
              position: "absolute",
              bottom: 25,
              fontWeight: "bold",
              zIndex:2
          }}
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
