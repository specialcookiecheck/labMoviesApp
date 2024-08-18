import React, { /*MouseEvent,*/ useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
//import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from "../../images/film-poster-placeholder.png";
import { BaseActorProps } from "../../types/interfaces";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { ActorsContext } from "../../contexts/actorsContext";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

interface ActorCardProps {
  actor: BaseActorProps;
  action: (a: BaseActorProps) => React.ReactNode;
}

const ActorCard: React.FC<ActorCardProps> = ({ actor, action }) => {
  const { mostLovedActors, /*addToMostLovedActors*/ } = useContext(ActorsContext); 

  const isMostLoved = mostLovedActors.find((id) => id === actor.id)
    ? true
    : false; 
  return (
    <Card sx={styles.card}>
      <CardHeader
        avatar={
          isMostLoved ? (
            <Avatar sx={styles.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {actor.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {actor.popularity}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(actor)}
        <Link to={`/actors/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ActorCard;
