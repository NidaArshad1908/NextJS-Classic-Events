"use client";

import * as React from 'react';
import { Typography, Box, Link, IconButton, Divider, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Footer() {
    return (
        <Box sx={{ mb: -1, mx: -1 }}>
            <Box sx={{ backgroundColor: "#1c1c1c", color: "#fff", pt: 6 }}>
                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ width: "50%" }}>
                        <Grid container spacing={2}>
                            <Grid size={4}>
                                <Typography variant="h4" sx={{ color: "#b08968", mb: 2 }}>
                                    +27 11 791 9168
                                </Typography>
                                <Link
                                    href="mailto:bookings@classicevents.co.za"
                                    sx={{
                                        display: "block",
                                        fontSize: "1.1rem",
                                        color: "#fff",
                                        mb: 1,
                                    }}
                                    underline="hover"
                                >
                                    bookings@classicevents.co.za
                                </Link>
                                <Typography variant="body2" sx={{ color: "#ccc", mb: 0.5 }}>
                                    lilian@classicevents.co.za
                                </Typography>
                            </Grid>
                            <Grid size={4}>
                                <Box sx={{ mt: 4 }}>
                                    <Typography variant="body2" sx={{ mt: 2, color: "#ccc" }}>
                                        61 Hillcrest Avenue, Blairgowrie, Randburg
                                    </Typography>
                                    <Divider sx={{ borderColor: "#555", my: 2, width: '30%' }} />
                                    <Typography variant="body2" sx={{ color: "#ccc" }}>
                                        20 3rd Lane, South Fontainbleau, Randburg
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid size={4}>
                                <Box sx={{ mt: 9 }}>
                                    <IconButton sx={{ color: "#fff", ":hover": { color: "#b08968" } }}>
                                        <FacebookIcon />
                                    </IconButton>
                                    <IconButton sx={{ color: "#fff", ":hover": { color: "#b08968" } }}>
                                        <TwitterIcon />
                                    </IconButton>
                                    <IconButton sx={{ color: "#fff", ":hover": { color: "#b08968" } }}>
                                        <InstagramIcon />
                                    </IconButton>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Divider sx={{ borderColor: "#555", my: 1, width: "50%", mx: "auto", borderBottomWidth: 2 }} />
                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ width: "50%" }}>
                        <Grid container spacing={4}>
                            <Grid>
                                <Typography
                                    variant="h6"
                                    sx={{ color: "#b08968", mb: 2, fontWeight: "bold" }}
                                >
                                    Company
                                </Typography>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                    <Link href="/about" underline="hover" sx={{ color: "#fff" }}>
                                        <ArrowForwardIosIcon sx={{ fontSize: 10, color: "#b08968" }} /> About Us
                                    </Link>
                                    <Link href="/work" underline="hover" sx={{ color: "#fff" }}>
                                        <ArrowForwardIosIcon sx={{ fontSize: 10, color: "#b08968" }} /> Our Work
                                    </Link>
                                    <Link href="/quote" underline="hover" sx={{ color: "#fff" }}>
                                        <ArrowForwardIosIcon sx={{ fontSize: 10, color: "#b08968" }} /> Request Quote
                                    </Link>
                                    <Link href="/contact" underline="hover" sx={{ color: "#fff" }}>
                                        <ArrowForwardIosIcon sx={{ fontSize: 10, color: "#b08968" }} /> Contact Us
                                    </Link>
                                </Box>
                            </Grid>

                            <Grid>
                                <Typography
                                    variant="h6"
                                    sx={{ color: "#b08968", mb: 2, fontWeight: "bold" }}
                                >
                                    Categories For Hire
                                </Typography>
                                <Grid container spacing={2}>
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                        <Grid>
                                            <Link href="#" underline="hover" sx={{ color: "#fff" }}>
                                                <ArrowForwardIosIcon sx={{ fontSize: 10, color: "#b08968" }} /> Chairs
                                            </Link>
                                            <br />
                                            <Link href="#" underline="hover" sx={{ color: "#fff" }}>
                                                <ArrowForwardIosIcon sx={{ fontSize: 10, color: "#b08968" }} /> Tables
                                            </Link>
                                            <br />
                                            <Link href="#" underline="hover" sx={{ color: "#fff" }}>
                                                <ArrowForwardIosIcon sx={{ fontSize: 10, color: "#b08968" }} /> Linen
                                            </Link>
                                            <br />
                                            <Link href="#" underline="hover" sx={{ color: "#fff" }}>
                                                <ArrowForwardIosIcon sx={{ fontSize: 10, color: "#b08968" }} /> Underplates
                                            </Link>
                                        </Grid>
                                    </Box>

                                    <Grid>
                                        <Link href="#" underline="hover" sx={{ color: "#fff" }}>
                                            <ArrowForwardIosIcon sx={{ fontSize: 10, color: "#b08968" }} /> Center Pieces
                                        </Link>
                                        <br />
                                        <Link href="#" underline="hover" sx={{ color: "#fff" }}>
                                            <ArrowForwardIosIcon sx={{ fontSize: 10, color: "#b08968" }} />  Flowers
                                        </Link>
                                        <br />
                                        <Link href="#" underline="hover" sx={{ color: "#fff" }}>
                                            <ArrowForwardIosIcon sx={{ fontSize: 10, color: "#b08968" }} />  Backdrops
                                        </Link>
                                    </Grid>

                                    <Grid>
                                        <Link href="#" underline="hover" sx={{ color: "#fff" }}>
                                            <ArrowForwardIosIcon sx={{ fontSize: 10, color: "#b08968" }} />  Couches
                                        </Link>
                                        <br />
                                        <Link href="#" underline="hover" sx={{ color: "#fff" }}>
                                            <ArrowForwardIosIcon sx={{ fontSize: 10, color: "#b08968" }} />  Flooring
                                        </Link>
                                        <br />
                                        <Link href="#" underline="hover" sx={{ color: "#fff" }}>
                                            <ArrowForwardIosIcon sx={{ fontSize: 10, color: "#b08968" }} />  Catering
                                        </Link>
                                    </Grid>

                                    <Grid>
                                        <Link href="#" underline="hover" sx={{ color: "#fff" }}>
                                            <ArrowForwardIosIcon sx={{ fontSize: 10, color: "#b08968" }} />  Jumping Castle
                                        </Link>
                                        <br />
                                        <Link href="#" underline="hover" sx={{ color: "#fff" }}>
                                            <ArrowForwardIosIcon sx={{ fontSize: 10, color: "#b08968" }} />  Tents
                                        </Link>
                                        <br />
                                        <Link href="#" underline="hover" sx={{ color: "#fff" }}>
                                            <ArrowForwardIosIcon sx={{ fontSize: 10, color: "#b08968" }} />  Kiddies Range
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box >
            <Box
                component="footer"
                sx={{
                    backgroundColor: "black",
                    color: "white",
                    py: 1,
                    px: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: "100%" }}>
                    <Typography variant="body2">
                        Copyright © {new Date().getFullYear()} Classic Events | All rights reserved.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <Link href="/privacy-policy" underline="hover" color="#b08968">Privacy Policy</Link>
                    <Typography>|</Typography>
                    <Link href="/terms" underline="hover" color="#b08968">Terms and Conditions</Link>
                    <Typography>|</Typography>
                    <Link href="/cookie-policy" underline="hover" color="#b08968">Cookie Policy</Link>
                </Box>

                <Box
                    component="a"
                    href="https://wa.me/0027835332503"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        position: "fixed",
                        bottom: 20,
                        right: 20,
                        backgroundColor: "#25D366",
                        borderRadius: "50%",
                        width: 55,
                        height: 55,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        boxShadow: 3,
                        "&:hover": { opacity: 0.8 },
                    }}
                >
                    <WhatsAppIcon sx={{ fontSize: 30 }} />
                </Box>
            </Box>
        </Box >
    );
}