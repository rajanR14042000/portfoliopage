import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Container,
  Divider,
  Fade,
  Slide,
  Zoom,
  Card,
  CardMedia,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// ----------------------------
// Skills Icons (replace with your own images placed under /public/icons)
// ----------------------------
const Icons = {
  html5: "/icons/html5.png",
  css3: "/icons/css3.png",
  js: "/icons/javascript.png",
  react: "/icons/react.png",
  redux: "/icons/redux.png",
  reactnative: "/icons/reactnative.png",
  expo: "/icons/expo.png",
  vite: "/icons/vite.png",
  nextjs: "/icons/nextjs.png",
  tailwind: "/icons/tailwindcss.png",
  materialui: "/icons/material.png",
  node: "/icons/nodejs.png",
  express: "/icons/express.png",
  mongodb: "/icons/mongodb.png",
  nginx: "/icons/nginx.png",
  figma: "/icons/figma.png",
  canva: "/icons/canva.png",
  linux: "/icons/linux.png",
  ubuntu: "/icons/ubuntu.png",
  vscode: "/icons/vscode.png",
  github: "/icons/github.png",
  postman: "/icons/postman.png",
  ec2: "/icons/EC2.png",
  s3: "/icons/s3.png",
  lottie: "/icons/lottie.png",
  framer: "/icons/framer.png",
};

// ----------------------------
// Skills Categories
// ----------------------------
const CATEGORIES = {
  Frontend: [
    { id: "html5", label: "HTML5", icon: Icons.html5 },
    { id: "css3", label: "CSS3", icon: Icons.css3 },
    { id: "js", label: "JavaScript", icon: Icons.js },
    { id: "react", label: "React", icon: Icons.react },
    { id: "redux", label: "Redux", icon: Icons.redux },
    { id: "reactnative", label: "React Native", icon: Icons.reactnative },
    { id: "expo", label: "Expo", icon: Icons.expo },
    { id: "vite", label: "Vite", icon: Icons.vite },
    { id: "nextjs", label: "Next.js", icon: Icons.nextjs },
    { id: "tailwind", label: "Tailwind CSS", icon: Icons.tailwind },
    { id: "materialui", label: "Material UI", icon: Icons.materialui },
  ],
  Backend: [
    { id: "node", label: "Node.js", icon: Icons.node },
    { id: "express", label: "Express", icon: Icons.express },
    { id: "mongodb", label: "MongoDB", icon: Icons.mongodb },
    { id: "nginx", label: "Nginx", icon: Icons.nginx },
    { id: "ec2", label: "AWS EC2", icon: Icons.ec2 },
    { id: "s3", label: "AWS S3", icon: Icons.s3 },
  ],
  Design: [
    { id: "figma", label: "Figma", icon: Icons.figma },
    { id: "canva", label: "Canva", icon: Icons.canva },
  ],
  Tools: [
    { id: "linux", label: "Linux", icon: Icons.linux },
    { id: "ubuntu", label: "Ubuntu", icon: Icons.ubuntu },
    { id: "vscode", label: "VS Code", icon: Icons.vscode },
    { id: "github", label: "GitHub", icon: Icons.github },
    { id: "postman", label: "Postman", icon: Icons.postman },
  ],
  Animation: [
    { id: "lottie", label: "Lottie", icon: Icons.lottie },
    { id: "framer", label: "Framer Motion", icon: Icons.framer },
  ],
};

// ----------------------------
// Works Section Data
// ----------------------------
const WORKS = [
  {
    id: "project1",
    title: "franchise website",
    short: "Responsive portfolio using React & MUI",
    image: "/works/fb.png",
    description:
      "This portfolio showcases my frontend and backend skills, using React, Next.js, and Material UI. Includes animations, responsive layouts, and modern design.",
    tech: ["React", "Next.js", "MUI", "Framer Motion"],
  },
  {
    id: "project2",
    title: "franchise-Consultant",
    short: "LandingPAge using React & Node.js",
    image: "/works/fb2.png",
    description:
      "A full-stack E-commerce store with Stripe integration, categories, product cart and backend API.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: "project3",
    title: "RR Traders E commerce Platform",
    short: "E commerce platform using React & Node.js",
    image: "/works/fb3.png",
    description:
      "A full-stack E-commerce store with Stripe integration, categories, product cart and backend API.",
    tech: ["React", "Express", "Socket.io", "MongoDB","next.js"],
  },
  {
    id: "project4",
    title: "Mahal Landing Page",
    short: "LandingPAge using React & Node.js",
    image: "/works/fb4.png",
    description:
      "Landing page for a startup with Stripe integration, categories, product cart and backend API.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: "project5",
    title: "Landing Page",
    short: "LandingPAge using React & Node.js",
    image: "/works/fb5.png",
    description:
      "Landing Page for a startup with Stripe integration, categories, product cart and backend API.",
    tech: ["React", "Express", "Socket.io", "MongoDB","next.js"],
  },
  {
    id: "project6",
    title: "Landing Page",
    short: "LandingPAge using React & Node.js",
    image: "/works/fb6.png",
    description:
      "Landing Page for a startup with Stripe integration, categories, product cart and backend API.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
  }
];

