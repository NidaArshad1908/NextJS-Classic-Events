"use client";

import * as React from 'react';
import { Box } from "@mui/material";
import Header from "./header/page";
import Footer from "./footer/page";

export default function AppPage({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
}