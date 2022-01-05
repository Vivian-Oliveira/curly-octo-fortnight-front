import MediaCard from "../../components/MediaCard";
import { Container } from "./styles";
import { useWallet } from "../../hooks/useWallet/index";
import { useEffect } from "react";

function MainPage() {
  const { account, connectWallet, checkIfWalletIsConnected } = useWallet();

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <Container>
      {!account && (
        <button className="waveButton" onClick={connectWallet}>
          Connect Wallet
        </button>
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
