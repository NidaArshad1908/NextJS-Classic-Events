"use client";

import { Box, Typography } from "@mui/material";
import * as React from "react";

export default function AboutUs() {
    const backgroundImage = "https://media.istockphoto.com/id/493839116/photo/tables-with-centerpieces-at-wedding-reception.jpg?s=612x612&w=0&k=20&c=g-tb7QZoq3nGXBKEsjNf-hPUUt-U_rhDny0VnHWd3xk=";

    return (
        <Box sx={{ width: "100%" }}>
            <Box
                sx={{
                    minHeight: "60vh",
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "white",
                    px: 3
                }}
            >
                <Typography variant="h2" sx={{ fontFamily: "var(--font-playfair)", fontWeight: 600, fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" }, lineHeight: 1.2, mb: 3, maxWidth: "800px", }}>Contact Us</Typography>
                <Typography sx={{ fontFamily: "var(--font-poppins)", fontSize: { xs: "1.1rem", md: "1.3rem" }, maxWidth: "600px", lineHeight: 1.6, opacity: 0.9, color: "#D7B783" }}>Get in touch with us</Typography>
            </Box>
        </Box>
    );
}