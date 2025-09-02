"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/profileLogo.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box sx={{ width: 250, p: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <Image
          src={Logo}
          alt="Logo"
          width={40}
          height={40}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
        <Typography variant="h6" fontWeight="bold">
          Rajan
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", flexDirection: "column", mt: 2, gap: 1 }}>
        {navItems.map((item) => (
          <Button
            key={item.name}
            component={Link}
            href={item.href}
            sx={{
              justifyContent: "flex-start",
              fontWeight: 600,
              color: "black",
              textTransform: "none",
              "&:hover": { color: "primary.main" },
            }}
          >
            {item.name}
          </Button>
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{ background: "rgba(0,0,0,1)" }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Image
                src={Logo}
                alt="Logo"
                width={40}
                height={40}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
              <Typography variant="h6" fontWeight="bold" sx={{ color: "white" }}>
                Rajan
              </Typography>
            </Box>

            {/* Desktop Links */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  href={item.href}
                  sx={{ color: "white", fontWeight: 600, textTransform: "none" }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu */}
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
