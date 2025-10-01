"use client";

import { Box, Typography, Card, TextField, Button } from "@mui/material";
import * as React from "react";
import { useState } from "react";

export default function ContactUs() {
    const backgroundImage = "https://media.istockphoto.com/id/493839116/photo/tables-with-centerpieces-at-wedding-reception.jpg?s=612x612&w=0&k=20&c=g-tb7QZoq3nGXBKEsjNf-hPUUt-U_rhDny0VnHWd3xk=";

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        comments: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here
    };

    const contactCards = [
        {
            id: 1,
            title: "Email Us",
            info: ["bookings@classicevents.co.za", "lilian@classicevents.co.za"],
        },
        {
            id: 2,
            title: "Call Us",
            info: ["Nasim Khan", " +27 83 533 2503"],
        },
        {
            id: 3,
            title: "Visit Us",
            info: ["61 Hillcrest Avenue,", "Blairgowrie, Randburg", "", "20 3rd lane, South", "Fontainbleau, Randburg"],
        }
    ];

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
                    pb: 10
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
                        maxWidth: "800px",
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
                    position: "relative",
                    mt: { xs: -10, md: -15 },
                    px: { xs: 2, sm: 4, md: 8, lg: 12 },
                    pb: 8,
                    zIndex: 10
                }}
            >
                <Box sx={{ display: "flex", gap: 3, flexWrap: { xs: "wrap", md: "nowrap" }, justifyContent: "center" }}>
                    {contactCards.map((card, index) => (
                        <Box key={card.id} sx={{ flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 30%" }, maxWidth: { md: "400px" } }}>
                            <Card
                                sx={{
                                    backgroundColor: index === 1 ? "#2C302B" : "white",
                                    color: index === 1 ? "white" : "#2C302B",
                                    p: 4,
                                    textAlign: "center",
                                    borderRadius: 2,
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                                    transition: "all 0.3s ease-in-out",
                                    minHeight: "220px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    border: index === 1 ? "2px solid #b08968" : "none",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow: "0 12px 32px rgba(0,0,0,0.2)",
                                    }
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontFamily: "var(--font-montserrat)",
                                        fontWeight: 600,
                                        mb: 2,
                                        fontSize: { xs: "1.3rem", md: "1.5rem" },
                                        color: index === 1 ? "#D7B783" : "#2C302B"
                                    }}
                                >
                                    {card.title}
                                </Typography>

                                {card.info.map((line, idx) => (
                                    <Typography
                                        key={idx}
                                        sx={{
                                            fontFamily: "var(--font-poppins)",
                                            fontSize: index === 1 ? { xs: "1.2rem", md: "1.4rem" } : "0.95rem",
                                            fontWeight: index === 1 && idx === 0 ? 600 : 400,
                                            color: index === 1 ? (idx === 0 ? "white" : "#D7B783") : "#2C302B",
                                            lineHeight: 1.8,
                                            mt: idx === 2 && card.id === 3 ? 2 : 0
                                        }}
                                    >
                                        {line}
                                    </Typography>
                                ))}
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box
                sx={{
                    px: { xs: 2, sm: 4, md: 8, lg: 20 },
                    py: 8,
                    backgroundColor: "#f9f9f9"
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        maxWidth: "900px",
                        mx: "auto",
                        backgroundColor: "white",
                        p: { xs: 3, md: 5 },
                        borderRadius: 2,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
                    }}
                >
                    <Box sx={{ mb: 3 }}>
                        <Typography
                            sx={{
                                fontFamily: "var(--font-poppins)",
                                fontWeight: 500,
                                mb: 2,
                                color: "#2C302B"
                            }}
                        >
                            Name <Box component="span" sx={{ color: "red", fontStyle: "italic" }}>(Required)</Box>
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
                            <Box sx={{ flex: 1 }}>
                                <TextField
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                    variant="outlined"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            fontFamily: "var(--font-poppins)",
                                            "&:hover fieldset": {
                                                borderColor: "#b08968",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#b08968",
                                            }
                                        }
                                    }}
                                />
                                <Typography variant="caption" sx={{ mt: 0.5, display: "block", fontFamily: "var(--font-poppins)" }}>
                                    First
                                </Typography>
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                <TextField
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                    variant="outlined"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            fontFamily: "var(--font-poppins)",
                                            "&:hover fieldset": {
                                                borderColor: "#b08968",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#b08968",
                                            }
                                        }
                                    }}
                                />
                                <Typography variant="caption" sx={{ mt: 0.5, display: "block", fontFamily: "var(--font-poppins)" }}>
                                    Last
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", gap: 2, mb: 3, flexDirection: { xs: "column", sm: "row" } }}>
                        <Box sx={{ flex: 1 }}>
                            <Typography
                                sx={{
                                    fontFamily: "var(--font-poppins)",
                                    fontWeight: 500,
                                    mb: 1,
                                    color: "#2C302B"
                                }}
                            >
                                Email <Box component="span" sx={{ color: "red", fontStyle: "italic" }}>(Required)</Box>
                            </Typography>
                            <TextField
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                fullWidth
                                variant="outlined"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        fontFamily: "var(--font-poppins)",
                                        "&:hover fieldset": {
                                            borderColor: "#b08968",
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#b08968",
                                        }
                                    }
                                }}
                            />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Typography
                                sx={{
                                    fontFamily: "var(--font-poppins)",
                                    fontWeight: 500,
                                    mb: 1,
                                    color: "#2C302B"
                                }}
                            >
                                Phone <Box component="span" sx={{ color: "red", fontStyle: "italic" }}>(Required)</Box>
                            </Typography>
                            <TextField
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                fullWidth
                                variant="outlined"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        fontFamily: "var(--font-poppins)",
                                        "&:hover fieldset": {
                                            borderColor: "#b08968",
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#b08968",
                                        }
                                    }
                                }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                        <Typography
                            sx={{
                                fontFamily: "var(--font-poppins)",
                                fontWeight: 500,
                                mb: 1,
                                color: "#2C302B"
                            }}
                        >
                            Comments <Box component="span" sx={{ color: "red", fontStyle: "italic" }}>(Required)</Box>
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontFamily: "var(--font-poppins)",
                                mb: 1,
                                color: "#666"
                            }}
                        >
                            Please let us know what on your mind. Have a question for us? Ask away.
                        </Typography>
                        <TextField
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                            required
                            fullWidth
                            multiline
                            rows={6}
                            variant="outlined"
                            inputProps={{ maxLength: 600 }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    fontFamily: "var(--font-poppins)",
                                    "&:hover fieldset": {
                                        borderColor: "#b08968",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#b08968",
                                    }
                                }
                            }}
                        />
                        <Typography
                            variant="caption"
                            sx={{
                                mt: 0.5,
                                display: "block",
                                fontFamily: "var(--font-poppins)",
                                color: "#666"
                            }}
                        >
                            {formData.comments.length} of 600 max characters
                        </Typography>
                    </Box>

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            backgroundColor: "#b08968",
                            color: "white",
                            fontFamily: "var(--font-montserrat)",
                            fontWeight: 600,
                            px: 5,
                            py: 1.5,
                            fontSize: "1rem",
                            textTransform: "none",
                            borderRadius: 1,
                            "&:hover": {
                                backgroundColor: "#9a7556"
                            }
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}