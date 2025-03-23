import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <Container
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: "3rem", fontWeight: "bold", color: "#8b7e3f" }}
        >
          Coming Soon
        </Typography>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <Typography variant="h5" sx={{ marginBottom: "20px" }}>
          We're working hard to bring something amazing. Stay tuned!
        </Typography>
      </motion.div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: .1, ease: "easeInOut" }}
      >
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          sx={{
            color: "#fff",
            textTransform: "none",
            borderRadius: "10px",
            padding: "10px 20px",
            bgcolor: "#8b7e3f",
          }}
        >
          Go Home
        </Button>
      </motion.div>
    </Container>
  );
};

export default ComingSoon;
