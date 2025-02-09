import squareIcon from '../assets/square.svg';
import circleIcon from '../assets/circle.svg';
import rectangleIcon from '../assets/rectangle.svg';
import triangleIcon from '../assets/triangle.svg';
import starIcon from '../assets/star.svg';
import DraggableGrid from './DraggableGrid';

const shapes = [
  { img: squareIcon, title: 'Square', type: 'square' },
  { img: rectangleIcon, title: 'Rectangle', type: 'rectangle' },
  { img: circleIcon, title: 'Circle', type: 'circle' },
  { img: triangleIcon, title: 'Triangle', type: 'triangle' },
  { img: starIcon, title: 'Star', type: 'star' },
];

export default function MapObjects() {
  return <DraggableGrid draggableItems={shapes} />;
}
