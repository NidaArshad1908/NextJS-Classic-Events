"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function ServicesPage() {

  return (
    <Container maxWidth="md">
      <Grid container spacing={3} wrap="nowrap" pt={3}>
        {/* <Grid item xs={12}> */}
        <Typography variant="h3" gutterBottom>
          title
        </Typography>
        <Typography>description</Typography>
        {/* </Grid> */}
      </Grid>
    </Container>
  );
}

export default ServicesPage;
