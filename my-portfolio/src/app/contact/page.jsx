import { Typography, Box, Container, Button } from "@mui/material";

export default function ContactPage() {
  return (
    <Box sx={{ minHeight: "70vh", bgcolor: "#e0f7fa", py: 8 }}>
      <Container>
        <Typography variant="h3" textAlign="center" mb={4}>
          Contact Me 📩
        </Typography>
        <Typography textAlign="center" mb={3}>
          Let’s build something amazing together. Reach me via email or LinkedIn.
        </Typography>
        <Box textAlign="center">
          <Button
            variant="contained"
            color="primary"
            href="mailto:your@email.com"
            size="large"
          >
            Send Email
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
