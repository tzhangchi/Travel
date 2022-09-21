import { DeckjsCanvas } from '@deckjs/ui';
import { noop } from './utils';
import './index.css';
window.onload = () => {
  // avoid being tree-shaked
  noop(DeckjsCanvas);
  const DeckjsCanvasInstance = document.createElement('deckjs-canvas');
  document.body.appendChild(DeckjsCanvasInstance);
};
