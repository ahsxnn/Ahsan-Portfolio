import { Box, Container, Typography, Chip, Grid } from "@mui/material";
import { motion } from "framer-motion";

const skillsData = {
  "Backend": ["ASP.NET Core", "C#", "SQL Server", "JWT Authentication", "RESTful APIs"],
  "Frontend": ["React", "TypeScript", "Redux Toolkit", "Material UI", "Responsive Design"],
  "Architecture": ["Clean Architecture", "Scalable Systems", "Design Patterns", "Microservices"],
};

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        py: 15,
        background: "linear-gradient(180deg, transparent 0%, rgba(0, 217, 255, 0.05) 100%)",
      }}
    >
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              mb: 1,
              fontWeight: 700,
              background: "linear-gradient(135deg, #00d9ff 0%, #0099cc 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Skills & Expertise
          </Typography>
          <Box sx={{ width: 60, height: 4, background: "linear-gradient(90deg, #00d9ff, #ff006e)", borderRadius: 2, mb: 6 }} />
        </motion.div>

        <Grid
          container
          spacing={4}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            alignItems: "stretch",
          }}
        >
          {Object.entries(skillsData).map(([category, skills], catIndex) => (
            <Box
              key={category}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                minHeight: 280,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: catIndex * 0.1 }}
                style={{ display: "flex", flexDirection: "column", height: "100%" }}
              >
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #00d9ff 0%, #0099cc 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 2.5,
                  }}
                >
                  {category}
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, alignContent: "flex-start" }}>
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: (catIndex * skills.length + index) * 0.05 }}
                    >
                      <Chip
                        label={skill}
                        sx={{
                          background: "rgba(0, 217, 255, 0.1)",
                          border: "1px solid rgba(0, 217, 255, 0.3)",
                          color: "#00d9ff",
                          fontWeight: 500,
                          fontSize: "0.95rem",
                          px: 1.5,
                          py: 2.5,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            borderColor: "#00d9ff",
                            background: "rgba(0, 217, 255, 0.2)",
                            boxShadow: "0 8px 20px rgba(0, 217, 255, 0.25)",
                            transform: "translateY(-2px)",
                          },
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}