// ----------------------------
// Custom Hook - Reveal On Scroll
// ----------------------------
const useScrollAnimation = (ref, threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return isVisible;
};

// ----------------------------
// SkillCard
// ----------------------------
const SkillCard = ({ icon, label, id, index }) => {
  const ref = useRef(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <div ref={ref}>
      <Zoom in={isVisible} style={{ transitionDelay: `${index * 80}ms` }}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            gap: 2,
            borderRadius: 2,
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(6px)",
            color: "white",
            transition: "all .3s ease",
            "&:hover": {
              transform: "translateY(-4px) scale(1.02)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
              border: "1px solid #4F46E5",
            },
          }}
        >
          <img
            src={icon}
            alt={label}
            style={{ width: "32px", height: "32px" }}
            loading="lazy"
          />
          <Box>
            <Typography variant="subtitle1" fontWeight={600}>
              {label}
            </Typography>
            <Typography variant="caption" color="gray.400">
              {id.toUpperCase()}
            </Typography>
          </Box>
        </Paper>
      </Zoom>
    </div>
  );
};

// ----------------------------
// Skills Section
// ----------------------------
function SkillsSection() {
  return (
    <Container maxWidth="lg" sx={{ my: 8 }} id="skills">
      <Fade in timeout={1000}>
        <Typography
          variant="h3"
          fontWeight={700}
          mb={6}
          textAlign="center"
          sx={{
            background: "linear-gradient(45deg,#4F46E5,#EC4899)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Skills & Tools
        </Typography>
      </Fade>
      {Object.entries(CATEGORIES).map(([category, items], idx) => (
        <Box key={category} sx={{ mb: 6 }}>
          <Slide in direction="right" timeout={800}>
            <Typography
              variant="h5"
              fontWeight={700}
              color="white"
              gutterBottom
              sx={{
                pl: 1,
                borderLeft: "4px solid",
                borderImage:
                  "linear-gradient(to bottom,#4F46E5,#EC4899) 1",
              }}
            >
              {category}
            </Typography>
          </Slide>
          <Grid container spacing={3}>
            {items.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <SkillCard {...item} index={i} />
              </Grid>
            ))}
          </Grid>
          {idx < Object.keys(CATEGORIES).length - 1 && (
            <Divider
              sx={{
                my: 5,
                borderColor: "rgba(255,255,255,0.1)",
              }}
            />
          )}
        </Box>
      ))}
    </Container>
  );
}

// ----------------------------
// Works Section
// ----------------------------
function WorksSection() {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <Container maxWidth="lg" sx={{ my: 10 }} id="works">
      <Fade in timeout={800}>
        <Typography
          variant="h3"
          fontWeight={700}
          mb={6}
          textAlign="center"
          sx={{
            background: "linear-gradient(45deg,#EC4899,#4F46E5)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          My Works
        </Typography>
      </Fade>

      {/* Horizontal Scroll Row */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          pb: 2,
          "&::-webkit-scrollbar": { height: 6 },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(255,255,255,0.2)",
            borderRadius: 4,
          },
        }}
      >
        {WORKS.map((work, i) => (
          <Zoom key={work.id} in style={{ transitionDelay: `${i * 80}ms` }}>
            <Card
              sx={{
                minWidth: 260,
                maxWidth: 260,
                height: 340,
                borderRadius: 3,
                cursor: "pointer",
                overflow: "hidden",
                position: "relative",
                flex: "0 0 auto",
                transition: "transform 0.25s ease",
                "&:hover": { transform: "translateY(-6px) scale(1.02)" },
              }}
              onMouseEnter={() => setHoveredImage(work.image)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <CardMedia
                component="img"
                image={work.image}
                alt={work.title}
                sx={{
                  width: "100%",
                  height: "70%",
                  objectFit: "cover",
                }}
              />
              <Box sx={{ p: 2, bgcolor: "rgba(30,41,59,0.9)", height: "30%" }}>
                <Typography variant="h6" fontWeight={600} color="white">
                  {work.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="gray.400"
                  noWrap
                  sx={{ textOverflow: "ellipsis" }}
                >
                  {work.short}
                </Typography>
              </Box>
            </Card>
          </Zoom>
        ))}
      </Box>

      {/* Fullscreen Smooth Preview */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          bgcolor: "rgba(0,0,0,0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2000,
          opacity: hoveredImage ? 1 : 0,
          pointerEvents: hoveredImage ? "auto" : "none",
          transition: "opacity 0.35s ease",
        }}
      >
        {hoveredImage && (
          <Box
            component="img"
            src={hoveredImage}
            alt="preview"
            sx={{
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain",
              borderRadius: 2,
              boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
              transform: hoveredImage ? "scale(1)" : "scale(0.95)",
              transition: "transform 0.35s ease",
            }}
          />
        )}
      </Box>
    </Container>
  );
}

