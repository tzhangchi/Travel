import { html } from 'lit';
import type { TemplateResult } from 'lit';

import { customElement, property } from 'lit/decorators.js';
import { TwLitElement } from './common/TwLitElement';

@customElement('deckjs-canvas')
export class DeckjsCanvas extends TwLitElement {
  // Declare reactive properties
  @property()
  name?: string = 'Presentation Title';

  // Render the UI as a function of component state
  render(): TemplateResult {
    return html`
      <div
        class="bg-primary flex-wrap items-center justify-center w-screen h-screen"
      >
        <div class="navbar bg-white">
          <div class="navbar-start">
            <a class="btn btn-ghost normal-case">Deckjs</a>
          </div>
          <div class="navbar-center">${this.name}!</div>
          <div class="navbar-end">
            <a class="btn btn-primary mr-4">Share</a>
            <a class="btn btn-secondary">Presentation</a>
          </div>
        </div>
        <div class="flex flex-row ">
          <div class="basis-1/4">01</div>
          <div class="basis-3/">02</div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'deckjs-canvas': DeckjsCanvas;
  }
}
