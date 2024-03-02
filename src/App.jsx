import { Box, Typography } from '@mui/material'
import './App.css'
import Nav from './components/Nav'

function App() {
  return (
    <Box sx={{ bgcolor: 'background.default', mt: 5}}>
      <Nav/>
      <Typography variant="h2">Главная</Typography>
    </Box>
  )
}

export default App
