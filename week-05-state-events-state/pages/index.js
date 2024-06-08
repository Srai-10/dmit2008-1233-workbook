import { Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1"> Events and State</Typography>
      <Box>
        <Button onClick={() => console.log('Button clicked ...')} variant="Outlined">Click Me!</Button>
      </Box>
    </Container>
  );
}
   