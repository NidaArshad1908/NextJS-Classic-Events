"use client";
import { Box, Typography, Button, Container, Divider } from "@mui/material";

const galleryImages = [
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0058.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0054.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0055.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0056.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0057.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0059.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0060.jpg",
];

const galleryImages2 = [
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0053.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0039.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0041.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0042.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0043.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0044.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0045.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0046.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0047.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0048.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0052.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0050.jpg",
];

const galleryImages3 = [
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0020.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0021.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0022.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0025.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0038.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0015.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0019.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0006.jpg",
];

const galleryImages4 = [
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0115.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0116.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0118.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0119.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0120.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0121.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0122.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0123.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0124.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0125.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0126.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0128.jpg",
];

const galleryImages5 = [
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0102.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0103.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0104.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0105.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0106.jpg",
  "https://lillybeesevents.co.za/wp-content/uploads/2023/09/IMG-20230826-WA0095.jpg", ,
];

export default function OurWorkHero() {
  return (
    <Box>

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

      <Divider sx={{ borderColor: "#B88568", my: 1, width: "50%", mx: "auto", borderBottomWidth: 2 }} />

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
            {galleryImages2.map((image, index) => (
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

      <Divider sx={{ borderColor: "#B88568", my: 1, width: "50%", mx: "auto", borderBottomWidth: 2 }} />

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
            {galleryImages3.map((image, index) => (
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

      <Divider sx={{ borderColor: "#B88568", my: 1, width: "50%", mx: "auto", borderBottomWidth: 2 }} />

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
            {galleryImages4.map((image, index) => (
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

      <Divider sx={{ borderColor: "#B88568", my: 1, width: "50%", mx: "auto", borderBottomWidth: 2 }} />

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
            {galleryImages5.map((image, index) => (
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
