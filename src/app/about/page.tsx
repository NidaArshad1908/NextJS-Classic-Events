"use client";

import { Box, Typography, Container, Button } from "@mui/material";
import * as React from "react";

export default function AboutUs() {
    const backgroundImage =
        "https://png.pngtree.com/thumb_back/fh260/background/20250821/pngtree-romantic-dinner-setting-with-wine-glasses-and-roses-styled-for-elegant-image_18229831.webp";

    const galleryImages = [
        "https://www.shutterstock.com/image-photo/beautiful-flowers-decorated-on-tabletables-600nw-2169601491.jpg",
        "https://m.media-amazon.com/images/I/818zia2eUhL.jpg",
        "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg",
        "https://jugyah-dev-property-photos.s3.ap-south-1.amazonaws.com/simple_wedding_stage_deocration_08_ebbbc72c56.webp",
        "https://forbetterforworse.co.uk/wp-content/uploads/2022/07/1.-Romantic-Sign.png",
    ];

    const aboutImage1 = "https://i.pinimg.com/564x/01/a0/16/01a016f19683036e1d94ee0bb25917b9.jpg";
    const aboutImage2 = "https://i.pinimg.com/736x/39/d3/f2/39d3f274d9a8ef4fc8d16545b1e86d09.jpg";

    const leftImages = [
        "https://www.shutterstock.com/image-photo/side-view-caucasian-businessman-giving-600nw-1331273819.jpg",
        "https://www.adel-crystal.com/pic/big/2023-5-23-12-2-41.jpg",
        "https://5.imimg.com/data5/TM/RF/FQ/SELLER-35028796/oval-trophies-500x500.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nD-Oy_D7t4ZFiKryJBi3YdNROX18noORJw&s",
    ];


    return (
        <>
            <Box sx={{ width: "100%", }}>
                <Box sx={{ minHeight: "60vh", backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", color: "white", px: 3, }}>
                    <Typography sx={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: { xs: "1.2rem", md: "1.5rem" }, color: "#D7B78E", mb: 2, opacity: 0.9, }}>About Us</Typography>
                    <Typography variant="h2" sx={{ fontFamily: "var(--font-playfair)", fontWeight: 600, fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" }, lineHeight: 1.2, mb: 3, maxWidth: "800px", }}>Who We Are</Typography>
                    <Typography sx={{ fontFamily: "var(--font-poppins)", fontSize: { xs: "1.1rem", md: "1.3rem" }, maxWidth: "600px", lineHeight: 1.6, opacity: 0.9, color: "#D7B783" }}>Not only do we offer the best service, we also work with your budget.</Typography>
                </Box>

                <Container maxWidth="xl" sx={{ py: 8, px: { xs: 2, md: 4 } }}>
                    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(5, 1fr)", }, gap: 3, mt: 4, }}>
                        {galleryImages.map((image, index) => (
                            <Box key={index} sx={{ position: "relative", borderRadius: 3, overflow: "hidden", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-8px) scale(1.02)", boxShadow: "0 12px 30px rgba(0,0,0,0.2)", }, }}>
                                <Box component="img" src={image} alt={`Classic Events Gallery ${index + 1}`} sx={{ width: "100%", height: "280px", objectFit: "cover", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.05)" }, }} />

                                <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))", opacity: 0, transition: "opacity 0.3s ease", "&:hover": { opacity: 1 }, }} />
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>

            <Box sx={{ py: 8, backgroundColor: "white" }}>
                <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, maxWidth: "1200px", mx: "auto", px: { xs: 3, md: 6 }, gap: 4, }}>
                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", pr: { lg: 4 }, }}>
                        <Typography variant="h5" sx={{ color: "#666", mb: 2, fontWeight: 500, fontFamily: "var(--font-playfair)", }}>What Classic Events is all about.</Typography>

                        <Typography sx={{ color: "#B88658", fontStyle: "italic", fontSize: "1.1rem", mb: 3, fontFamily: "var(--font-poppins)", }}>We turn your dream event into reality!</Typography>

                        <Typography sx={{ color: "#666", mb: 3, lineHeight: 1.6, fontFamily: "var(--font-poppins)", }}>Our team is here to make your event unique and truly amazing.</Typography>

                        <Typography sx={{ color: "#666", mb: 4, lineHeight: 1.6, fontFamily: "var(--font-poppins)", }}>
                            Our aim is to help you make your event a memorable and stress-free.Be it your wedding, birthday party, lobola ceremony, graduationparty and many more, we will bring your dream to life.
                        </Typography>

                        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                            <Button variant="contained" sx={{ bgcolor: "#B88658", px: 4, py: 1.5, "&:hover": { bgcolor: "black" }, textTransform: "none", fontFamily: "var(--font-montserrat)", fontWeight: 600, }}>Know More About Us</Button>

                            <Button variant="contained" sx={{ bgcolor: "black", px: 4, py: 1.5, "&:hover": { bgcolor: "#B88658" }, textTransform: "none", fontFamily: "var(--font-montserrat)", fontWeight: 600, }}>Get In Touch</Button>
                        </Box>
                    </Box>
                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2, position: "relative", }}>
                        <Box sx={{ width: "100%", alignSelf: "flex-end", position: "relative", }}>
                            <Box component="img" src={aboutImage1} alt="Event Setup" sx={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: 2, }} />
                        </Box>

                        <Box sx={{ width: "70%", alignSelf: "flex-start", position: "relative", mt: -3 }}>
                            <Box component="img" src={aboutImage2} alt="Wedding Setup" sx={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: 2 }} />
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ py: 8, backgroundColor: "#fdf7f4" }}>
                <Container maxWidth="xl" sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 6, alignItems: "center", }}>
                    <Box sx={{ flex: 1, display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr" }, gap: 2, }}>
                        {leftImages.map((src, i) => (
                            <Box key={i} component="img" src={src} alt={`About Image ${i}`} sx={{ width: "100%", borderRadius: 2, objectFit: "cover", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", }} />))}
                    </Box>

                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, fontFamily: "var(--font-playfair)", color: "#333", }}>Who we are</Typography>

                        <Typography sx={{ color: "#666", lineHeight: 1.6, mb: 3, fontFamily: "var(--font-poppins)", }} >
                            Classic Events is an award winning company with a team ofprofessional, knowledgeable and experienced luxury events planners.
                        </Typography>
                        <Typography sx={{ color: "#666", lineHeight: 1.6, mb: 3, fontFamily: "var(--font-poppins)", }} >
                            We understand the demands of conceptualizing and producing the perfect event. In order to bring you superior quality,
                            your event deserves we team up with only the top professionals in the industry.
                        </Typography>

                        <Box sx={{ mb: 3 }}>
                            {[
                                "VIP Events",
                                "Product Launch",
                                "Year End Functions",
                                "Conference Events",
                                "Corporate Events",
                                "Weddings",
                                "Birthday Parties",
                                "Graduation Parties and more...",
                            ].map((item, idx) => (
                                <Typography key={idx} sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1, fontFamily: "var(--font-poppins)", color: "#444", }}>✅ {item}</Typography>
                            ))}
                        </Box>
                        <Typography sx={{ color: "#666", lineHeight: 1.6, mb: 3, fontFamily: "var(--font-poppins)", }} >
                            Let us assist you in creating memorable, magical and meaningful events!
                        </Typography>
                        <Button variant="contained" sx={{ bgcolor: "#B88658", px: 4, py: 1.5, "&:hover": { bgcolor: "black" }, textTransform: "none", fontFamily: "var(--font-montserrat)", fontWeight: 600, borderRadius: "8px", boxShadow: "0 3px 8px rgba(0,0,0,0.2)", }}>Request Quote</Button>
                    </Box>
                </Container>
            </Box>

            <Box sx={{ py: 8, backgroundColor: "white" }}>
                <Container maxWidth="lg" sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: 6, }}>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, fontFamily: "var(--font-playfair)", color: "#333", }}>Private Events</Typography>

                        <Typography sx={{ color: "#555", lineHeight: 1.7, mb: 2, fontFamily: "var(--font-poppins)", }}>
                            If you’re planning a special event, milestone function or a special
                            private event celebration, you will find everything you’ll need at
                            our one-stop event shop.
                        </Typography>

                        <Typography sx={{ color: "#555", lineHeight: 1.7, mb: 2, fontFamily: "var(--font-poppins)", }}>
                            Our team will help you plan your event whether it be a grand event
                            or an intimate dinner. You will find a wide range of services with
                            our professional coordinators that will allow your function or event
                            to become a wonderful stress-free and perfect affair. We specialize
                            in acquiring the best caterers, décor, wines, gift packs,
                            entertainment, venues, themes and much more.
                        </Typography>

                        <Typography sx={{ color: "#555", lineHeight: 1.7, mb: 3, fontFamily: "var(--font-poppins)", }}>
                            You are guaranteed to be knocked off your socks no matter how
                            intricate the detail or logistical planning is.
                        </Typography>

                        <Button variant="contained" sx={{ bgcolor: "#B88658", px: 4, py: 1.5, "&:hover": { bgcolor: "black" }, textTransform: "none", fontFamily: "var(--font-montserrat)", fontWeight: 600, borderRadius: "6px", }}>Request Quote</Button>
                    </Box>

                    <Box sx={{ flex: 1, position: "relative", display: "flex", justifyContent: "center", }}>
                        <Box component="img" src="https://holaweddings.com/wp-content/uploads/2020/03/Dreams-Natura-over-the-water-wedding-ceremony-white.jpg" alt="Private Event Main" sx={{ width: "100%", maxWidth: 500, borderRadius: 2, boxShadow: "0 4px 20px rgba(0,0,0,0.15)", }} />
                        <Box component="img" src="https://grandeshores.icnd-cdn.com/userfiles/grande-shores-resort-wedding-D4906351-6DFC-4BC2-9EA8BEECF92E9F7B.jpg" alt="Private Event Small" sx={{ position: "absolute", bottom: -40, left: { xs: "20%", md: "10%" }, width: "50%", borderRadius: 2, boxShadow: "0 6px 20px rgba(0,0,0,0.2)", border: "5px solid white", }} />
                    </Box>
                </Container>
            </Box>

            <Box sx={{ py: 8, textAlign: "center", backgroundColor: "#fdf7f4" }}>
                <Typography variant="h3" sx={{ fontWeight: 500, mb: 2, color: "#333", fontFamily: "var(--font-playfair)" }}>Some of our clients include:</Typography>
                <Box sx={{ width: "100px", height: "2px", backgroundColor: "#B88658", mx: "auto", mb: 6, }} />
                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2, }}>
                    {[
                        "The Garden Venue",
                        "Killarney Country Club",
                        "Dainfern Golf Club",
                        "BidVest Coin",
                        "Research 94 Plus",
                        "Moon 6 Sixpence",
                        "Inimitable Wedding Venue",
                    ].map((client, index) => (
                        <Box key={index} sx={{ px: 3, py: 2, backgroundColor: "#fdf7f4", borderRadius: 1, border: "1px solid #e0e0e0", textAlign: "center", transition: "all 0.3s ease-in-out", fontSize: "0.95rem", fontWeight: 600, color: "#333", fontFamily: "var(--font-montserrat)", "&:hover": { transform: "translateY(-4px)", backgroundColor: "#fdf7f4", borderColor: "#A66C47", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", }, }}>{client}</Box>
                    ))}
                </Box>
            </Box>

            <Box sx={{ py: 8, textAlign: "center", backgroundColor: "white" }}>
                <Typography variant="h3" sx={{ fontWeight: 500, mb: 8, color: "#333", fontFamily: "var(--font-playfair)" }}>What our clients say about us.</Typography>

                <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, maxWidth: "1200px", mx: "auto", px: { xs: 3, md: 6 }, gap: 4 }}>
                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, fontFamily: "var(--font-montserrat)", color: "#333" }}>EXCELLENT</Typography>

                        <Box sx={{ display: "flex", gap: 0.5, mb: 2 }}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Typography key={star} sx={{ fontSize: "2rem", color: "#FFD700" }}>★</Typography>
                            ))}
                        </Box>

                        <Typography sx={{ color: "#666", mb: 1, fontFamily: "var(--font-poppins)" }}>Based on 69 reviews</Typography>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
                            <Typography sx={{ fontSize: "2rem", fontWeight: "bold", color: "#4285F4", fontFamily: "var(--font-poppins)" }}>G</Typography>
                            <Typography sx={{ fontSize: "2rem", fontWeight: "bold", color: "#EA4335", fontFamily: "var(--font-poppins)" }}>o</Typography>
                            <Typography sx={{ fontSize: "2rem", fontWeight: "bold", color: "#FBBC05", fontFamily: "var(--font-poppins)" }}>o</Typography>
                            <Typography sx={{ fontSize: "2rem", fontWeight: "bold", color: "#4285F4", fontFamily: "var(--font-poppins)" }}>g</Typography>
                            <Typography sx={{ fontSize: "2rem", fontWeight: "bold", color: "#34A853", fontFamily: "var(--font-poppins)" }}>l</Typography>
                            <Typography sx={{ fontSize: "2rem", fontWeight: "bold", color: "#EA4335", fontFamily: "var(--font-poppins)" }}>e</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ flex: 2, display: "flex", flexDirection: "row", gap: 3, overflowX: "auto" }}>
                        <Box sx={{ minWidth: "300px", backgroundColor: "white", borderRadius: 3, p: 3, boxShadow: "0 2px 10px rgba(0,0,0,0.1)", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-8px)", boxShadow: "0 8px 25px rgba(0,0,0,0.15)" } }}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#B88658", display: "flex", alignItems: "center", justifyContent: "center", mr: 2 }}>
                                    <Typography sx={{ color: "white", fontWeight: "bold", fontFamily: "var(--font-montserrat)" }}>L</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: "bold", fontSize: "0.9rem", fontFamily: "var(--font-montserrat)" }}>Lonia Kgosinkwe</Typography>
                                    <Typography sx={{ fontSize: "0.75rem", color: "#666", fontFamily: "var(--font-poppins)" }}>2025-07-06</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", gap: 0.2, mb: 2 }}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Typography key={star} sx={{ fontSize: "1rem", color: "#FFD700" }}>★</Typography>
                                ))}
                                <Typography sx={{ ml: 1, fontSize: "0.8rem", color: "#4285F4" }}>✓</Typography>
                            </Box>

                            <Typography sx={{ fontSize: "0.9rem", lineHeight: 1.5, color: "#333", fontFamily: "var(--font-poppins)" }}>
                                Wow! Thank you so much for your great service and bueatiful decor.
                            </Typography>
                        </Box>

                        <Box sx={{ minWidth: "300px", backgroundColor: "white", borderRadius: 3, p: 3, boxShadow: "0 2px 10px rgba(0,0,0,0.1)", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-8px)", boxShadow: "0 8px 25px rgba(0,0,0,0.15)" } }}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#6B73FF", display: "flex", alignItems: "center", justifyContent: "center", mr: 2 }}>
                                    <Typography sx={{ color: "white", fontWeight: "bold", fontFamily: "var(--font-montserrat)" }}>N</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: "bold", fontSize: "0.9rem", fontFamily: "var(--font-montserrat)" }}>Natalie Fung</Typography>
                                    <Typography sx={{ fontSize: "0.75rem", color: "#666", fontFamily: "var(--font-poppins)" }}>2025-06-30</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", gap: 0.2, mb: 2 }}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Typography key={star} sx={{ fontSize: "1rem", color: "#FFD700" }}>★</Typography>
                                ))}
                                <Typography sx={{ ml: 1, fontSize: "0.8rem", color: "#4285F4" }}>✓</Typography>
                            </Box>

                            <Typography sx={{ fontSize: "0.9rem", lineHeight: 1.5, color: "#333", fontFamily: "var(--font-poppins)" }}>
                                From the website, to Classic warm & friendly personality.
                            </Typography>
                        </Box>

                        <Box sx={{ minWidth: "300px", backgroundColor: "white", borderRadius: 3, p: 3, boxShadow: "0 2px 10px rgba(0,0,0,0.1)", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-8px)", boxShadow: "0 8px 25px rgba(0,0,0,0.15)" } }}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#8B4513", display: "flex", alignItems: "center", justifyContent: "center", mr: 2 }}>
                                    <Typography sx={{ color: "white", fontWeight: "bold", fontFamily: "var(--font-montserrat)" }}>M</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: "bold", fontSize: "0.9rem", fontFamily: "var(--font-montserrat)" }}>Moments in Time</Typography>
                                    <Typography sx={{ fontSize: "0.75rem", color: "#666", fontFamily: "var(--font-poppins)" }}>2025-06-22</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", gap: 0.2, mb: 2 }}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Typography key={star} sx={{ fontSize: "1rem", color: "#FFD700" }}>★</Typography>
                                ))}
                                <Typography sx={{ ml: 1, fontSize: "0.8rem", color: "#4285F4" }}>✓</Typography>
                            </Box>

                            <Typography sx={{ fontSize: "0.9rem", lineHeight: 1.5, color: "#333", fontFamily: "var(--font-poppins)" }}>
                                Excellent service, on time delivery and decor hiring items were clean and in excellent condition.
                            </Typography>
                        </Box>

                        <Box sx={{ minWidth: "300px", backgroundColor: "white", borderRadius: 3, p: 3, boxShadow: "0 2px 10px rgba(0,0,0,0.1)", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-8px)", boxShadow: "0 8px 25px rgba(0,0,0,0.15)" } }}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#B88658", display: "flex", alignItems: "center", justifyContent: "center", mr: 2 }}>
                                    <Typography sx={{ color: "white", fontWeight: "bold", fontFamily: "var(--font-montserrat)" }}>R</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: "bold", fontSize: "0.9rem", fontFamily: "var(--font-montserrat)" }}> Rudzani Tshikota </Typography>
                                    <Typography sx={{ fontSize: "0.75rem", color: "#666", fontFamily: "var(--font-poppins)" }}>2025-05-04</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", gap: 0.2, mb: 2 }}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Typography key={star} sx={{ fontSize: "1rem", color: "#FFD700" }}>★</Typography>
                                ))}
                                <Typography sx={{ ml: 1, fontSize: "0.8rem", color: "#4285F4" }}>✓</Typography>
                            </Box>

                            <Typography sx={{ fontSize: "0.9rem", lineHeight: 1.5, color: "#333", fontFamily: "var(--font-poppins)" }}>
                                Thank you so much @ Classic Events for making our events special.
                            </Typography>
                        </Box>

                        <Box sx={{ minWidth: "300px", backgroundColor: "white", borderRadius: 3, p: 3, boxShadow: "0 2px 10px rgba(0,0,0,0.1)", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-8px)", boxShadow: "0 8px 25px rgba(0,0,0,0.15)" } }}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#6B73FF", display: "flex", alignItems: "center", justifyContent: "center", mr: 2 }}>
                                    <Typography sx={{ color: "white", fontWeight: "bold", fontFamily: "var(--font-montserrat)" }}>M</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: "bold", fontSize: "0.9rem", fontFamily: "var(--font-montserrat)" }}> Melissa Coetzee </Typography>
                                    <Typography sx={{ fontSize: "0.75rem", color: "#666", fontFamily: "var(--font-poppins)" }}>2025-04-22</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", gap: 0.2, mb: 2 }}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Typography key={star} sx={{ fontSize: "1rem", color: "#FFD700" }}>★</Typography>
                                ))}
                                <Typography sx={{ ml: 1, fontSize: "0.8rem", color: "#4285F4" }}>✓</Typography>
                            </Box>

                            <Typography sx={{ fontSize: "0.9rem", lineHeight: 1.5, color: "#333", fontFamily: "var(--font-poppins)" }}>
                                Thank you Classic and crew. Your service is impeccable and made this a smooth experience.
                            </Typography>
                        </Box>

                        <Box sx={{ minWidth: "300px", backgroundColor: "white", borderRadius: 3, p: 3, boxShadow: "0 2px 10px rgba(0,0,0,0.1)", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-8px)", boxShadow: "0 8px 25px rgba(0,0,0,0.15)" } }}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#8B4513", display: "flex", alignItems: "center", justifyContent: "center", mr: 2 }}>
                                    <Typography sx={{ color: "white", fontWeight: "bold", fontFamily: "var(--font-montserrat)" }}>N</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: "bold", fontSize: "0.9rem", fontFamily: "var(--font-montserrat)" }}> Ntando Magadla </Typography>
                                    <Typography sx={{ fontSize: "0.75rem", color: "#666", fontFamily: "var(--font-poppins)" }}>2025-03-02</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", gap: 0.2, mb: 2 }}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Typography key={star} sx={{ fontSize: "1rem", color: "#FFD700" }}>★</Typography>
                                ))}
                                <Typography sx={{ ml: 1, fontSize: "0.8rem", color: "#4285F4" }}>✓</Typography>
                            </Box>

                            <Typography sx={{ fontSize: "0.9rem", lineHeight: 1.5, color: "#333", fontFamily: "var(--font-poppins)" }}>
                                Classic and her team are absolutely great job. Punctual, friendly, caring and reasonable.
                            </Typography>
                        </Box>

                        <Box sx={{ minWidth: "300px", backgroundColor: "white", borderRadius: 3, p: 3, boxShadow: "0 2px 10px rgba(0,0,0,0.1)", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-8px)", boxShadow: "0 8px 25px rgba(0,0,0,0.15)" } }}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#B88658", display: "flex", alignItems: "center", justifyContent: "center", mr: 2 }}>
                                    <Typography sx={{ color: "white", fontWeight: "bold", fontFamily: "var(--font-montserrat)" }}>J</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: "bold", fontSize: "0.9rem", fontFamily: "var(--font-montserrat)" }}> Janine Ryan </Typography>
                                    <Typography sx={{ fontSize: "0.75rem", color: "#666", fontFamily: "var(--font-poppins)" }}>2025-02-23</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", gap: 0.2, mb: 2 }}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Typography key={star} sx={{ fontSize: "1rem", color: "#FFD700" }}>★</Typography>
                                ))}
                                <Typography sx={{ ml: 1, fontSize: "0.8rem", color: "#4285F4" }}>✓</Typography>
                            </Box>

                            <Typography sx={{ fontSize: "0.9rem", lineHeight: 1.5, color: "#333", fontFamily: "var(--font-poppins)" }}>
                                Great service. Lillian is such an amazing helpful person, her items are in amazing condition
                            </Typography>
                        </Box>

                        <Box sx={{ minWidth: "300px", backgroundColor: "white", borderRadius: 3, p: 3, boxShadow: "0 2px 10px rgba(0,0,0,0.1)", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-8px)", boxShadow: "0 8px 25px rgba(0,0,0,0.15)" } }}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#6B73FF", display: "flex", alignItems: "center", justifyContent: "center", mr: 2 }}>
                                    <Typography sx={{ color: "white", fontWeight: "bold", fontFamily: "var(--font-montserrat)" }}>D</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: "bold", fontSize: "0.9rem", fontFamily: "var(--font-montserrat)" }}> Danelle Tyler </Typography>
                                    <Typography sx={{ fontSize: "0.75rem", color: "#666", fontFamily: "var(--font-poppins)" }}>2025-02-23</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", gap: 0.2, mb: 2 }}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Typography key={star} sx={{ fontSize: "1rem", color: "#FFD700" }}>★</Typography>
                                ))}
                                <Typography sx={{ ml: 1, fontSize: "0.8rem", color: "#4285F4" }}>✓</Typography>
                            </Box>

                            <Typography sx={{ fontSize: "0.9rem", lineHeight: 1.5, color: "#333", fontFamily: "var(--font-poppins)" }}>
                                We rented a candy cart and back drops from Lilly bees events. We received excellent service
                            </Typography>
                        </Box>

                        <Box sx={{ minWidth: "300px", backgroundColor: "white", borderRadius: 3, p: 3, boxShadow: "0 2px 10px rgba(0,0,0,0.1)", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-8px)", boxShadow: "0 8px 25px rgba(0,0,0,0.15)" } }}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#8B4513", display: "flex", alignItems: "center", justifyContent: "center", mr: 2 }}>
                                    <Typography sx={{ color: "white", fontWeight: "bold", fontFamily: "var(--font-montserrat)" }}>N</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: "bold", fontSize: "0.9rem", fontFamily: "var(--font-montserrat)" }}> Nonto Khumalo </Typography>
                                    <Typography sx={{ fontSize: "0.75rem", color: "#666", fontFamily: "var(--font-poppins)" }}>2024-12-09</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", gap: 0.2, mb: 2 }}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Typography key={star} sx={{ fontSize: "1rem", color: "#FFD700" }}>★</Typography>
                                ))}
                                <Typography sx={{ ml: 1, fontSize: "0.8rem", color: "#4285F4" }}>✓</Typography>
                            </Box>

                            <Typography sx={{ fontSize: "0.9rem", lineHeight: 1.5, color: "#333", fontFamily: "var(--font-poppins)" }}>
                                Great service, quality equipment
                            </Typography>
                        </Box>

                    </Box>
                </Box>
            </Box>

        </>
    );
}
