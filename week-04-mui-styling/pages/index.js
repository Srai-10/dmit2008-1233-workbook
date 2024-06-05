import AltPageHeading from "@/components/AltPageHeading";
import { Button, Container, Typography } from '@mui/material';
export default function Home() {
  return (
      <container maxWidth="sm">
       <AltPageHeading text="Home Page" />
       <Typography>Welcome to the Home Page!</Typography>
       <button variant="Outlined">Some Button</button>
      </container>
  );
}
