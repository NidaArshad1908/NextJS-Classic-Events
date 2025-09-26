"use client";

import React, { useState, type ChangeEvent, type FormEvent, type MouseEvent } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
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
import { useTheme } from "@mui/material/styles";
import { usePathname, useRouter } from "next/navigation";
import { AppBar, Toolbar, Typography, Box, Link, useMediaQuery, InputBase, IconButton, Menu, MenuItem, Button, Tab, Tabs } from "@mui/material";

export default function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const router = useRouter();
    const pathname = usePathname();

    const [searchQuery, setSearchQuery] = useState("");
    const [categoriesAnchor, setCategoriesAnchor] = useState<null | HTMLElement>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const categoriesOpen = Boolean(categoriesAnchor);

    const navItems = [
        { text: "Home", href: "/home" },
        { text: "Equipment For Hire", href: "/equipment" },
        { text: "About Us", href: "/about" },
        { text: "Our Work", href: "/our-work" },
        { text: "Request Quote", href: "/request-quote" },
        { text: "Contact Us", href: "/contact-us" },
    ];

    const currentTab = navItems.findIndex((item) => item.href === pathname);

    const handleCategoriesClick = (event: MouseEvent<HTMLButtonElement>) => {
        setCategoriesAnchor(event.currentTarget);
    };

    const handleCategoriesClose = () => {
        setCategoriesAnchor(null);
    };

    const handleSearchChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Searching for:", searchQuery);
        router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

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
        <Box sx={{ mt: -1, mx: -1 }}>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: "#2C302B",
                    height: isMobile ? "auto" : "40px",
                    justifyContent: "center",
                    py: isMobile ? 1 : 0,
                }}
                elevation={0}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 1,
                        minHeight: "40px !important",
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mr: 40 }}>
                        <EmailIcon sx={{ fontSize: 16, color: "#b08968" }} />
                        <Link
                            href="mailto:bookings@classicevents.co.za"
                            underline="none"
                            sx={{
                                color: "white",
                                fontSize: "0.875rem",
                                fontFamily: "var(--font-poppins)",
                                "&:hover": { color: "#b08968" },
                            }}
                        >
                            bookings@classicevents.co.za
                        </Link>
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 2, ml: 10 }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                <PhoneIcon sx={{ fontSize: 16, color: "#b08968" }} />
                                <Link
                                    href="tel:+27117919168"
                                    underline="none"
                                    sx={{
                                        color: "white",
                                        fontSize: "0.875rem",
                                        fontFamily: "var(--font-poppins)",
                                        "&:hover": { color: "#b08968" },
                                    }}
                                >
                                    +27 11 791 9168
                                </Link>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                <PhoneIcon sx={{ fontSize: 16, color: "#b08968" }} />
                                <Link
                                    href="tel:+27827428239"
                                    underline="none"
                                    sx={{
                                        color: "white",
                                        fontSize: "0.875rem",
                                        fontFamily: "var(--font-poppins)",
                                        "&:hover": { color: "#b08968" },
                                    }}
                                >
                                    +27 82 742 8239
                                </Link>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: 40 }}>
                        <AccountCircleIcon sx={{ fontSize: 16, color: "#b08968" }} />
                        <Link
                            href="/account"
                            underline="none"
                            sx={{
                                color: "white",
                                fontSize: "0.875rem",
                                fontFamily: "var(--font-poppins)",
                                "&:hover": { color: "#b08968" },
                            }}
                        >
                            My Account
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", px: 40, py: 4, backgroundColor: "#fff", borderBottom: "1px solid #b08968" }}>
                <Box
                    component="form"
                    onSubmit={handleSearchSubmit}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        border: "2px solid #b08968",
                        borderRadius: "50px",
                        px: 2,
                        py: 1,
                        width: "600px",
                        mx: 20,
                    }}
                >
                    <SearchIcon sx={{ fontSize: 18, color: "#b08968", mr: 1 }} />
                    <InputBase
                        placeholder="Search for equipment..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        inputProps={{ "aria-label": "search equipment" }}
                        sx={{
                            flex: 1,
                            color: "#000",
                            fontFamily: "var(--font-poppins)",
                            "& input::placeholder": {
                                fontFamily: "var(--font-poppins)",
                                opacity: 0.7
                            }
                        }}
                    />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, ml: "auto" }}>
                    <Box
                        sx={{ textAlign: "right", color: "#000", display: { xs: "none", sm: "block" }, cursor: "pointer" }}
                    // onClick={() => router.push("/quote")}
                    >
                        <Typography
                            variant="body2"
                            sx={{ fontWeight: "bold", fontSize: "0.9rem", color: "#000", fontFamily: "var(--font-montserrat)" }}
                        >
                            ADD TO QUOTE
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography
                                variant="body2"
                                sx={{ color: "#000", mr: 1, fontFamily: "var(--font-montserrat)" }}
                            >
                                R0.00
                            </Typography>
                        </Box>
                    </Box>

                    {isMobile && (
                        <IconButton sx={{ color: "#b08968" }}>
                            <SearchIcon />
                        </IconButton>
                    )}

                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleMobileMenu}
                        sx={{ color: "#b08968", display: { xs: "block", md: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#FFF6F0", gap: 10 }}>
                <Button
                    onClick={handleCategoriesClick}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#2C302B",
                        px: 3,
                        py: 2,
                        borderRadius: "0",
                        cursor: "pointer",
                        textTransform: "none",
                        minWidth: "250px",
                        "&:hover": {
                            backgroundColor: "#1a1d19",
                        },
                    }}
                >
                    <MenuIcon sx={{ fontSize: 18, color: "white", mr: 1 }} />
                    <Typography
                        variant="body2"
                        sx={{ color: "white", fontWeight: "500", fontSize: 16, fontFamily: "var(--font-montserrat)" }}
                    >
                        Show All Categories
                    </Typography>
                </Button>

                <Menu
                    anchorEl={categoriesAnchor}
                    open={categoriesOpen}
                    onClose={handleCategoriesClose}
                    sx={{
                        "& .MuiPaper-root": {
                            backgroundColor: "white",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                            borderRadius: "8px",
                            minWidth: "250px",
                            mt: 1,
                            maxHeight: "70vh",
                            overflowY: "auto",
                        },
                    }}
                    MenuListProps={{
                        "aria-labelledby": "categories-button",
                    }}
                >
                    {categories.map((category) => (
                        <MenuItem
                            key={category.name}
                            onClick={handleCategoriesClose}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                py: 1.5,
                                px: 3,
                                "&:hover": {
                                    backgroundColor: "#f5f5f5",
                                },
                            }}
                        >
                            {typeof category.icon === "string" ? (
                                <Typography component="span" fontSize="18px">{category.icon}</Typography>
                            ) : (
                                <category.icon fontSize="small" />
                            )}
                            <Typography
                                variant="body2"
                                sx={{ color: "#2C302B", fontFamily: "var(--font-poppins)" }}
                            >
                                {category.name}
                            </Typography>
                        </MenuItem>
                    ))}
                </Menu>

                <Box sx={{ px: 2 }}>
                    <Tabs
                        value={currentTab === -1 ? 0 : currentTab}
                        textColor='inherit'
                        TabIndicatorProps={{
                            style: { backgroundColor: "#D7B78E", height: "3px" },
                        }}
                    >
                        {navItems.map((item, index) => (
                            <Tab
                                key={index}
                                label={item.text}
                                onClick={() => router.push(item.href)}
                                sx={{
                                    color: "black",
                                    fontFamily: "var(--font-montserrat)",
                                    fontWeight: 500,
                                    textTransform: "none",
                                    "&.Mui-selected": {
                                        color: "black",
                                        fontWeight: 600,
                                    },
                                }}
                            />
                        ))}
                    </Tabs>
                </Box>
            </Box>
        </Box>
    )
}