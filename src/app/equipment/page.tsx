/* eslint-disable @next/next/no-img-element */
"use client";

import { Box, Container, FormControl, Select, Typography, Card, CardMedia, CardContent, MenuItem, Button } from "@mui/material";
import React, { useState } from "react";
import ChairAltIcon from '@mui/icons-material/ChairAlt';
import TableBarIcon from '@mui/icons-material/TableBar';
import InventoryIcon from "@mui/icons-material/Inventory";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import WeekendIcon from "@mui/icons-material/Weekend";
import LayersIcon from "@mui/icons-material/Layers";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CastleIcon from "@mui/icons-material/Castle";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import CelebrationIcon from "@mui/icons-material/Celebration";

export default function EquipmentForHire() {
    const [category, setCategory] = useState("");
    const [sort, setSort] = useState("default");

    const products = [
        {
            id: 1,
            title: "2 Plate Gas Stove – Heavyduty Steel – Black",
            price: "R500.00",
            img: "https://lillybeesevents.co.za/wp-content/uploads/2023/09/2-Plate-Gas-Stove-Heavyduty-Steel-Black-300x300.webp",
        },
        {
            id: 2,
            title: "3 Candle Holder – Gold",
            price: "R350.00",
            img: "https://lillybeesevents.co.za/wp-content/uploads/2023/08/3-Candle-Holder-Gold-300x300.webp",
        },
        {
            id: 3,
            title: "3 Piece Backdrop",
            price: "R1,000.00",
            img: "https://lillybeesevents.co.za/wp-content/uploads/2023/10/2c97fbf3-ca6f-400b-9f22-306b855e80dd-300x270.jpg",
        },
        {
            id: 4,
            title: "3 Piece Arch Backdrop",
            price: "R1,000.00",
            img: "https://lillybeesevents.co.za/wp-content/uploads/2023/08/3-Piece-Arch-Backdrop-300x300.webp",
        },
        {
            id: 5,
            title: "3 Seater Couch",
            price: "R850.00",
            img: "https://lillybeesevents.co.za/wp-content/uploads/2023/09/3-Seater-Couch-2-300x300.webp",
        },
        {
            id: 6,
            title: "3 Seater White Couch",
            price: "R850.00",
            img: "https://lillybeesevents.co.za/wp-content/uploads/2023/09/3-Seater-Couch-3-300x300.webp",
        },
        {
            id: 7,
            title: "3 Tier Glass Candle Stand",
            price: "R250.00",
            img: "https://lillybeesevents.co.za/wp-content/uploads/2023/10/78532-300x300.jpg",
        },
        {
            id: 8,
            title: "3pc Glass Candle Holder Cup",
            price: "R150.00",
            img: "https://lillybeesevents.co.za/wp-content/uploads/2023/10/CVL13656-300x300.jpg.webp",
        },
        {
            id: 9,
            title: "3pc Glass Candle Holder",
            price: "R150.00",
            img: "https://lillybeesevents.co.za/wp-content/uploads/2023/11/3-peace-candle-1-300x300.jpg",
        },
    ];

    const categories = [
        { name: "Chairs", icon: ChairAltIcon },
        { name: "Tables", icon: TableBarIcon },
        { name: "Linen", icon: InventoryIcon },
        { name: "Underplates", icon: DinnerDiningIcon },
        { name: "Centerpieces", icon: LocalFloristIcon },
        { name: "Backdrops", icon: TheaterComedyIcon },
        { name: "Couches", icon: WeekendIcon },
        { name: "Flooring", icon: LayersIcon },
        { name: "Catering", icon: RestaurantIcon },
        { name: "Jumping Castle", icon: CastleIcon },
        { name: "Tents", icon: HolidayVillageIcon },
        { name: "Kids Range", icon: CelebrationIcon },
    ];

    return (
        <Container>
            <Box
                sx={{
                    position: "relative",
                    width: "100vw",
                    height: { xs: "300px", md: "500px" },
                    margin: 0,
                    padding: 0,
                    marginLeft: "calc(-50vw + 50%)",
                    marginRight: "calc(-50vw + 50%)",
                }}
            >
                <img
                    src="https://media.istockphoto.com/id/1197789061/photo/wedding-table-decoration-rustic-style.jpg?s=612x612&w=0&k=20&c=IJx-ctLD_BpSCuINW3nzVJS5xm7YUJR36wCYZ_ts6Tg="
                    alt="Our Equipment"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,0.4)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        px: 2,
                    }}
                >
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            color: "white",
                            fontWeight: "bold",
                            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                            fontSize: { xs: "2rem", md: "3.5rem" },
                            textAlign: "center",
                            mb: 2,
                            fontFamily: "'Playfair Display', serif",
                        }}
                    >
                        Our Equipment
                    </Typography>

                    <Box
                        sx={{
                            mt: { xs: 4, md: 6 },
                            backgroundColor: "white",
                            border: "1px solid #b08968",
                            borderRadius: "6px",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: 3,
                            px: 4,
                            py: 2,
                            maxWidth: "900px",
                        }}
                    >
                        {categories.map((cat) => (
                            <Box
                                key={cat.name}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    color: "#2C302B",
                                    fontSize: "0.95rem",
                                    minWidth: "120px",
                                    justifyContent: "center",
                                }}
                            >
                                <Box sx={{ fontSize: 18, display: "flex", alignItems: "center" }}>
                                    {typeof cat.icon === "string" ? (
                                        <Typography component="span" fontSize="18px">
                                            {cat.icon}
                                        </Typography>
                                    ) : (
                                        <cat.icon fontSize="small" />
                                    )}
                                </Box>
                                <Typography variant="body2">{cat.name}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>


            <Box
                sx={{
                    p: 3,
                    backgroundColor: "#white",
                    minHeight: "100vh",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", lg: "row" },
                        gap: 3,
                        maxWidth: "1400px",
                        margin: "0 auto",
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: "100%", lg: "280px" },
                            flexShrink: 0,
                        }}
                    >
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{
                                mb: 2,
                                fontWeight: 600,
                                color: "#333",
                                fontSize: "18px",
                            }}
                        >
                            Product Categories Hire
                        </Typography>

                        <Box sx={{ mb: 3 }}>
                            <FormControl fullWidth variant="outlined">
                                <Select
                                    value={category}
                                    displayEmpty
                                    onChange={(e) => setCategory(e.target.value)}
                                    sx={{
                                        backgroundColor: "white",
                                        "& .MuiSelect-select": {
                                            padding: "12px 14px",
                                            color: category ? "#333" : "#999",
                                        },
                                    }}
                                >
                                    <MenuItem value="" sx={{ color: "#999" }}>
                                        Select a category
                                    </MenuItem>
                                    <MenuItem value="table">Table</MenuItem>
                                    <MenuItem value="linen">Linen</MenuItem>
                                    <MenuItem value="backdrop">Backdrop</MenuItem>
                                    <MenuItem value="couches">Couches</MenuItem>
                                    <MenuItem value="catering">Catering</MenuItem>
                                    <MenuItem value="cake-stand">Cake Stand</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>

                    <Box sx={{ flex: 1 }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", sm: "row" },
                                alignItems: { xs: "stretch", sm: "center" },
                                justifyContent: "space-between",
                                gap: 2,
                                mb: 3,
                                p: 2,
                                backgroundColor: "white",
                                borderRadius: "4px",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#666",
                                    fontSize: "14px",
                                }}
                            >
                                Showing 1–9 of 235 results
                            </Typography>

                            <Box sx={{ width: { xs: "100%", sm: "200px" } }}>
                                <FormControl fullWidth variant="outlined">
                                    <Select
                                        value={sort}
                                        onChange={(e) => setSort(e.target.value)}
                                        sx={{
                                            backgroundColor: "white",
                                            "& .MuiSelect-select": {
                                                padding: "8px 14px",
                                                color: "#333",
                                            },
                                        }}
                                    >
                                        <MenuItem value="default">Default sorting</MenuItem>
                                        <MenuItem value="popularity">Sort by popularity</MenuItem>
                                        <MenuItem value="latest">Sort by latest</MenuItem>
                                        <MenuItem value="rating">Sort by average rating</MenuItem>
                                        <MenuItem value="price-high">
                                            Sort by price: high to low
                                        </MenuItem>
                                        <MenuItem value="price-low">
                                            Sort by price: low to high
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "repeat(1, 1fr)",
                                    sm: "repeat(2, 1fr)",
                                    md: "repeat(3, 1fr)",
                                    lg: "repeat(3, 1fr)",
                                },
                                gap: 2,
                            }}
                        >
                            {products.map((product) => (
                                <Card
                                    key={product.id}
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        transition: "transform 0.2s ease-in-out",
                                        "&:hover": {
                                            transform: "translateY(-4px)",
                                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                        },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={product.img}
                                        alt={product.title}
                                        sx={{
                                            objectFit: "cover",
                                            width: "100%"
                                        }}
                                    />
                                    <CardContent
                                        sx={{
                                            flexGrow: 1,
                                            p: 2,
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Box>
                                            <Typography
                                                variant="body2"
                                                gutterBottom
                                                sx={{
                                                    fontSize: "14px",
                                                    lineHeight: 1.4,
                                                    height: "2.8rem",
                                                    overflow: "hidden",
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: "vertical",
                                                    mb: 1,
                                                }}
                                            >
                                                {product.title}
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                color="primary"
                                                sx={{
                                                    fontSize: "16px",
                                                    fontWeight: "bold",
                                                    mb: 1.5,
                                                }}
                                            >
                                                {product.price}
                                            </Typography>
                                        </Box>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            fullWidth
                                            sx={{
                                                textTransform: "none",
                                                backgroundColor: "#b08968",
                                                fontSize: "14px",
                                                py: 1,
                                                "&:hover": {
                                                    backgroundColor: "#9a765a",
                                                },
                                            }}
                                        >
                                            Add to cart
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>


            <Box sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 6 }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        overflow: "hidden",
                        backgroundColor: "white",
                    }}
                >
                    <Button
                        sx={{
                            minWidth: "40px",
                            height: "40px",
                            color: "#2C302B",
                            backgroundColor: "#f3e5d8",
                            "&:hover": {
                                backgroundColor: "#f3e5d8",
                            },
                        }}
                    >
                        ←
                    </Button>

                    {[1, 2, 3, 4, "...", 25, 26, 27].map((page, index) => (
                        <Button
                            key={index}
                            sx={{
                                minWidth: "40px",
                                height: "40px",
                                color: page === 1 ? "white" : "#2C302B",
                                fontWeight: "normal",
                                backgroundColor: page === 1 ? "#b08968" : "#f3e5d8",
                                "&:hover": {
                                    backgroundColor: page === 1 ? "#b08968" : "#f3e5d8",
                                },
                            }}
                        >
                            {page}
                        </Button>
                    ))}

                    <Button
                        sx={{
                            minWidth: "40px",
                            height: "40px",
                            color: "#2C302B",
                            backgroundColor: "#f3e5d8",
                            "&:hover": {
                                backgroundColor: "#f3e5d8",
                            },
                        }}
                    >
                        →
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
