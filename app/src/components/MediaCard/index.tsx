import { CardActions, IconButton } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { getUrl } from "../../lib/UrlConvert";
import { MediaCardContainer, MediaCardContent } from "./styles";
import { useState } from "react";
import { greyColor, neutralColor } from "../../styles/colors";
import { useContractMethods } from "../../hooks/useContractMethods/index";

export type Props = {
  src: any;
  title: string;
  onClick: () => void;
  mediaId: number;
};

const MediaCard = (props: Props) => {
  const { src, title, onClick, mediaId } = props;
  const [favorited, setFavorited] = useState(false);
  const url = getUrl(src);
  const { thankMedia } = useContractMethods();

  function getColor() {
    return favorited ? neutralColor : greyColor;
  }

  async function handleFavoriteIconClick() {
    setFavorited(!favorited);
    await thankMedia(mediaId);
  }

  return (
    <MediaCardContainer onClick={onClick}>
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

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon
              sx={{ color: getColor() }}
              onClick={handleFavoriteIconClick}
            />
          </IconButton>
        </CardActions>
      </CardActionArea>
    </MediaCardContainer>
  );
};

export default MediaCard;
