import { Typography, Box, Container } from "@mui/material";

export default function AboutPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", py: 8 }}>
      <Container>
        <Typography variant="h3" textAlign="center" mb={4}>
          About Me
        </Typography>
        <Typography textAlign="center" maxWidth="800px" mx="auto">
          I am a MERN Stack Developer and UI/UX Designer. I build scalable apps
          and modern web solutions with React, Node, Express, and MongoDB.
        </Typography>
      </Container>
    </Box>
  );
}
