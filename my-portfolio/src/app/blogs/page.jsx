import { Typography, Box, Container } from "@mui/material";

export default function BlogsPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#fafafa", py: 8 }}>
      <Container>
        <Typography variant="h3" textAlign="center" mb={4}>
          Blogs ✍️
        </Typography>
        <Typography textAlign="center" maxWidth="800px" mx="auto">
          Read my insights on MERN stack development, UI/UX design, freelancing tips,
          and modern software engineering practices.
        </Typography>
      </Container>
    </Box>
  );
}
