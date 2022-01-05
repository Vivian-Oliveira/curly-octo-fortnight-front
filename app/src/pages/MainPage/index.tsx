import MediaCard from "../../components/MediaCard";
import { Container } from "./styles";

function MainPage() {
  return (
    <Container>

      <MediaCard
        title="teste"
        src="https://www.youtube.com/embed/hjIhCG_nIPA"
        onClick={() => {}}
      />
    </Container>
  );
}

export default MainPage;
