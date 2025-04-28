import { DisplaySettings } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Grid,
  Button,
  Container,
  Typography,
} from "@mui/material";

export default function Cards() {
  return (
    <>
      <Container sx={{ display: "flex", flexDirection: "row", gap: 5 }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://t3.ftcdn.net/jpg/05/24/07/12/240_F_524071224_dDPBBVX44e7NCgYBP91oV5X6l9kFmj7A.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Interactive Visual Paths
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Explore this roadmap built with interactive nodes. Click through
                skills, track progress, and shape your own learning path.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* // */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://t3.ftcdn.net/jpg/05/24/07/12/240_F_524071224_dDPBBVX44e7NCgYBP91oV5X6l9kFmj7A.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Custom Roadmap Builder
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Design your own learning or project roadmap—node by node.
                Visualize progress. Connect ideas. Stay on track. Custom
                roadmaps, built your way..
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* // */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://t3.ftcdn.net/jpg/05/24/07/12/240_F_524071224_dDPBBVX44e7NCgYBP91oV5X6l9kFmj7A.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Track Your Progress
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Visualize every step, mark what’s done, and see what’s next.
                Your path, your pace—clearly mapped.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </>
  );
}

{
  /* <Card sx={{ maxWidth: 345 }}>
<CardActionArea>
  <CardMedia
    component="img"
    height="140"
    image="https://t3.ftcdn.net/jpg/05/24/07/12/240_F_524071224_dDPBBVX44e7NCgYBP91oV5X6l9kFmj7A.jpg"
    alt="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      Interactive Visual Paths
    </Typography>
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      Explore this roadmap built with interactive nodes. Click through
              skills, track progress, and shape your own learning path.
    </Typography>
  </CardContent>
</CardActionArea>
</Card> */
}

//ORIGINAL

{
  /* <Grid
  container
  spacing={2}
  className="flex flex-row sm:flex-row lg:py-52 sm:py-8 px-10 justify-between shrink-0"
>
  <Card
    sx={{
      maxWidth: 345,
      width: { xs: 100, sm: 200, lg: 345 },
      height: "auto",
    }}
  >
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://t3.ftcdn.net/jpg/05/24/07/12/240_F_524071224_dDPBBVX44e7NCgYBP91oV5X6l9kFmj7A.jpg"
        alt="Frontend Dev Roadmap"
      />
      <CardContent>
        <Typography gutterBottom component="div" sx={{ fontsize: "auto" }}>
          Interactive Visual Paths
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Explore this roadmap built with interactive nodes. Click through
          skills, track progress, and shape your own learning path.
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
    </CardActions>
  </Card>

  <Card
    sx={{
      maxWidth: 345,
      width: { xs: 100, sm: 200, lg: 345 },
      height: "auto",
    }}
  >
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://t3.ftcdn.net/jpg/05/24/07/12/240_F_524071224_dDPBBVX44e7NCgYBP91oV5X6l9kFmj7A.jpg"
        alt="MidDev Roadmap"
      />
      <CardContent>
        <Typography gutterBottom component="div" sx={{ fontsize: "auto" }}>
          Custom Roadmap Builder
        </Typography>
        <Typography sx={{ color: "text.secondary", fontsize: "auto" }}>
          Design your own learning or project roadmap—node by node. Visualize
          progress. Connect ideas. Stay on track. Custom roadmaps, built your
          way.
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
    </CardActions>
  </Card>

  <Card
    sx={{
      maxWidth: 345,
      width: { xs: 100, sm: 200, lg: 345 },
      height: { xs: 200, sm: 200, lg: 400 },
    }}
  >
    <CardActionArea>
      <CardMedia
        component="img"
        height="auto"
        image="https://t3.ftcdn.net/jpg/05/24/07/12/240_F_524071224_dDPBBVX44e7NCgYBP91oV5X6l9kFmj7A.jpg"
        alt="Backend Dev Roadmap"
      />
      <CardContent>
        <Typography gutterBottom component="div" sx={{ fontsize: "auto" }}>
          Track Your Progress
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Visualize every step, mark what’s done, and see what’s next. Your
          path, your pace—clearly mapped.
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
    </CardActions>
  </Card>
</Grid>; */
}
