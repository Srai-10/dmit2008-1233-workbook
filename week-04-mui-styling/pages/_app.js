import { ThemeProvider } from '@mui/material';
import { theme } from '@/utils/theme/config';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
