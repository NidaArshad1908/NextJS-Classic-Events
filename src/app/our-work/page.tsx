"use client";
import { Box, Typography, Button, Container } from "@mui/material";

const galleryImages = [
  "https://t3.ftcdn.net/jpg/03/35/71/52/360_F_335715230_xzXaUgNPtOTtT7bZS8RwcYhP2JLIT8EH.jpg",
  "https://t3.ftcdn.net/jpg/02/83/83/92/360_F_283839263_64Kw4OAIyVhTnUpLa4Y4g0HvSXIU9oN5.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxThEO8r6r_hJCQh62C25LEABv74soLQanQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh76RtAvzFZqJY5XVMoxwYuGzAE5VOU3Ddmg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV24J-Hy5fZ3pzS2lO5uvfzaXtR3d8zq_B_g&s",
  "https://t3.ftcdn.net/jpg/03/35/71/52/360_F_335715230_xzXaUgNPtOTtT7bZS8RwcYhP2JLIT8EH.jpg",
  "https://t3.ftcdn.net/jpg/02/83/83/92/360_F_283839263_64Kw4OAIyVhTnUpLa4Y4g0HvSXIU9oN5.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxThEO8r6r_hJCQh62C25LEABv74soLQanQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh76RtAvzFZqJY5XVMoxwYuGzAE5VOU3Ddmg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV24J-Hy5fZ3pzS2lO5uvfzaXtR3d8zq_B_g&s",
];

export default function OurWorkHero() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          backgroundImage: `url('https://www.shutterstock.com/image-photo/banquet-table-setting-decoration-black-600nw-2175495657.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1,
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 2, px: 2 }}>
          <Typography
            variant="h6"
            sx={{ fontStyle: "italic", mb: 1, color: "#c6a482" }}
          >
            Our Work
          </Typography>

          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            What we have done before
          </Typography>

          <Typography variant="subtitle1" sx={{ mb: 3, color: "#d7b98e" }}>
            Not only do we offer the best service, we also work with your budget.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#b17852",
              "&:hover": { backgroundColor: "#a16946" },
            }}
          >
            Get In Touch
          </Button>
        </Box>
      </Box>

      {/* Gallery Section */}
      <Box sx={{ width: "100%" }}>
        <Container maxWidth="xl" sx={{ py: 8, px: { xs: 2, md: 4 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(5, 1fr)",
              },
              gap: 3,
              mt: 4,
            }}
          >
            {galleryImages.map((image, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.02)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={image}
                  alt={`Classic Events Gallery ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    "&:hover": { opacity: 1 },
                  }}
                />
              </Box>

            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
