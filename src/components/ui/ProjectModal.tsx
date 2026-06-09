import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";

import { motion } from "framer-motion";

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project?: {
    title: string;
    description: string;
    image: string;
    features: string[];
    tech: string[];
  };
}

export default function ProjectModal({ open, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      slotProps={{
        paper: {
          sx: {
            background: "rgba(17, 24, 39, 0.95)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(0, 217, 255, 0.2)",
            borderRadius: 3,
          },
        },
      }}
    >
      <DialogContent sx={{ pt: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ fontSize: "3rem", mb: 2 }}>{project.image}</Box>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              background: "linear-gradient(135deg, #00d9ff 0%, #ff006e 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            {project.title}
          </Typography>

          <Typography
            sx={{
              color: "#b0b9c6",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              mb: 3,
            }}
          >
            {project.description}
          </Typography>

          {/* Features */}
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontWeight: 600,
                color: "#00d9ff",
                mb: 1.5,
                fontSize: "1rem",
              }}
            >
               Key Features
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {project.features.map((feature) => (
                <Chip
                  key={feature}
                  label={feature}
                  sx={{
                    background: "rgba(0, 217, 255, 0.15)",
                    border: "1px solid rgba(0, 217, 255, 0.3)",
                    color: "#00d9ff",
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Tech Stack */}
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontWeight: 600,
                color: "#ff006e",
                mb: 1.5,
                fontSize: "1rem",
              }}
            >
               Technology Stack
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {project.tech.map((t) => (
                <Chip
                  key={t}
                  label={t}
                  sx={{
                    background: "rgba(255, 0, 110, 0.15)",
                    border: "1px solid rgba(255, 0, 110, 0.3)",
                    color: "#ff006e",
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Close Button */}
          <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
            <Button
              variant="contained"
              onClick={onClose}
              sx={{
                background:
                  "linear-gradient(135deg, #00d9ff 0%, #0099cc 100%)",
                color: "#0a0f1c",
                fontWeight: 600,
                px: 3,
                borderRadius: "50px",
                "&:hover": {
                  boxShadow: "0 10px 30px rgba(0, 217, 255, 0.3)",
                },
              }}
            >
              Close
            </Button>
          </Box>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}