function WorksSection2() {
  const WORKS = [
    {
      id: "figma1",
      title: "Portfolio Website (UI/UX)",
      image: "/works/design1.png",
      link: "https://www.figma.com/design/vAv6HGR9tGjRZtKeuo8Try/Untitled?node-id=3-1040&t=Q4g4UW2Ucd2k7mBl-1", // replace with your Figma share link
    },
    {
      id: "figma2",
      title: "Blog Website Page",
      image: "/works/design2.png",
      link: "https://www.figma.com/design/wMmQj3ZUWIa4bJgnUG2gYb/BlogsPageWebsite?node-id=1-395&t=PtQhV7iQdwSYnVq4-1",
    },

  ];

  return (
    <Container maxWidth="lg" sx={{ my: 10 }} id="works">
      <Fade in timeout={800}>
        <Typography
          variant="h3"
          fontWeight={700}
          mb={6}
          textAlign="center"
          sx={{
            background: "linear-gradient(45deg,#EC4899,#4F46E5)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          My Works (Figma Designs)
        </Typography>
      </Fade>

      <Grid container spacing={4}>
        {WORKS.map((work, i) => (
          <Grid item xs={12} sm={6} md={4} key={work.id}>
            <Zoom in style={{ transitionDelay: `${i * 120}ms` }}>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 3,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
                  cursor: "pointer",
                  "&:hover img": {
                    transform: "scale(1.1)",
                  },
                  "&:hover .overlay": {
                    opacity: 1,
                  },
                }}
                onClick={() => window.open(work.link, "_blank")}
              >
                {/* Thumbnail Image */}
                <Box
                  component="img"
                  src={work.image}
                  alt={work.title}
                  sx={{
                    width: "100%",
                    height: 250,
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />

                {/* Hover Overlay */}
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "rgba(0,0,0,0.6)",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                  }}
                >
                  <img
                    src="/icons/figma.png" // your Figma logo
                    alt="Figma"
                    style={{ width: 40, height: 40, marginBottom: 12 }}
                  />
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    color="white"
                    sx={{ textAlign: "center", px: 1 }}
                  >
                    View in Figma
                  </Typography>
                </Box>
              </Box>
            </Zoom>

            <Typography
              variant="subtitle1"
              fontWeight={600}
              color="white"
              mt={2}
              textAlign="center"
            >
              {work.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}


// ----------------------------
// Overview Content
// ----------------------------
export function OverviewContent({ children }) {
  return (
  <>
    <Typography
          variant="h3"
          fontWeight={800}
          gutterBottom
          sx={{
            background: "linear-gradient(45deg,#4F46E5,#EC4899)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textAlign:'center'
          }}
        >
          About Me
        </Typography>
        <Typography variant="body1"m={8} sx={{ lineHeight: 1.8,textAlign:'flex-start' ,color:'white'}}>
          {children}
        </Typography></>
  );
}

// ----------------------------
// Floating Bottom Nav
// ----------------------------
const FloatingNav = () => {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "works"];
      let current = "about";
      sections.forEach((s) => {
        const el = document.getElementById(s);
        if (el && el.getBoundingClientRect().top - 140 <= 0) current = s;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        bgcolor: "rgba(255, 255, 255, 0.8)",
        border: "1px solid rgba(255,255,255,0.1)",
        p: 1,
        borderRadius: 3,
        gap: 1,
        zIndex: 1100,
        backdropFilter: "blur(10px)",
      }}
    >
      {["about", "skills", "works"].map((s) => (
        <Box
          key={s}
          onClick={() => scrollTo(s)}
          sx={{
            px: 2,
            py: 1,
            borderRadius: 1,
            cursor: "pointer",
            bgcolor: active === s ? "linear-gradient(45deg,#4F46E5,#EC4899)" : "transparent",
            color: active === s ? "blue" : "gray.300",
            fontWeight: 600,
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.1)",
            },
          }}
        >
          {s.charAt(0).toUpperCase() + s.slice(1)}
        </Box>
      ))}
    </Box>
  );
};

// ----------------------------
// Main Page Component
// ----------------------------
export default function ProfileOverview() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom,#0f172a,#1e293b)",
        pb: 8,
      }}
    >
      <OverviewContent>
        I am a full-stack developer specializing in frontend (React, Next.js,
        Vite, Redux, React Native, Expo), backend (Node.js, Express, MongoDB),
        design (Figma, Canva), cloud tools (AWS EC2/S3), and dev software
        (Linux, Ubuntu, VS Code, GitHub, Postman). I also use animation
        libraries like Lottie and Framer Motion.
      </OverviewContent>
      <SkillsSection />
      <WorksSection />
      <WorksSection2 />
      <FloatingNav />
    </Box>
  );
}
