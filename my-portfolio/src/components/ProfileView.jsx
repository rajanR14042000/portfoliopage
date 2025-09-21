import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Container,
  Divider,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
  Zoom,
  Dialog,
  DialogContent,
  IconButton,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// import your previous sections (OverviewContent, SkillsSection, FloatingNav, etc.)
// I’ll focus here on WorksSection 👇

// ----------------------------
// Works Data
// ----------------------------


// ----------------------------
// WorksSection
// ----------------------------


// ----------------------------
// Page Component
// ----------------------------
export default function ProfileOverview() {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(to bottom, #0f172a, #1e293b)",
          p: 3,
          pt: 8,
          pb: 8,
        }}
      >
        {/* About Section */}
        <div id="about">
          {/* Use your OverviewContent component */}
        </div>

        {/* Skills Section */}
        <div id="skills">
          {/* Use your SkillsSection component */}
        </div>

        {/* Works Section */}
        <WorksSection />
      </Box>
      {/* Use your FloatingNav component if you want nav links also */}
    </>
  );
}
