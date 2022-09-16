import { DCanvas } from '@deckjs/ui';
import { noop } from './utils';
import './index.css';
window.onload = () => {
  // avoid being tree-shaked
  noop(DCanvas);
  const DCanvasInstance = document.createElement('d-canvas');
  document.body.appendChild(DCanvasInstance);
};
