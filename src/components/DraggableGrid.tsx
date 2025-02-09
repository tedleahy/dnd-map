import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

const DraggableItem = styled(Paper)(({ theme }) => ({
  cursor: 'grab',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '& img': {
    width: 40,
    height: 40,
    objectFit: 'contain',
  },
}));

interface DraggableGridProps {
  draggableItems: {
    img: string;
    title: string;
    type: string;
  }[];
}

export default function DraggableGrid({ draggableItems }: DraggableGridProps) {
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      {draggableItems.map((item) => (
        <Grid size={6} key={item.type}>
          <DraggableItem elevation={0} draggable>
            <img src={item.img} alt={item.title} draggable={false} />
            <Typography variant='body2' align='center'>
              {item.title}
            </Typography>
          </DraggableItem>
        </Grid>
      ))}
    </Grid>
  );
}
