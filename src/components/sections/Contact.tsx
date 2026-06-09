import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const contacts = [
  {
    icon: EmailIcon,
    label: "Email",
    value: "ahsanjaved5219@gmail.com",
    href: "mailto:ahsanjaved5219@gmail.com",
    color: "#00d9ff",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "ahsan-javed1",
    href: "https://www.linkedin.com/in/ahsan-javed1/",
    color: "#0A66C2",
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "ahsxnn",
    href: "https://github.com/ahsxnn",
    color: "#ff006e",
  },
];

export default function Contact() {
  return (
    <Box
      id="contact"
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
              textAlign: "center",
              mb: 1,
            }}
          >
            Get In Touch
          </Typography>

          <Box
            sx={{
              width: 60,
              height: 4,
              background: "linear-gradient(90deg, #00d9ff, #ff006e)",
              borderRadius: 2,
              mb: 6,
              mx: "auto",
            }}
          />

          <Typography
            sx={{
              textAlign: "center",
              color: "#b0b9c6",
              fontSize: "1.1rem",
              mb: 6,
              maxWidth: 500,
              mx: "auto",
            }}
          >
            Feel free to reach out! I'd love to connect and discuss
            opportunities.
          </Typography>
        </motion.div>

        <Grid
          container
          spacing={3}
          sx={{
            maxWidth: 900,
            mx: "auto",
          }}
        >
          {contacts.map((contact, index) => {
            const IconComponent = contact.icon;

            return (
              <Grid
                key={contact.label}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{
                      display: "block",
                    }}
                  >
                    <Card
                      sx={{
                        background: "rgba(17, 24, 39, 0.7)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 3,
                        textAlign: "center",
                        height: "100%",
                        transition: "all 0.3s ease",
                        cursor: "pointer",

                        "&:hover": {
                          borderColor: contact.color,
                          transform: "translateY(-8px)",
                          boxShadow: `0 15px 40px ${contact.color}33`,
                        },
                      }}
                    >
                      <CardContent sx={{ py: 4 }}>
                        <IconComponent
                          sx={{
                            fontSize: "2.8rem",
                            color: contact.color,
                            mb: 1.5,
                          }}
                        />

                        <Typography
                          sx={{
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            color: contact.color,
                            mb: 1,
                          }}
                        >
                          {contact.label}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#b0b9c6",
                            fontSize: "0.95rem",
                            wordBreak: "break-word",
                          }}
                        >
                          {contact.value}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}