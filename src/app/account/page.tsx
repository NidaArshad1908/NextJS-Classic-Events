"use client";

import * as yup from "yup";
import { useState } from "react";
import { auth } from "@/lib/firebase";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Visibility, VisibilityOff, Email, Lock } from "@mui/icons-material";
import { Container, TextField, Button, Checkbox, FormControlLabel, Typography, Box, Divider, IconButton, InputAdornment, Chip, Alert } from "@mui/material";

type SignInFormData = {
    email: string;
    password: string;
    rememberMe?: boolean;
};

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Enter a valid email address")
        .required("Email is required"),
    password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});

export default function SignInPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormData>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
    });

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const onSubmit = async (data: SignInFormData) => {
        setError("");
        setLoading(true);
        try {

            const userCredential = await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            const token = await userCredential.user.getIdToken();
            console.log("Logged in:", userCredential.user);
            console.log("token", token);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container component="main" maxWidth="sm" sx={{ py: 8 }}>
            <Typography
                component="h1"
                variant="h4"
                align="center"
                gutterBottom
                sx={{ fontWeight: "bold", mb: 3 }}
            >
                Welcome Back
            </Typography>

            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            margin="normal"
                            fullWidth
                            label="Email Address"
                            autoComplete="email"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Email color="action" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                />

                <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            margin="normal"
                            fullWidth
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            autoComplete="current-password"
                            error={!!errors.password}
                            helperText={errors.password?.message}
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
                    )}
                />

                <Controller
                    name="rememberMe"
                    control={control}
                    render={({ field }) => (
                        <FormControlLabel
                            control={<Checkbox {...field} color="primary" />}
                            label="Remember me"
                        />
                    )}
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
                        color: '#000',
                        backgroundColor: '#B88658'
                    }}
                >
                    {loading ? "Logging in..." : "Log In"}
                </Button>

                <Divider sx={{ my: 2 }}>
                    <Chip label="or" />
                </Divider>

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
                    Create Account
                </Button>

                <Box textAlign="center" sx={{ mt: 2 }}>
                    <Button variant="text" sx={{ textTransform: "none", color: '#000000' }}>
                        Forgot your password?
                    </Button>
                </Box>
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
                    href="/sign-up"
                >
                    Continue with FaceBook
                </Button>
            </Box>
        </Container>
    );
}
