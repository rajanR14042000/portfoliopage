"use client";

import { motion } from "framer-motion";
import {
  Typography,
  Box,
  Container,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import Image from "next/image";
import { useState, useEffect } from "react";

// Bubble component for the floating animation
const Bubble = ({ size, left, delay, duration }) => {
  return (
    <motion.div
      style={{
        position: "absolute",
        width: size,
        height: size,
        left: left,
        borderRadius: "50%",
        background: "rgba(181, 245, 21, 0.98)",
        zIndex: 2,
      }}
      initial={{ bottom: "-10%", opacity: 0 }}
      animate={{ 
        bottom: "110%", 
        opacity: [0, 0.5, 0],
        scale: [1, 1.2, 1] 
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
};

export default function HeroBanner() {
  const [isMounted, setIsMounted] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, when: "beforeChildren" },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
    hover: { scale: 1.05, rotate: 2 },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  const floatingShapeVariant = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Generate bubbles for the background
  const generateBubbles = () => {
    const bubbles = [];
    const count = isMobile ? 10 : 15;
    
    for (let i = 0; i < count; i++) {
      bubbles.push(
        <Bubble
          key={i}
          size={`${Math.random() * 30 + 10}px`}
          left={`${Math.random() * 100}%`}
          delay={Math.random() * 5}
          duration={Math.random() * 10 + 10}
        />
      );
    }
    return bubbles;
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(/Herobanner.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
      id="home"
    >
      {/* Overlay for contrast */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.55)",
          zIndex: 1,
        }}
      />

      {/* Bubble effects */}
      {isMounted && generateBubbles()}

      {/* Floating shapes for visual interest */}
      {isMounted && !isMobile && (
        <>
          <motion.div
            style={{
              position: "absolute",
              top: "20%",
              left: "5%",
              width: "80px",
              height: "80px",
              border: "3px solid rgba(33, 150, 243, 0.4)",
              borderRadius: "15px",
              zIndex: 2,
            }}
            variants={floatingShapeVariant}
            initial="animate"
            animate="animate"
          />
          <motion.div
            style={{
              position: "absolute",
              bottom: "30%",
              right: "10%",
              width: "60px",
              height: "60px",
              border: "3px solid rgba(76, 175, 80, 0.4)",
              borderRadius: "10px",
              rotate: "45deg",
              zIndex: 2,
            }}
            variants={floatingShapeVariant}
            initial="animate"
            animate="animate"
            transition={{ delay: 1, duration: 7 }}
          />
        </>
      )}

      <Container sx={{ position: "relative", zIndex: 3 }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          direction={isTablet ? "column-reverse" : "row"}
        >
          {/* LEFT SIDE - Profile Image */}
          <Grid item xs={12} md={5}>
            <motion.div
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              style={{ display: "flex", justifyContent: "center", position: "relative" }}
            >
              <Image
                src='/profileLogo.png'
                alt="Profile"
                width={isMobile ? 250 : 300}
                height={isMobile ? 250 : 300}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0 12px 30px rgba(33, 150, 243, 0.4)",
                  border: "4px solid #2196f3",
                }}
              />
              
              {/* Decorative element */}
              {!isMobile && (
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                    width: 60,
                    height: 60,
                    border: "3px solid #2196f3",
                    borderRadius: "10px",
                    zIndex: -1,
                  }}
                />
              )}
            </motion.div>
          </Grid>

          {/* RIGHT SIDE - Text + Buttons */}
          <Grid item xs={12} md={7}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Heading */}
              <motion.div variants={textVariant}>
                <Typography
                  variant={isMobile ? "h4" : "h2"}
                  fontWeight="bold"
                  mt={isMobile ? 10 : 0}
                  ml={isMobile ? 2 : 0}
                  sx={{
                    color: "white",
                    textShadow: "2px 2px 12px rgba(0,0,0,0.7)",
                    mb: 1,

                    textAlign: isTablet ? "center" : "left",
                  }}
                >
                  Hi, I'm <span style={{ color: "#2196f3" }}>Rajan</span>👋
                </Typography>
              </motion.div>

              {/* Professional Title */}
              <motion.div variants={textVariant}>
                <Typography
                  variant={isMobile ? "h5" : "h4"}
                  sx={{
                    color: "#bb86fc",
                    fontWeight: 600,
                    mb: 3,
                    textShadow: "1px 1px 8px rgba(0,0,0,0.6)",
                    textAlign: isTablet ? "center" : "left",
                  }}
                >
                  Full Stack Developer
                </Typography>
              </motion.div>

              {/* Professional Summary */}
              <motion.div variants={textVariant}>
                <Typography
                  variant={isMobile ? "body1" : "h6"}
                  sx={{
                    mt: 2,
                    mb: 4,
                    color: "#e0e0e0",
                    textShadow: "1px 1px 6px rgba(0,0,0,0.6)",
                    maxWidth: "600px",
                    lineHeight: 1.6,
                    textAlign: isTablet ? "center" : "left",
                  }}
                >
                  I specialize in building responsive, high-performance web applications using the MERN stack. 
                  With expertise in both frontend and backend development, I create seamless digital experiences 
                  that solve real-world problems.
                </Typography>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={textVariant}
                style={{ 
                  display: "flex", 
                  gap: "16px", 
                  flexWrap: "wrap", 
                  marginBottom: "24px",
                  justifyContent: isTablet ? "center" : "flex-start" 
                }}
              >
                <motion.div
                  variants={buttonVariant}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    variant="contained"
                    size={isMobile ? "medium" : "large"}
                    onClick={handleContactClick}
                    sx={{
                      backgroundColor: "#2196f3",
                      px: isMobile ? 3 : 4,
                      py: 1,
                      fontSize: isMobile ? "1rem" : "1.1rem",
                      fontWeight: 600,
                      "&:hover": {
                        backgroundColor: "#1976d2",
                      },
                    }}
                  >
                    Contact Me
                  </Button>
                </motion.div>
                
                <motion.div
                  variants={buttonVariant}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    variant="outlined"
                    size={isMobile ? "medium" : "large"}
                    startIcon={<DownloadIcon />}
                    sx={{
                      color: "white",
                      borderColor: "white",
                      px: isMobile ? 3 : 4,
                      py: 1,
                      fontSize: isMobile ? "1rem" : "1.1rem",
                      fontWeight: 600,
                      "&:hover": {
                        borderColor: "#2196f3",
                        backgroundColor: "rgba(33, 150, 243, 0.1)",
                      },
                    }}
                  >
                    Resume
                  </Button>
                </motion.div>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                variants={textVariant}
                style={{ 
                  display: "flex", 
                  gap: "12px",
                  justifyContent: isTablet ? "center" : "flex-start" 
                }}
              >
                <motion.div
                  variants={buttonVariant}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      minWidth: "auto",
                      width: isMobile ? "48px" : "56px",
                      height: isMobile ? "48px" : "56px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      "&:hover": {
                        backgroundColor: "rgba(33, 150, 243, 0.2)",
                      },
                    }}
                    href="https://github.com"
                    target="_blank"
                  >
                    <GitHubIcon sx={{ color: "white", fontSize: isMobile ? "1.5rem" : "inherit" }} />
                  </Button>
                </motion.div>
                
                <motion.div
                  variants={buttonVariant}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      minWidth: "auto",
                      width: isMobile ? "48px" : "56px",
                      height: isMobile ? "48px" : "56px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      "&:hover": {
                        backgroundColor: "rgba(33, 150, 243, 0.2)",
                      },
                    }}
                    href="https://linkedin.com"
                    target="_blank"
                  >
                    <LinkedInIcon sx={{ color: "white", fontSize: isMobile ? "1.5rem" : "inherit" }} />
                  </Button>
                </motion.div>
                
                <motion.div
                  variants={buttonVariant}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      minWidth: "auto",
                      width: isMobile ? "48px" : "56px",
                      height: isMobile ? "48px" : "56px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      "&:hover": {
                        backgroundColor: "rgba(33, 150, 243, 0.2)",
                      },
                    }}
                    href="mailto:rajan@example.com"
                  >
                    <EmailIcon sx={{ color: "white", fontSize: isMobile ? "1.5rem" : "inherit" }} />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}