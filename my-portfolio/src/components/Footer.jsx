"use client";

import React from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

export default function Footer() {
  return (
  <>
   {/* Bottom copyright */}
        <Box textAlign="center" mt={3}>
          <Typography variant="body2">
            © {new Date().getFullYear()} My Portfolio | All rights reserved
          </Typography>
        </Box>
  </>
  );
}
