import Box from '@mui/material/Box';
import { useState } from 'react';
import { IconButton, styled } from '@mui/material';
import Menu from '@mui/icons-material/Menu';
import Slide from '@mui/material/Slide';
import MapObjects from './components/MapObjects';

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
  padding: 20px;
  overflow-y: auto;
`;

export default function App() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const toggleMenu = () => setisMenuOpen(!isMenuOpen);

  return (
    <Box sx={{ display: 'flex', overflow: 'hidden' }}>
      <Slide direction='right' in={isMenuOpen} mountOnEnter unmountOnExit>
        <SideMenu>
          <MapObjects />
        </SideMenu>
      </Slide>
      <MapContainer>
        <IconButton
          aria-label='Open side menu'
          size='large'
          onClick={toggleMenu}
          sx={{ '&:focus': { outline: 'none' } }}
        >
          <Menu fontSize='large' />
        </IconButton>
      </MapContainer>
    </Box>
  );
}
