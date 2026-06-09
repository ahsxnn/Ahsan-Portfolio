import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import ArrowDownIcon from "@mui/icons-material/ArrowDownward";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(135deg, #0a0f1c 0%, #1a1f3a 50%, #0a0f1c 100%)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255, 0, 110, 0.1) 0%, transparent 50%)",
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "3rem", md: "5rem" },
                mb: 2,
                letterSpacing: "-0.02em",
              }}
            >
              Ahsan Javed
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.2rem", md: "1.8rem" },
                background: "linear-gradient(90deg, #00d9ff 0%, #ff006e 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 600,
                mb: 3,
              }}
            >
              Full-Stack Developer | Always Curious
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              sx={{
                fontSize: "1.1rem",
                maxWidth: 700,
                mx: "auto",
                color: "#b0b9c6",
                mb: 4,
                lineHeight: 1.8,
              }}
            >
              Crafting scalable, secure, and elegant solutions with ASP.NET Core, React & TypeScript.
              Passionate about building innovative solutions and modern web development.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
              <Button
                variant="contained"
                onClick={() => scrollTo("projects")}
                sx={{
                  background: "linear-gradient(135deg, #00d9ff 0%, #0099cc 100%)",
                  color: "#0a0f1c",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderRadius: "50px",
                  boxShadow: "0 10px 30px rgba(0, 217, 255, 0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 20px 50px rgba(0, 217, 255, 0.5)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                View Projects
              </Button>

              <Button
                variant="outlined"
                onClick={() => {
                  const a = document.createElement("a");
                  a.href = "/AhsanCV.pdf";
                  a.download = "AhsanCV.pdf";
                  a.click();
                }}
                sx={{
                  borderColor: "#00d9ff",
                  color: "#00d9ff",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderRadius: "50px",
                  boxShadow: "0 0 20px rgba(0, 217, 255, 0.2)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "#ff006e",
                    color: "#ff006e",
                    boxShadow: "0 0 30px rgba(255, 0, 110, 0.4)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                Download Resume
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      >
        <ArrowDownIcon sx={{ color: "#00d9ff", fontSize: "2rem" }} />
      </motion.div>
    </Box>
  );
}