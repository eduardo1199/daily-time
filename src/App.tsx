import { RouterProvider } from 'react-router-dom'

import './styles/global'

import { router } from './routes'
import { Box } from '@mui/material'

function App() {
  return (
    <Box bgcolor="#e9f6ed" width="100vw" height="100vh">
      <RouterProvider router={router} />
    </Box>
  )
}

export default App
