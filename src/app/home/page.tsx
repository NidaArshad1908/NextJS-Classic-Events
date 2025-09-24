"use client";

import { Box, Typography, Button, Grid } from "@mui/material";
import * as React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const services = [
    "Award Ceremonies",
    "Corporate Events",
    "Private Events",
    "Social Events",
    "Concerts",
    "Festivals",
    "Birthday Parties",
    "Product Launches",
    "Weddings",
    "Funerals",
    "Memorial Services",
    "Baby Showers",
    "Conferences",
    "Year End Function",
    "Seminars",
    "Church Conferences",
];

export default function Home() {
    const imageUrl = "https://images.unsplash.com/photo-1519225421980-715cb0215aed?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMHRhYmxlfGVufDB8fDB8fHww";
    const aboutImage1 = "https://i.pinimg.com/564x/01/a0/16/01a016f19683036e1d94ee0bb25917b9.jpg";
    const aboutImage2 = "https://i.pinimg.com/736x/39/d3/f2/39d3f274d9a8ef4fc8d16545b1e86d09.jpg";

    return (
        <>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, minHeight: { xs: "auto", md: "86vh" }, width: "100%" }}>
                    <Box sx={{ flex: 1, backgroundColor: "#fdf7f4", display: "flex", alignItems: "center", justifyContent: "center", p: { xs: 4, md: 12 }, textAlign: { xs: "center", md: "left" } }}>
                        <Box sx={{ maxWidth: { xs: "100%", md: 560 } }}>
                            <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 1, textTransform: "none", fontFamily: "var(--font-poppins)" }}>
                                Decor Hire | Party Hire | Event Hire | Decor Setup
                            </Typography>

                            <Typography component="h1" sx={{ fontWeight: 600, lineHeight: 1, mb: 2, fontSize: { xs: "2.1rem", sm: "3rem", md: "5rem" }, fontFamily: "var(--font-playfair)" }}>
                                We Create
                            </Typography>

                            <Typography component="h1" sx={{ fontWeight: 600, lineHeight: 1, mb: 2, fontSize: { xs: "2.1rem", sm: "3rem", md: "5rem" }, fontFamily: "var(--font-playfair)" }}>
                                Memorable
                            </Typography>

                            <Typography component="h1" sx={{ fontWeight: 700, lineHeight: 1, mb: 2, fontSize: { xs: "2.1rem", sm: "3rem", md: "5rem" }, fontFamily: "var(--font-playfair)" }}>
                                Events
                            </Typography>

                            <Typography sx={{ color: "text.secondary", mb: 3, fontFamily: "var(--font-poppins)", fontSize: "1.1rem" }}>
                                The one-stop shop for all your decor needs
                            </Typography>

                            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: { xs: "center", md: "flex-start" } }}>
                                <Button variant="contained" sx={{ bgcolor: "#B88658", px: 3, py: 1.2, "&:hover": { bgcolor: "black" }, fontFamily: "var(--font-montserrat)", fontWeight: 600 }}>
                                    Request A Quote
                                </Button>

                                <Button variant="contained" sx={{ bgcolor: "#222222", px: 3, py: 1.2, "&:hover": { bgcolor: "#B88658" }, fontFamily: "var(--font-montserrat)", fontWeight: 600 }}>
                                    Make Your Own Quote
                                </Button>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ flex: 1, display: { xs: "none", md: "block" }, backgroundImage: `linear-gradient(to right, #fdf7f4 0%, rgba(253,247,244,0) 45%), url(${imageUrl})`, backgroundPosition: "center right", backgroundSize: "cover", backgroundRepeat: "no-repeat", minHeight: "86vh" }} />
                    <Box component="img" src={imageUrl} alt="Event Decor" sx={{ display: { xs: "block", md: "none" }, width: "100%", height: "auto", objectFit: "cover" }}
                    />
                </Box>
            </Box>

            <Box sx={{ py: 8, textAlign: "center" }}>
                <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1, fontFamily: "var(--font-playfair)" }}>Our Services</Typography>
                <Typography sx={{ color: "text.secondary", mb: 2, fontFamily: "var(--font-poppins)", fontSize: "1.2rem" }}>We Create, You Celebrate!</Typography>

                <Box sx={{ width: "80px", height: "2px", backgroundColor: "#A66C47", mx: "auto", mb: 4 }} />

                <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: "900px", mx: "auto" }}>
                    {services.map((service, index) => (
                        <Grid key={index} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <CheckCircleIcon sx={{ color: "green", fontSize: 20, mr: 1 }} />
                            <Typography sx={{ fontFamily: "var(--font-poppins)" }}>{service}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box sx={{ py: 8, backgroundColor: "#fdf7f4" }}>
                <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, maxWidth: "1200px", mx: "auto", px: { xs: 3, md: 6 }, gap: 4, }}>
                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", pr: { lg: 4 }, }}>
                        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "2rem", md: "2.5rem" }, color: "#333", fontFamily: "var(--font-playfair)" }}>
                            About Us
                        </Typography>

                        <Typography variant="h5" sx={{ color: "#666", mb: 2, fontWeight: 500, fontFamily: "var(--font-playfair)" }}>
                            What Classic Events is all about.
                        </Typography>

                        <Typography sx={{ color: "#B88658", fontStyle: "italic", fontSize: "1.1rem", mb: 3, fontFamily: "var(--font-poppins)" }}>
                            We turn your dream event into reality!
                        </Typography>

                        <Typography sx={{ color: "#666", mb: 3, lineHeight: 1.6, fontFamily: "var(--font-poppins)" }}>
                            Our team is here to make your event unique and truly amazing.
                        </Typography>

                        <Typography sx={{ color: "#666", mb: 4, lineHeight: 1.6, fontFamily: "var(--font-poppins)" }}>
                            Our aim is to help you make your event a memorable and stress-free. Be it
                            your wedding, birthday party, lobola ceremony, graduation party and many
                            more, we will bring your dream to life.
                        </Typography>

                        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", }}>
                            <Button variant="contained" sx={{ bgcolor: "#B88658", px: 4, py: 1.5, "&:hover": { bgcolor: "black" }, textTransform: "none", fontFamily: "var(--font-montserrat)", fontWeight: 600 }}>
                                Know More About Us
                            </Button>

                            <Button variant="contained" sx={{ bgcolor: "black", px: 4, py: 1.5, "&:hover": { bgcolor: "#B88658" }, textTransform: "none", fontFamily: "var(--font-montserrat)", fontWeight: 600 }}>
                                Get In Touch
                            </Button>
                        </Box>
                    </Box>

                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2, position: "relative", }}>
                        <Box sx={{ width: "100%", alignSelf: "flex-end", position: "relative", }}>
                            <Box component="img" src={aboutImage1} alt="Event Setup" sx={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: 2, }} />
                        </Box>

                        <Box sx={{ width: "70%", alignSelf: "flex-start", position: "relative", mt: -3 }}>
                            <Box component="img" src={aboutImage2} alt="Wedding Setup" sx={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: 2 }} />
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ py: 8, textAlign: "center", backgroundColor: "white" }}>
                <Typography variant="h3" sx={{ fontWeight: 500, mb: 2, color: "#333", fontFamily: "var(--font-playfair)" }}>
                    Some of our clients include:
                </Typography>

                <Box sx={{ width: "100px", height: "2px", backgroundColor: "#A66C47", mx: "auto", mb: 6, }} />

                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2, }}>
                    {[
                        "The Garden Venue",
                        "Killarney Country Club",
                        "Dainfern Golf Club",
                        "BidVest Coin",
                        "Research 94 Plus",
                        "Moon 6 Sixpence",
                        "Inimitable Wedding Venue",
                    ].map((client, index) => (
                        <Box key={index} sx={{ px: 3, py: 2, backgroundColor: "#B88568", borderRadius: 1, border: "1px solid #e0e0e0", textAlign: "center", transition: "all 0.3s ease-in-out", fontSize: "0.95rem", fontWeight: 600, color: "#333", fontFamily: "var(--font-montserrat)", "&:hover": { transform: "translateY(-4px)", backgroundColor: "#fdf7f4", borderColor: "#A66C47", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", }, }}>{client}</Box>
                    ))}
                </Box>
            </Box>

            <Box sx={{ py: 8, textAlign: "center", backgroundColor: "#fdf7f4" }}>
                <Typography variant="h3" sx={{ fontWeight: 500, mb: 2, color: "#333", fontFamily: "var(--font-playfair)" }}>
                    What our clients say about us.
                </Typography>

                <Box sx={{ py: 8, textAlign: "left", backgroundColor: "#fdf7f4" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontFamily: "var(--font-montserrat)" }}>
                        EXCELLENT
                    </Typography>
                </Box>
            </Box>
        </>
    );
}