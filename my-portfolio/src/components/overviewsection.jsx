"use client";

import { Box, Typography, Button, Stack, Chip, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Cloud";
import WorkIcon from "@mui/icons-material/Work";

export default function Overview() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: { xs: 10, md: 14 },
        px: 3,
        textAlign: "center",
        bgcolor: "black",
        overflow: "hidden",
        color: "#fff",
      }}
    >
      {/* Spotlight + Background Glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, rgba(59,130,246,0.15), transparent 70%)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: -150,
          left: -150,
          width: 400,
          height: 400,
          bgcolor: "purple",
          opacity: 0.25,
          borderRadius: "50%",
          filter: "blur(120px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -150,
          right: -150,
          width: 400,
          height: 400,
          bgcolor: "pink",
          opacity: 0.2,
          borderRadius: "50%",
          filter: "blur(120px)",
        }}
      />

      {/* Title */}
      <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Hi, I’m{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(90deg, #60a5fa, #a855f7, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Rajan
          </Box>
        </Typography>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
        <Typography variant="h5" color="grey.300" gutterBottom>
          Full Stack Developer • Problem Solver • Tech Enthusiast
        </Typography>
      </motion.div>

      {/* Key Highlights */}
      <Grid container spacing={3} justifyContent="center" sx={{ my: 6, zIndex: 2, position: "relative" }}>
        <Grid item xs={12} md={3}>
          <Paper elevation={6} sx={{ p: 3, bgcolor: "rgba(255,255,255,0.05)", borderRadius: 4 }}>
            <SchoolIcon sx={{ fontSize: 40, color: "#60a5fa" }} />
            <Typography color="white" variant="h6" fontWeight="bold" mt={2}>
              Education
            </Typography>
            <Typography variant="body2" color="grey.400">
              Passionate learner with strong fundamentals in Computer Science & MERN development.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={6} sx={{ p: 3, bgcolor: "rgba(255,255,255,0.05)", borderRadius: 4 }}>
            <CodeIcon sx={{ fontSize: 40, color: "#a855f7" }} />
            <Typography variant="h6" color="white" fontWeight="bold" mt={2}>
              Development
            </Typography>
            <Typography variant="body2" color="grey.400">
              Experienced with MERN, Next.js, TypeScript, and modern UI frameworks.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={6} sx={{ p: 3, bgcolor: "rgba(255,255,255,0.05)", borderRadius: 4 }}>
            <CloudIcon sx={{ fontSize: 40, color: "#22d3ee" }} />
            <Typography variant="h6" fontWeight="bold" color="white" mt={2}>
              DevOps
            </Typography>
            <Typography variant="body2" color="grey.400">
              Hands-on with Docker, K8s, AWS, and GitHub Actions for cloud solutions & CI/CD pipelines.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={6} sx={{ p: 3, bgcolor: "rgba(255,255,255,0.05)", borderRadius: 4 }}>
            <WorkIcon sx={{ fontSize: 40, color: "#f43f5e" }} />
            <Typography variant="h6" fontWeight="bold" mt={2} color="white">
              Opportunities
            </Typography>
            <Typography variant="body2" color="grey.400">
              Open for internships, freelance projects, and full-time developer roles.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Buttons */}
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
        <Stack direction="row" spacing={3} justifyContent="center">
          <Button
            href="/Rajan_Resume (4).pdf"
            target="_blank"
            size="large"
            variant="contained"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "50px",
              background: "linear-gradient(90deg, #3b82f6, #9333ea)",
              "&:hover": { background: "linear-gradient(90deg, #2563eb, #7e22ce)" },
            }}
          >
            📄 Resume
          </Button>
          
        </Stack>
      </motion.div>
    </Box>
  );
}
