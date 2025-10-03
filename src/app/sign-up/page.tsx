"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Visibility, VisibilityOff, Person, Email, Lock } from "@mui/icons-material";
import { Container, TextField, Button, Typography, Box, Divider, IconButton, InputAdornment, } from "@mui/material";

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // const validate = () => {
    //     if (!formData.username.trim()) return "Username required";
    //     if (!formData.email.includes("@")) return "Valid email required";
    //     if (formData.password.length < 6) return "Password must be at least 6 chars";
    //     return "";
    // };

    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     setError("");
    //     const validationError = validate();
    //     if (validationError) {
    //         setError(validationError);
    //         return;
    //     }

    //     try {
    //         setLoading(true);
    //         const userCred = await createUserWithEmailAndPassword(
    //             auth,
    //             formData.email,
    //             formData.password
    //         );

    //         await updateProfile(userCred.user, {
    //             displayName: formData.username,
    //         });

    //         console.log("User registered:", userCred.user);
    //         alert("Account created successfully!");
    //     } catch (err: unknown) {
    //         if (err instanceof Error) {
    //             setError(err.message);
    //         } else {
    //             setError("An unexpected error occurred.");
    //         }
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setLoading(true);

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

        } catch (err: unknown) {
            console.error("Firebase error:", err);
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Registration failed");
            }
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

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
                <Typography color="error" align="center" sx={{ mb: 2 }}>
                    {error}
                </Typography>
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
                    value={formData.email}
                    onChange={handleInputChange}
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
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Lock color="action" />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={togglePasswordVisibility} edge="end">
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
                    }}
                    size="large"
                >
                    {loading ? "Creating..." : "Register"}
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
                    href="/sign-up"
                >
                    Create with Google
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
                    href="/sign-up"
                >
                    Create with FaceBook
                </Button>
            </Box>
        </Container>
    );
}
