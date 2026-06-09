import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { motion } from "framer-motion";

import CodeIcon from "@mui/icons-material/Code";
import BuildIcon from "@mui/icons-material/Build";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import GroupsIcon from "@mui/icons-material/Groups";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const stats = [
  {
    icon: CodeIcon,
    label: "Clean Code",
    desc: "Writing maintainable, scalable, production-ready code using SOLID principles",
  },
  {
    icon: ArchitectureIcon,
    label: "System Design",
    desc: "Designing layered architectures with Clean Architecture (ASP.NET Core + React)",
  },
  {
    icon: ManageAccountsIcon,
    label: "Project Management",
    desc: "Google-certified in project management with experience in planning & execution",
  },
  {
    icon: GroupsIcon,
    label: "Team Collaboration",
    desc: "Working in cross-functional teams and aligning backend & frontend workflows",
  },
  {
    icon: BuildIcon,
    label: "Full-Stack Development",
    desc: "Building complete systems using ASP.NET Core, React, Redux Toolkit & SQL Server",
  },
  {
    icon: EmojiObjectsIcon,
    label: "Problem Solving",
    desc: "Turning complex business requirements into clean technical solutions",
  },
];

export default function About() {
  return (
    <Box
      id="about"
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
          <Typography variant="h4" gutterBottom sx={{ mb: 1 }}>
            About Me
          </Typography>

          <Box
            sx={{
              width: 60,
              height: 4,
              background: "linear-gradient(90deg, #00d9ff, #ff006e)",
              borderRadius: 2,
              mb: 4,
            }}
          />
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 6, alignItems: "stretch" }}>
          {/* Left Side */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ display: "flex", width: "100%" }}
            >
              <Card
                sx={{
                  background: "rgba(17, 24, 39, 0.8)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(0, 217, 255, 0.2)",
                  borderRadius: 3,
                  p: 3,
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      color: "#b0b9c6",
                      lineHeight: 1.8,
                      fontSize: "1.05rem",
                      mb: 2,
                    }}
                  >
                    I am{" "}
                    <Box component="span" sx={{ color: "#00d9ff", fontWeight: 600 }}>
                      Ahsan Javed
                    </Box>
                    , a passionate Full-Stack Software Developer with a strong focus on building scalable, maintainable, and enterprise-level applications. I specialize in modern web technologies including{" "}
                    <Box component="span" sx={{ color: "#ff006e", fontWeight: 600 }}>
                      ASP.NET Core, React
                    </Box>{" "}
                    and{" "}
                    <Box component="span" sx={{ color: "#00d9ff", fontWeight: 600 }}>
                      TypeScript
                    </Box>
                    .
                  </Typography>

                  <Typography
                    sx={{
                      color: "#b0b9c6",
                      lineHeight: 1.8,
                      fontSize: "1.05rem",
                      mb: 2,
                    }}
                  >
                    My expertise lies in designing and implementing Clean Architecture principles, ensuring that every system I build is modular, testable, and easy to maintain as it grows. I have a strong understanding of backend development, including RESTful APIs, authentication systems, and database design.
                  </Typography>

                  <Typography
                    sx={{
                      color: "#b0b9c6",
                      lineHeight: 1.8,
                      fontSize: "1.05rem",
                      mb: 2,
                    }}
                  >
                    On the frontend, I build responsive and interactive interfaces using React, TypeScript, and modern UI libraries. I focus on smooth user experiences with clean code, reusable components, and optimized performance.
                  </Typography>

                  <Typography
                    sx={{
                      color: "#b0b9c6",
                      lineHeight: 1.8,
                      fontSize: "1.05rem",
                    }}
                  >
                    I'm always eager to learn new technologies, improve my skills, and take on challenging projects that push my limits as a developer.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Right Side */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, width: "100%" }}>
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        background: "rgba(17, 24, 39, 0.6)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(0, 217, 255, 0.2)",
                        borderRadius: 3,
                        p: 2.5,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "rgba(0, 217, 255, 0.5)",
                          boxShadow: "0 10px 30px rgba(0, 217, 255, 0.15)",
                          transform: "translateY(-4px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          alignItems: "flex-start",
                        }}
                      >
                        <Icon sx={{ color: "#00d9ff", fontSize: "2rem", mt: 0.5 }} />

                        <Box>
                          <Typography
                            sx={{
                              fontWeight: 600,
                              color: "#00d9ff",
                              mb: 0.5,
                            }}
                          >
                            {stat.label}
                          </Typography>

                          <Typography sx={{ color: "#b0b9c6", fontSize: "0.95rem" }}>
                            {stat.desc}
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </motion.div>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}