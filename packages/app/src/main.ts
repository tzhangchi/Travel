import { SimpleGreeting } from '@deckjs/ui';
import { noop } from './utils';

window.onload = () => {
  // avoid being tree-shaked
  noop(SimpleGreeting);
  const pageBlock = document.createElement('simple-greeting');
  document.body.appendChild(pageBlock);
};
