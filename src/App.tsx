import Home from "./pages/Home";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "Ahsan | Portfolio";
  }, []);

  return <Home />;
}