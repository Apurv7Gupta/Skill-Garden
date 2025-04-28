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
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          gap: { lg: 5, xs: 1, sm: 4, md: 8 },
          p: { xs: 1, sm: 4, md: 8 },
          justifyContent: "space-between",
        }}
      >
        {[
          {
            title: "Interactive Visual Paths",
            desc: "Explore this roadmap built with interactive nodes. Click through skills, track progress, and shape your own learning path.",
            img: "https://t3.ftcdn.net/jpg/05/24/07/12/240_F_524071224_dDPBBVX44e7NCgYBP91oV5X6l9kFmj7A.jpg",
          },
          {
            title: "Custom Roadmap Builder",
            desc: "Design your own learning or project roadmap—node by node. Visualize progress. Connect ideas. Stay on track. Custom roadmaps, built your way.",
            img: "https://t3.ftcdn.net/jpg/05/24/07/12/240_F_524071224_dDPBBVX44e7NCgYBP91oV5X6l9kFmj7A.jpg",
          },
          {
            title: "Track Your Progress",
            desc: "Visualize every step, mark what’s done, and see what’s next. Your path, your pace—clearly mapped.",
            img: "https://t3.ftcdn.net/jpg/05/24/07/12/240_F_524071224_dDPBBVX44e7NCgYBP91oV5X6l9kFmj7A.jpg",
          },
        ].map((card, index) => (
          <Card
            key={index}
            sx={{
              flexShrink: 1,
              width: "100%",
              maxWidth: { xs: 180, sm: 250, md: 300 },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ width: "auto" }}
                image={card.img}
                alt={card.title}
              />
              <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "1rem", md: "1.25rem" }, // smaller title
                    fontWeight: "bold",
                  }}
                  component="div"
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.35rem", sm: "0.8rem", md: "0.9rem" }, //compact body text
                  }}
                >
                  {card.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Container>
    </>
  );
}
