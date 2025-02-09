import Box from '@mui/material/Box';
import { useState } from 'react';
import { IconButton, styled, Typography } from '@mui/material';
import Menu from '@mui/icons-material/Menu';
import Slide from '@mui/material/Slide';

const MENU_WIDTH = 500;

const MapContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
`;

const SideMenu = styled(Box)`
  width: ${MENU_WIDTH}px;
  border-right: 1px solid rgb(60 59 59 / 30%);
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 40px 0;
`;

export default function App() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const toggleMenu = () => setisMenuOpen(!isMenuOpen);

  return (
    <Box sx={{ display: 'flex', overflow: 'hidden' }}>
      <Slide direction='right' in={isMenuOpen} mountOnEnter unmountOnExit>
        <SideMenu>
          <Typography variant='h6'>I am in the side menu!</Typography>
        </SideMenu>
      </Slide>
      <MapContainer>
        <IconButton aria-label='Open side menu' size='large' onClick={toggleMenu} open={isMenuOpen}>
          <Menu fontSize='large' />
        </IconButton>
      </MapContainer>
    </Box>
  );
}
