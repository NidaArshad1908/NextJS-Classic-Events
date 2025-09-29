"use client";
import { Box, Typography, Card, CardContent, TextField, Button, } from "@mui/material";
import * as React from "react";

export default function AboutUs() {
    const backgroundImage = "https://media.istockphoto.com/id/493839116/photo/tables-with-centerpieces-at-wedding-reception.jpg?s=612x612&w=0&k=20&c=g-tb7QZoq3nGXBKEsjNf-hPUUt-U_rhDny0VnHWd3xk=";

    return (
        <Box sx={{ width: "100%", position: "relative" }}>
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
                    px: 3,
                    pb: 15
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: "var(--font-playfair)",
                        fontWeight: 600,
                        fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                        lineHeight: 1.2,
                        mb: 3,
                        maxWidth: "800px"
                    }}
                >
                    Contact Us
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "var(--font-poppins)",
                        fontSize: { xs: "1.1rem", md: "1.3rem" },
                        maxWidth: "600px",
                        lineHeight: 1.6,
                        opacity: 0.9,
                        color: "#D7B783"
                    }}
                >
                    Get in touch with us
                </Typography>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "100%",
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                    gap: 3,
                    py: 10,
                    px: 25,
                }}
            >
                <Card
                    sx={{
                        bgcolor: "white",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        "&:hover": {
                            transform: "translateY(-8px)",
                            boxShadow: "0 15px 50px rgba(0,0,0,0.2)"
                        }
                    }}
                >
                    <CardContent sx={{ textAlign: "center", py: 4 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: "var(--font-playfair)",
                                fontWeight: 600,
                                mb: 2,
                                color: "#333"
                            }}
                        >
                            Email Us
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "var(--font-poppins)",
                                fontSize: "0.95rem",
                                color: "#666",
                                mb: 1
                            }}
                        >
                            bookings@Classicevents.co.za
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "var(--font-poppins)",
                                fontSize: "0.95rem",
                                color: "#666",
                                mb: 1
                            }}
                        >
                            Lillian@Classicevents.co.za
                        </Typography>
                    </CardContent>
                </Card>

                <Card
                    sx={{
                        bgcolor: "#2C3E3D",
                        color: "white",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        "&:hover": {
                            transform: "translateY(-8px)",
                            boxShadow: "0 15px 50px rgba(0,0,0,0.2)"
                        }
                    }}
                >
                    <CardContent sx={{ textAlign: "center", py: 4 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: "var(--font-playfair)",
                                fontWeight: 600,
                                mb: 2,
                                color: "#D7B783"
                            }}
                        >
                            Call Us
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "var(--font-poppins)",
                                fontSize: "1.5rem",
                                fontWeight: 500,
                                mb: 1,
                                letterSpacing: "1px"
                            }}
                        >
                            Nasim Khan
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "var(--font-poppins)",
                                fontSize: "1.1rem",
                                color: "#D7B783"
                            }}
                        >
                            +27 83 533 2503
                        </Typography>
                    </CardContent>
                </Card>

                <Card
                    sx={{
                        bgcolor: "white",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        "&:hover": {
                            transform: "translateY(-8px)",
                            boxShadow: "0 15px 50px rgba(0,0,0,0.2)"
                        }
                    }}
                >
                    <CardContent sx={{ textAlign: "center", py: 4 }}>
                        <Typography
                            sx={{
                                fontFamily: "var(--font-poppins)",
                                fontSize: "0.95rem",
                                color: "#666",
                                mb: 2
                            }}
                        >
                            61 Hillcrest Avenue,Blairgowrie, Randburg
                        </Typography>
                        <Box sx={{ borderTop: "1px solid #B88568", my: 2 }} />
                        <Typography
                            sx={{
                                fontFamily: "var(--font-poppins)",
                                fontSize: "0.95rem",
                                color: "#666"
                            }}
                        >
                            20 3rd lane, South Fontainbleau, Randburg
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Card
                sx={{
                    boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                    borderRadius: 2,
                    overflow: "hidden"
                }}
            >
                <CardContent sx={{ p: 4 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: "var(--font-playfair)",
                            fontWeight: 600,
                            mb: 4,
                            color: "#2C3E3D",
                            textAlign: "center"
                        }}
                    >
                        Send Us a Message
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                        <Typography
                            sx={{
                                fontFamily: "var(--font-poppins)",
                                fontWeight: 500,
                                mb: 1,
                                color: "#333"
                            }}
                        >
                            Name (Required)
                        </Typography>
                        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
                            <TextField
                                fullWidth
                                placeholder="First"
                                variant="outlined"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderColor: "#D7B783",
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#2C3E3D",
                                        },
                                    }
                                }}
                            />
                            <TextField
                                fullWidth
                                placeholder="Last"
                                variant="outlined"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderColor: "#D7B783",
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#2C3E3D",
                                        },
                                    }
                                }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
                            <Box>
                                <Typography
                                    sx={{
                                        fontFamily: "var(--font-poppins)",
                                        fontWeight: 500,
                                        mb: 1,
                                        color: "#333"
                                    }}
                                >
                                    Email (Required)
                                </Typography>
                                <TextField
                                    fullWidth
                                    type="email"
                                    variant="outlined"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": {
                                                borderColor: "#D7B783",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "#2C3E3D",
                                            },
                                        }
                                    }}
                                />
                            </Box>
                            <Box>
                                <Typography
                                    sx={{
                                        fontFamily: "var(--font-poppins)",
                                        fontWeight: 500,
                                        mb: 1,
                                        color: "#333"
                                    }}
                                >
                                    Phone (Required)
                                </Typography>
                                <TextField
                                    fullWidth
                                    type="tel"
                                    variant="outlined"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": {
                                                borderColor: "#D7B783",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "#2C3E3D",
                                            },
                                        }
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                        <Typography
                            sx={{
                                fontFamily: "var(--font-poppins)",
                                fontWeight: 500,
                                mb: 1,
                                color: "#333"
                            }}
                        >
                            Comments (Required)
                        </Typography>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            placeholder="Type your message here..."
                            variant="outlined"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "#D7B783",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#2C3E3D",
                                    },
                                }
                            }}
                        />
                        <Typography
                            sx={{
                                fontFamily: "var(--font-poppins)",
                                fontSize: "0.8rem",
                                color: "#999",
                                textAlign: "right",
                                mt: 1
                            }}
                        >
                            0 of 600 max characters
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#B88658",
                            color: "white",
                            py: 1.5,
                            fontFamily: "var(--font-poppins)",
                            fontWeight: 500,
                            fontSize: "1.1rem",
                            "&:hover": {
                                backgroundColor: "black",
                            }
                        }}
                    >
                        Submit
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}