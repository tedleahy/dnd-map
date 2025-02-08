import Box from '@mui/material/Box';
import { useState } from 'react';
import { IconButton, styled, Typography } from '@mui/material';
import Menu from '@mui/icons-material/Menu';

const DRAWER_WIDTH = 500;

const MapContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
`;

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          display: isDrawerOpen ? 'block' : 'none',
          width: DRAWER_WIDTH,
          backgroundColor: 'red',
        }}
      >
        <Typography variant='h6'>I am in the drawer!</Typography>
      </Box>
      <MapContainer>
        <IconButton aria-label='Open side menu' size='large' onClick={toggleDrawer}>
          <Menu fontSize='large' />
        </IconButton>
      </MapContainer>
    </Box>
  );
}
