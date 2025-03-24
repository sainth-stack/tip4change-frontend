import { Card, CardContent, Typography, Link } from "@mui/material";

const DiscussionCard = () => {
  return (
    <Card
      sx={{
        width: 540,
        height: 295,
        borderRadius: 2,
        backgroundColor: "#FFFFFF",
        boxShadow: "6px 6px 54px 0px #0000000D",
        padding: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          Discussion forums FAQs
        </Typography>
        <Typography variant="subtitle2" fontWeight="bold" mt={2}>
          Discussion
        </Typography>
        <Typography variant="body1" color="text.secondary">
          “Is Sustainable Fashion The future?”
        </Typography>

        <Typography variant="subtitle2" fontWeight="bold" mt={2}>
          Recent Comments
        </Typography>
        <Typography variant="body1" color="text.secondary">
          “I Love How Brands Are Adopting Fair Trade!”
        </Typography>
      </CardContent>

      <CardContent>
        <Link href="#" underline="none" sx={{ color: "#A0A000", fontWeight: "bold" }}>
          ⤷ Join the discussion!
        </Link>
      </CardContent>
    </Card>
  );
};

export default DiscussionCard;
