import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { getUrl } from "../../lib/UrlConvert";
import { MediaCardContainer, MediaCardContent } from "./styles";

export type Props = {
  src: any;
  title: string;
  onClick: () => void;
};

const MediaCard = (props: Props) => {
  const { src, title, onClick } = props;
  const url = getUrl(src);
  return (
    <MediaCardContainer onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          component={"iframe"}
          width="560px" 
          height="315px"
          title={title}
          src={url}
        />

        <MediaCardContent>
          <Typography align={"center"}>{props.title.toUpperCase()}</Typography>
        </MediaCardContent>
      </CardActionArea>
    </MediaCardContainer>
  );
};

export default MediaCard;
