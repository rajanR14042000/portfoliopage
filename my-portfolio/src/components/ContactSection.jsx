"use client";

import { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Container,
  Button,
  TextField,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

export default function ContactPage() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [animationData, setAnimationData] = useState(null);

  // Load animation dynamically
  useEffect(() => {
    let mounted = true;
    fetch("/register.json")
      .then((res) => res.json())
      .then((data) => {
        if (mounted) setAnimationData(data);
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Add email sending logic (EmailJS, Formspree, API)
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #0a192f, #0d1e38, #0f243f)",
        py: { xs: 6, md: 0 },
        px: { xs: 2, sm: 4 },
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow & Overlays */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `
            radial-gradient(circle at 20% 20%, rgba(41, 126, 237, 0.15) 0%, transparent 20%),
            radial-gradient(circle at 80% 80%, rgba(106, 27, 186, 0.15) 0%, transparent 20%)
          `,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <Typography
            variant="h2"
            component="h1"
            fontWeight={800}
            sx={{
              background: "linear-gradient(135deg, #64b5f6 0%, #9575cd 50%, #64b5f6 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              mb: 2,
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem" },
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#a8b2d1",
              fontWeight: 400,
              maxWidth: "600px",
              mx: "auto",
              fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.25rem" },
            }}
          >
            Let's discuss your next project and bring your ideas to life with cutting-edge solutions.
          </Typography>
        </motion.div>

        {/* Content Grid */}
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="center"
        >
          {/* LEFT SIDE - Animation */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textAlign: "center" }}
            >
              {animationData && (
                <Lottie
                  animationData={animationData}
                  loop
                  autoplay
                  style={{
                    width: "100%",
                    maxWidth: 500,
                    height: isSm ? 220 : 400,
                    margin: "0 auto",
                  }}
                />
              )}
            </motion.div>
          </Grid>

          {/* RIGHT SIDE - Contact Form */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h5"
                fontWeight={700}
                mb={3}
                sx={{ color: "#64b5f6", textAlign: "center" }}
              >
                Send a Message
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
  <TextField
    fullWidth
    label="Your Name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    margin="normal"
    required
    InputProps={{
      style: { color: "white" }, // input text color
    }}
    InputLabelProps={{
      style: { color: "rgba(255,255,255,0.7)" }, // label color
    }}
    sx={{
      "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "rgba(255,255,255,0.5)" },
        "&:hover fieldset": { borderColor: "white" },
        "&.Mui-focused fieldset": { borderColor: "white" },
      },
    }}
  />
  <TextField
    fullWidth
    label="Email Address"
    name="email"
    type="email"
    value={formData.email}
    onChange={handleChange}
    margin="normal"
    required
    InputProps={{
      style: { color: "white" },
    }}
    InputLabelProps={{
      style: { color: "rgba(255,255,255,0.7)" },
    }}
    sx={{
      "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "rgba(255,255,255,0.5)" },
        "&:hover fieldset": { borderColor: "white" },
        "&.Mui-focused fieldset": { borderColor: "white" },
      },
    }}
  />
  <TextField
    fullWidth
    label="Your Message"
    name="message"
    value={formData.message}
    onChange={handleChange}
    margin="normal"
    required
    multiline
    rows={4}
    InputProps={{
      style: { color: "white" },
    }}
    InputLabelProps={{
      style: { color: "rgba(255,255,255,0.7)" },
    }}
    sx={{
      "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "rgba(255,255,255,0.5)" },
        "&:hover fieldset": { borderColor: "white" },
        "&.Mui-focused fieldset": { borderColor: "white" },
      },
    }}
  />

  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    style={{ marginTop: "2rem" }}
  >
    <Button
      type="submit"
      variant="contained"
      size="large"
      fullWidth
      sx={{
        py: 1.5,
        borderRadius: 2,
        fontWeight: 700,
        textTransform: "none",
        fontSize: "1.1rem",
        background: "linear-gradient(45deg, #1976d2 0%, #4791db 100%)",
        "&:hover": {
          background: "linear-gradient(45deg, #1565c0 0%, #1976d2 100%)",
        },
      }}
    >
      Send Message
    </Button>
  </motion.div>
</Box>

            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
