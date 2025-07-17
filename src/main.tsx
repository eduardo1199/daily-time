import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import './index.css'
import App from './App.tsx'

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={dayjs.locale()}>
      <App />
    </LocalizationProvider>
  </StrictMode>,
)
