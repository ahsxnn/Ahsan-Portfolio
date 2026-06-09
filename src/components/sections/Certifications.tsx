import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";

const certifications = [
  {
    title: "Google Project Management Professional Certificate",
    issuer: "Google",
    skills: [
      "Project Planning",
      "Agile Methodology",
      "Scrum Framework",
      "Risk Management",
      "Stakeholder Communication",
    ],
  },
  {
    title: "Design Thinking",
    issuer: "HP LIFE",
    skills: [
      "Human-Centered Design",
      "Problem Solving",
      "Ideation",
      "Prototyping",
      "Innovation Strategy",
    ],
  },
  {
    title: "Professional Networking for Career Growth",
    issuer: "HP LIFE",
    skills: [
      "Networking Strategies",
      "Career Development",
      "Personal Branding",
      "Communication Skills",
      "Professional Growth",
    ],
  },
];

export default function Certifications() {
  return (
    <Box
      id="certifications"
      sx={{
        py: 15,
        background:
          "linear-gradient(180deg, rgba(0, 217, 255, 0.05) 0%, transparent 100%)",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
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
            Certifications
          </Typography>

          <Box
            sx={{
              width: 60,
              height: 4,
              background: "linear-gradient(90deg, #00d9ff, #ff006e)",
              borderRadius: 2,
              mb: 6,
            }}
          />
        </motion.div>

        <Grid container spacing={3}>
          {certifications.map((cert, index) => (
            <Grid size={{ xs: 12 }} key={index}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    background: "linear-gradient(135deg, rgba(17, 24, 39, 0.6) 0%, rgba(17, 24, 39, 0.3) 100%)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(0, 217, 255, 0.2)",
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "rgba(0, 217, 255, 0.6)",
                      boxShadow: "0 20px 50px rgba(0, 217, 255, 0.15)",
                      transform: "translateY(-8px)",
                      background: "linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(17, 24, 39, 0.5) 100%)",
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        alignItems: "flex-start",
                        mb: 2,
                      }}
                    >
                      <SchoolIcon
                        sx={{
                          color: "#00d9ff",
                          fontSize: "2.5rem",
                        }}
                      />

                      <Box sx={{ flex: 1 }}>
                        <Typography
                          sx={{
                            fontSize: "1.3rem",
                            fontWeight: 600,
                            background: "linear-gradient(135deg, #00d9ff 0%, #0099cc 100%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            mb: 0.5,
                          }}
                        >
                          {cert.title}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#b0b9c6",
                            fontWeight: 500,
                          }}
                        >
                          Issued by {cert.issuer}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1.5,
                        mt: 3,
                      }}
                    >
                      {cert.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          sx={{
                            background: "rgba(0, 217, 255, 0.1)",
                            border: "1px solid rgba(0, 217, 255, 0.3)",
                            color: "#00d9ff",
                            fontWeight: 500,
                            transition: "all 0.3s ease",
                            "&:hover": {
                              background: "rgba(0, 217, 255, 0.2)",
                              borderColor: "rgba(0, 217, 255, 0.6)",
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}