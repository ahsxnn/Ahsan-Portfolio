import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "../ui/ProjectModal";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const projectsData = [
  {
    id: 1,
    title: "WorkSphere",
    description:
      "Enterprise Employee Management System with Clean Architecture",
    image: "🏢",
    tags: ["ASP.NET Core", "React", "TypeScript", "SQL Server"],
    features: [
      "JWT Authentication",
      "Attendance Tracking",
      "Project Assignment",
      "Role-Based Access Control",
    ],
    tech: ["ASP.NET Core", "React", "Redux Toolkit", "SQL Server"],
  },
  {
    id: 2,
    title: "Task Manager App",
    description:
      "Simple task management app with CRUD operations",
    image: "📝",
    tags: ["React", "TypeScript", "Material UI"],
    features: [
      "Create, Update, Delete Tasks",
      "Task Status Management",
      "Responsive UI Design",
      "Smooth User Experience",
    ],
    tech: ["React.js", "TypeScript", "Material UI", "REST API"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Responsive portfolio website with animations",
    image: "🌐",
    tags: ["React", "Material UI", "Framer Motion"],
    features: [
      "Responsive Modern Design",
      "Smooth Animations",
      "Project Showcase",
      "Mobile-Friendly",
    ],
    tech: ["React.js", "Material UI", "Framer Motion", "TypeScript"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsData)[0] | null
  >(null);

  return (
    <>
      <Box id="projects" sx={{ py: 15 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ mb: 6 }}>
            Featured Projects
          </Typography>

          {/* MUI v9 Grid2 */}
          <Grid container spacing={4}>
            {projectsData.map((project, index) => (
              <Grid
                key={project.id}
                sx={{
                  display: "grid",
                  gridColumn: { xs: "span 12", md: "span 6" },
                  width: "100%",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{ display: "flex", height: "100%" }}
                >
                  <Card
                    onClick={() => setSelectedProject(project)}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      cursor: "pointer",
                      borderRadius: 3,
                      border: "1px solid rgba(0,217,255,0.2)",
                      background:
                        "linear-gradient(135deg, rgba(17,24,39,0.8), rgba(17,24,39,0.4))",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        borderColor: "rgba(0,217,255,0.6)",
                      },
                    }}
                  >
                    <CardContent sx={{ flex: 1 }}>
                      <Box sx={{ fontSize: "3rem", mb: 2 }}>
                        {project.image}
                      </Box>

                      <Typography sx={{ fontWeight: 700, fontSize: "1.4rem" }}>
                        {project.title}
                      </Typography>

                      <Typography sx={{ color: "#b0b9c6", mb: 2 }}>
                        {project.description}
                      </Typography>

                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {project.tags.map((tag) => (
                          <Box
                            key={tag}
                            sx={{
                              px: 2,
                              py: 0.5,
                              fontSize: "0.75rem",
                              borderRadius: 1,
                              color: "#00d9ff",
                              border: "1px solid rgba(0,217,255,0.3)",
                              background: "rgba(0,217,255,0.1)",
                            }}
                          >
                            {tag}
                          </Box>
                        ))}
                      </Box>

                      <Button
                        sx={{
                          mt: 3,
                          color: "#00d9ff",
                          textTransform: "none",
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          p: 0,
                          justifyContent: "flex-start",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            background: "transparent",
                            gap: "8px",
                          },
                        }}
                        endIcon={<ArrowForwardIcon />}
                        onClick={() => setSelectedProject(project)}
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {selectedProject && (
        <ProjectModal
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </>
  );
}