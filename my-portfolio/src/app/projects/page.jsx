import { Typography, Box, Container } from "@mui/material";

export default function ProjectsPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "white", py: 8 }}>
      <Container>
        <Typography variant="h3" textAlign="center" mb={4}>
          Projects 🚀
        </Typography>
        <Typography textAlign="center">
          Here are some of my MERN stack projects — from full-stack apps to UI/UX case studies.
        </Typography>
      </Container>
    </Box>
  );
}
