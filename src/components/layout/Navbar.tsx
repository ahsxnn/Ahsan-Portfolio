import {
  AppBar,
  Toolbar,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

export default function Navbar() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const navItems = ["about", "skills", "projects", "certifications", "contact"];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backdropFilter: "blur(20px)",
        background: "linear-gradient(180deg, rgba(10, 15, 25, 0.95) 0%, rgba(10, 15, 25, 0.8) 100%)",
        borderBottom: "1px solid rgba(0, 217, 255, 0.1)",
        zIndex: 1200,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", py: 1.5 }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <img
            src="/favicon.svg"
            alt="Logo"
            onClick={() => scrollTo("hero")}
            style={{
              height: "2rem",
              width: "2rem",
              cursor: "pointer",
            }}
          />
        </motion.div>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Button
                onClick={() => scrollTo(item)}
                sx={{
                  color: "inherit",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  position: "relative",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#00d9ff",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: 0,
                    width: "0%",
                    height: "2px",
                    background: "linear-gradient(90deg, #00d9ff, #ff006e)",
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                {item}
              </Button>
            </motion.div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}