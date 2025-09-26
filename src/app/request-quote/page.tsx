/* eslint-disable react/no-unescaped-entities */
"use client";
import { Box, Typography, Container, TextField, Button, Stepper, Step, StepLabel, Grid, IconButton } from "@mui/material";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useState, useEffect } from 'react';

export default function RequestQuote() {
    const backgroundImage = "https://media.istockphoto.com/id/1558296656/photo/festive-decor-with-flower-composition-candles-on-black-tablecloth-banquet-decoration-in-hall.jpg?s=612x612&w=0&k=20&c=Vm9Uy5k3UF4EAucXBUeeNWdbVXcpiHD5__0S1IiWxMM=";

    const galleryImages = [
        "https://t3.ftcdn.net/jpg/03/35/71/52/360_F_335715230_xzXaUgNPtOTtT7bZS8RwcYhP2JLIT8EH.jpg",
        "https://t3.ftcdn.net/jpg/02/83/83/92/360_F_283839263_64Kw4OAIyVhTnUpLa4Y4g0HvSXIU9oN5.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxThEO8r6r_hJCQh62C25LEABv74soLQanQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh76RtAvzFZqJY5XVMoxwYuGzAE5VOU3Ddmg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV24J-Hy5fZ3pzS2lO5uvfzaXtR3d8zq_B_g&s",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400",
        "https://images.unsplash.com/photo-1519677100203-70f2d7d4c1f8?w=400"
    ];

    const eventTypes = [
        "Corporate Event",
        "Cooperative Event",
        "Graduation Party",
        "Bridal Shower",
        "Baby Shower",
        "Birthday Party",
        "Wedding",
        "Kiddies Party",
        "Lobola",
        "Umembeso",
        "Tombstone Unveiling",
        "Other"
    ];

    const [activeStep, setActiveStep] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [formData, setFormData] = useState({
        eventType: "",
        eventDate: "",
        attendees: "",
        location: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        comments: ""
    });

    const steps = ['Event Information', 'Personal Information'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [galleryImages.length]);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => { setActiveStep((prevStep) => prevStep + 1) };

    const handleBack = () => { setActiveStep((prevStep) => prevStep - 1) };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = () => {
        console.log("Form submitted:", formData);
        alert("Thank you for your submission!");
    };

    const commentLength = formData.comments.length;

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{
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
            }}>
                <Typography variant="h2" sx={{
                    fontFamily: "var(--font-playfair)",
                    fontWeight: 600,
                    fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                    lineHeight: 1.2,
                    mb: 3,
                    maxWidth: "800px",
                }}>
                    Request A Quote
                </Typography>
                <Typography sx={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: { xs: "1.1rem", md: "1.3rem" },
                    maxWidth: "600px",
                    lineHeight: 1.6,
                    opacity: 0.9,
                    color: "#D7B783"
                }}>
                    Please fill in the form below and we will bring your idea to life.
                </Typography>
            </Box>

            <Container maxWidth="md" sx={{ py: 8, px: { xs: 2, md: 4 } }}>
                <Box sx={{ py: 8 }}>
                    <Typography variant="h4" sx={{
                        textAlign: "center",
                        mb: 4,
                        fontFamily: "var(--font-playfair)",
                        color: "#333"
                    }}>
                        Our Event Gallery
                    </Typography>

                    <Box sx={{
                        position: "relative",
                        width: "100%",
                        height: "400px",
                        overflow: "hidden",
                        borderRadius: 3,
                        boxShadow: "0 8px 30px rgba(0,0,0,0.2)"
                    }}>
                        <Box
                            component="img"
                            src={galleryImages[currentImageIndex]}
                            alt={`Gallery image ${currentImageIndex + 1}`}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transition: "transform 0.5s ease",
                                "&:hover": {
                                    transform: "scale(1.02)"
                                }
                            }}
                        />

                        <IconButton
                            onClick={handlePrevImage}
                            sx={{
                                position: "absolute",
                                left: 16,
                                top: "50%",
                                transform: "translateY(-50%)",
                                bgcolor: "rgba(255,255,255,0.8)",
                                color: "#D7B783",
                                "&:hover": {
                                    bgcolor: "white"
                                }
                            }}
                        >
                            <ChevronLeft />
                        </IconButton>

                        <IconButton
                            onClick={handleNextImage}
                            sx={{
                                position: "absolute",
                                right: 16,
                                top: "50%",
                                transform: "translateY(-50%)",
                                bgcolor: "rgba(255,255,255,0.8)",
                                color: "#D7B783",
                                "&:hover": {
                                    bgcolor: "white"
                                }
                            }}
                        >
                            <ChevronRight />
                        </IconButton>

                        <Box sx={{
                            position: "absolute",
                            bottom: 16,
                            left: "50%",
                            transform: "translateX(-50%)",
                            display: "flex",
                            gap: 1
                        }}>
                            {galleryImages.map((_, index) => (
                                <Box
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    sx={{
                                        width: 12,
                                        height: 12,
                                        borderRadius: "50%",
                                        bgcolor: index === currentImageIndex ? "#D7B783" : "rgba(255,255,255,0.5)",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            bgcolor: index === currentImageIndex ? "#D7B783" : "rgba(255,255,255,0.8)"
                                        }
                                    }}
                                />
                            ))}
                        </Box>

                        <Typography variant="body2" sx={{
                            position: "absolute",
                            top: 16,
                            right: 16,
                            bgcolor: "rgba(0,0,0,0.6)",
                            color: "white",
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            fontFamily: "var(--font-poppins)"
                        }}>
                            {currentImageIndex + 1} / {galleryImages.length}
                        </Typography>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        gap: 2,
                        mt: 3,
                        overflowX: "auto",
                        py: 2,
                        px: 1
                    }}>
                        {galleryImages.map((image, index) => (
                            <Box
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                sx={{
                                    width: "100px",
                                    height: "80px",
                                    borderRadius: 2,
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    opacity: index === currentImageIndex ? 1 : 0.6,
                                    transition: "all 0.3s ease",
                                    border: index === currentImageIndex ? "3px solid #D7B783" : "3px solid transparent",
                                    "&:hover": {
                                        opacity: 1,
                                        transform: "scale(1.05)"
                                    }
                                }}
                            >
                                <Box
                                    component="img"
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>

            <Container maxWidth="md" sx={{ py: 8, px: { xs: 2, md: 4 } }}>
                <Box sx={{ mb: 6 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontFamily: "var(--font-poppins)", color: "#333" }}>
                        Step {activeStep + 1} of {steps.length}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box sx={{
                            width: '100%',
                            height: 8,
                            backgroundColor: '#f0f0f0',
                            borderRadius: 4,
                            overflow: 'hidden'
                        }}>
                            <Box sx={{
                                width: `${(activeStep + 1) * 50}%`,
                                height: '100%',
                                backgroundColor: '#D7B783',
                                transition: 'width 0.3s ease'
                            }} />
                        </Box>
                        <Typography variant="body2" sx={{ ml: 2, fontFamily: "var(--font-poppins)", color: "#D7B783", fontWeight: 600 }}>
                            {((activeStep + 1) * 50)}%
                        </Typography>
                    </Box>
                    <Stepper activeStep={activeStep} sx={{ mt: 2 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>

                <Box sx={{
                    bgcolor: "white",
                    p: 4,
                    borderRadius: 2,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    mb: 4
                }}>
                    {activeStep === 0 && (
                        <Box>
                            <Typography variant="h5" sx={{ mb: 3, fontFamily: "var(--font-playfair)", color: "#333" }}>
                                Event Information
                            </Typography>

                            <Box sx={{ display: "grid", gap: 3 }}>
                                <TextField
                                    select
                                    label="Event (Required)"
                                    value={formData.eventType}
                                    onChange={(e) => handleInputChange("eventType", e.target.value)}
                                    fullWidth
                                    SelectProps={{
                                        native: true,
                                    }}
                                >
                                    <option value=""></option>
                                    {eventTypes.map((event) => (
                                        <option key={event} value={event}>
                                            {event}
                                        </option>
                                    ))}
                                </TextField>

                                <Grid container spacing={3}>
                                    <Grid>
                                        <TextField
                                            label="Date of Event (Required)"
                                            type="date"
                                            value={formData.eventDate}
                                            onChange={(e) => handleInputChange("eventDate", e.target.value)}
                                            fullWidth
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid>
                                        <TextField
                                            label="Est. Number of Attendees (Required)"
                                            type="number"
                                            value={formData.attendees}
                                            onChange={(e) => handleInputChange("attendees", e.target.value)}
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>

                                <TextField
                                    label="Location of Event (Required)"
                                    value={formData.location}
                                    onChange={(e) => handleInputChange("location", e.target.value)}
                                    fullWidth
                                />
                            </Box>

                            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{
                                        bgcolor: "#D7B783",
                                        color: "white",
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: 1,
                                        "&:hover": {
                                            bgcolor: "#c5a673"
                                        }
                                    }}
                                >
                                    Next
                                </Button>
                            </Box>
                        </Box>
                    )}

                    {activeStep === 1 && (
                        <Box>
                            <Typography variant="h5" sx={{ mb: 3, fontFamily: "var(--font-playfair)", color: "#333" }}>
                                Personal Information
                            </Typography>

                            <Box sx={{ display: "grid", gap: 3 }}>
                                <Grid container spacing={3}>
                                    <Grid>
                                        <TextField
                                            label="First Name (Required)"
                                            value={formData.firstName}
                                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid>
                                        <TextField
                                            label="Last Name (Required)"
                                            value={formData.lastName}
                                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container spacing={3}>
                                    <Grid>
                                        <TextField
                                            label="Email (Required)"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange("email", e.target.value)}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid>
                                        <TextField
                                            label="Phone (Required)"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => handleInputChange("phone", e.target.value)}
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>

                                <Box sx={{ borderBottom: "1px solid #e0e0e0", my: 2 }} />

                                <Typography variant="h6" sx={{ mb: 2, fontFamily: "var(--font-poppins)" }}>
                                    Comments (Required)
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 2, color: "#666" }}>
                                    Please let us know what's on your mind. Have a question for us? Ask away.
                                </Typography>
                                <TextField
                                    multiline
                                    rows={4}
                                    value={formData.comments}
                                    onChange={(e) => handleInputChange("comments", e.target.value)}
                                    fullWidth
                                    placeholder="Tell us about your event requirements..."
                                />
                                <Typography variant="body2" sx={{ textAlign: "right", color: commentLength > 600 ? "error.main" : "#666" }}>
                                    {commentLength} of 600 max characters
                                </Typography>

                                <Box sx={{ borderBottom: "1px solid #e0e0e0", my: 2 }} />

                                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                    <Box sx={{
                                        width: 24,
                                        height: 24,
                                        border: "2px solid #ccc",
                                        borderRadius: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer"
                                    }}>
                                        ✓
                                    </Box>
                                    <Typography variant="body2">
                                        I'm not a robot
                                    </Typography>
                                </Box>
                                <Typography variant="caption" sx={{ color: "#666", mt: 1 }}>
                                    HEALTH CLA • Privacy - Terms
                                </Typography>
                            </Box>

                            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
                                <Button
                                    variant="outlined"
                                    onClick={handleBack}
                                    sx={{
                                        borderColor: "#D7B783",
                                        color: "#D7B783",
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: 1,
                                        "&:hover": {
                                            borderColor: "#c5a673",
                                            bgcolor: "rgba(215, 183, 131, 0.1)"
                                        }
                                    }}
                                >
                                    Previous
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={handleSubmit}
                                    sx={{
                                        bgcolor: "#D7B783",
                                        color: "white",
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: 1,
                                        "&:hover": { bgcolor: "#c5a673" }
                                    }}
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Container>
        </Box>
    );
}