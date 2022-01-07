import { CardActions, IconButton } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { getUrl } from "../../lib/UrlConvert";
import { MediaCardContainer, MediaCardContent, FavoriteText } from "./styles";
import { useState } from "react";
import { starWarsYellowLight, neutralColor } from "../../styles/colors";
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
  const [loading, setLoading] = useState(false);

  function getColor() {
    return favorited ? neutralColor : starWarsYellowLight;
  }

  async function handleFavoriteIconClick() {
    setLoading(true);
    setFavorited(!favorited);
    try{
      await thankMedia(mediaId);
    } catch (e){
      console.log(e)
    } finally {
      setLoading(false);
    }
  }

  return (
    <MediaCardContainer onClick={onClick} elevation={0} sx={{borderRadius: 0}} >
      <CardActionArea sx={{ maxWidth: 560 }}>
        <CardMedia
          component={"iframe"}
          height="315px"
          title={title}
          src={url}
        />

        <MediaCardContent sx={{backgroundColor: "#000"}}>
          <Typography align={"center"}>{props.title.toUpperCase()}</Typography>
        </MediaCardContent>

        <CardActions disableSpacing sx={{backgroundColor: "#303030"}}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon
              sx={{ color: getColor() }}
              onClick={handleFavoriteIconClick}
            />
            <FavoriteText color={getColor()}>{loading ? "thanking...": "0.01 matic"}</FavoriteText>
          </IconButton>
        </CardActions>
      </CardActionArea>
    </MediaCardContainer>
  );
};

export default MediaCard;
