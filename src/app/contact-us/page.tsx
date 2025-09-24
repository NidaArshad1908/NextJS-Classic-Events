"use client";

import { Container, Typography } from "@mui/material";
import * as React from 'react';

export default function ContactUs() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" gutterBottom>
                Equipment for Hire
            </Typography>
            <Typography variant="body1" gutterBottom>
                Explore our extensive range of equipment available for hire. Whether you are looking for audio gear, lighting solutions, or staging equipment, we have everything you need to make your event a success.
            </Typography>
        </Container>
    )
}