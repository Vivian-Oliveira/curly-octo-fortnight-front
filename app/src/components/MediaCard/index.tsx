import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { MediaCardContainer, MediaCardContent } from "./styles";

export type Props = {
  src: any;
  title: string;
  onClick: () => void;
};

const MediaCard = (props: Props) => {
  return (
    <MediaCardContainer onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          component={"iframe"}
          width="560px" 
          height="315px"
          title={props.title}
          src={props.src}
        />

        <MediaCardContent>
          <Typography align={"center"}>{props.title.toUpperCase()}</Typography>
        </MediaCardContent>
      </CardActionArea>
    </MediaCardContainer>
  );
};

export default MediaCard;
