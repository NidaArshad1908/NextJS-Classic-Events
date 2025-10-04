"use client";

import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Visibility, VisibilityOff, Person, Email, Lock } from "@mui/icons-material";
import { Container, TextField, Button, Typography, Box, Divider, IconButton, InputAdornment, Alert } from "@mui/material";

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [isClient, setIsClient] = useState(false);

    // Client-side check add karein
    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        // Auth availability check karein
        if (!auth || typeof window === 'undefined') {
            setError("Authentication service is not available. Please try again.");
            setLoading(false);
            return;
        }

        try {
            const userCred = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );

            await updateProfile(userCred.user, {
                displayName: formData.username,
            });

            console.log("User registered:", userCred.user);
            alert("Account created successfully!");

            // Redirect after successful registration
            window.location.href = "/dashboard";

        } catch (err: unknown) {
            console.error("Firebase error:", err);

            // Firebase specific errors handle karein
            if (err instanceof Error) {
                const errorMessage = err.message;
                if (errorMessage.includes('auth/email-already-in-use')) {
                    setError("This email is already registered.");
                } else if (errorMessage.includes('auth/invalid-email')) {
                    setError("Invalid email address.");
                } else if (errorMessage.includes('auth/weak-password')) {
                    setError("Password should be at least 6 characters.");
                } else {
                    setError(errorMessage);
                }
            } else {
                setError("Registration failed. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    // Loading state for server-side rendering
    if (!isClient) {
        return (
            <Container component="main" maxWidth="sm" sx={{ py: 8, textAlign: 'center' }}>
                <Typography>Loading...</Typography>
            </Container>
        );
    }

    return (
        <Container component="main" maxWidth="sm" sx={{ py: 8 }}>
            <Typography
                component="h1"
                variant="h4"
                align="center"
                gutterBottom
                sx={{ fontWeight: "bold", mb: 3 }}
            >
                Create Account
            </Typography>

            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    disabled={loading}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Person color="action" />
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={loading}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Email color="action" />
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    disabled={loading}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Lock color="action" />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={togglePasswordVisibility}
                                    edge="end"
                                    disabled={loading}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={loading}
                    sx={{
                        mt: 3,
                        mb: 2,
                        py: 1.5,
                        fontSize: "1.1rem",
                        borderRadius: 2,
                        ":hover": { opacity: 0.8 },
                        color: "#000",
                        backgroundColor: "#B88658",
                        '&:disabled': {
                            backgroundColor: '#cccccc'
                        }
                    }}
                    size="large"
                >
                    {loading ? "Creating Account..." : "Register"}
                </Button>
            </Box>

            <Divider sx={{ my: 3 }}>OR</Divider>
            <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                        py: 1.5,
                        borderRadius: 2,
                        color: '#B88658',
                        borderColor: '#B88658',
                        '&:hover': {
                            borderColor: '#B88658',
                            backgroundColor: 'rgba(184, 134, 88, 0.04)'
                        }
                    }}
                    disabled={loading}
                >
                    Continue with Google
                </Button>
                <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                        py: 1.5,
                        borderRadius: 2,
                        color: '#B88658',
                        borderColor: '#B88658',
                        '&:hover': {
                            borderColor: '#B88658',
                            backgroundColor: 'rgba(184, 134, 88, 0.04)'
                        }
                    }}
                    disabled={loading}
                >
                    Continue with Facebook
                </Button>
            </Box>
        </Container>
    );
}