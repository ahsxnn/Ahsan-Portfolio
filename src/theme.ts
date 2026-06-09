import { createTheme } from "@mui/material";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: { main: "#00d9ff" },
      secondary: { main: "#ff006e" },
      background: {
        default: "#0a0f1c",
        paper: "#111827",
      },
      text: {
        primary: "#ffffff",
        secondary: "#b0b9c6",
      },
    },
    typography: {
      fontFamily: "'Poppins', 'Inter', sans-serif",
      h2: {
        fontWeight: 700,
        background: "linear-gradient(135deg, #00d9ff 0%, #0099cc 100%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
      h4: {
        fontWeight: 600,
        background: "linear-gradient(135deg, #00d9ff 0%, #ff006e 100%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    },
  });