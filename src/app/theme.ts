
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: '#2563EB',
    },

    secondary: {
      main: '#64748B',
    },

    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },

    text: {
      primary: '#0F172A',
      secondary: '#64748B',
    },
  },

  shape: {
    borderRadius: 10,
  },

  typography: {
    fontFamily: [
      'Inter',
      'system-ui',
      'sans-serif',
    ].join(','),

    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
})
