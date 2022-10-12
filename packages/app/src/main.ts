import { TravelCanvas } from '@travel/ui';
import { noop } from './utils';
import './index.css';
window.onload = () => {
  // avoid being tree-shaked
  noop(TravelCanvas);
  const TravelCanvasInstance = document.createElement('travel-canvas');
  document.body.appendChild(TravelCanvasInstance);
};
