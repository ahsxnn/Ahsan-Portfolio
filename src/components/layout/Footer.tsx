import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background:
          "linear-gradient(180deg, rgba(0, 217, 255, 0.05) 0%, rgba(10, 15, 25, 0.95) 100%)",
        borderTop: "1px solid rgba(0, 217, 255, 0.1)",
        pt: 8,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* About */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "#00d9ff",
                  mb: 1,
                }}
              >
                Ahsan Javed
              </Typography>

              <Typography
                sx={{
                  color: "#b0b9c6",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                }}
              >
                Full-Stack Developer crafting scalable web applications with
                ASP.NET Core, React, TypeScript, and SQL Server.
              </Typography>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  color: "#00d9ff",
                  mb: 2,
                }}
              >
                Quick Links
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                {["about", "skills", "projects", "contact"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item}`}
                    underline="none"
                    sx={{
                      color: "#b0b9c6",
                      width: "fit-content",
                      transition: "0.3s ease",
                      "&:hover": {
                        color: "#00d9ff",
                        transform: "translateX(4px)",
                      },
                    }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Tech Stack */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  color: "#ff006e",
                  mb: 2,
                }}
              >
                Tech Stack
              </Typography>

              <Typography
                sx={{
                  color: "#b0b9c6",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                }}
              >
                ASP.NET Core • React • TypeScript • Material UI • Redux Toolkit
                • SQL Server
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box
          sx={{
            borderTop: "1px solid rgba(0, 217, 255, 0.1)",
            pt: 4,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#b0b9c6",
              fontSize: "0.95rem",
            }}
          >
            © {currentYear} Ahsan Javed. All Rights Reserved.
          </Typography>

          <Typography
            sx={{
              mt: 1,
              fontSize: "0.85rem",
              color: "#6b7280",
            }}
          >
            Designed & Built with React, TypeScript, Material UI & Framer Motion
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}