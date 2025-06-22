import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import { theme } from './theme';
import {Provider} from 'react-redux';
import { store } from './store';
import { ResponsiveProvider } from './context/ResponsiveProvider';


createRoot(document.getElementById('root')!).render(
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ResponsiveProvider>
    </ThemeProvider>
  </>,
)
