import { html } from 'lit';
import type { TemplateResult } from 'lit';

import { customElement, property } from 'lit/decorators.js';
import { TwLitElement } from './common/TwLitElement';

@customElement('deckjs-canvas')
export class DeckjsCanvas extends TwLitElement {
  // Declare reactive properties
  @property()
  name?: string = 'deckjs-canvas';

  // Render the UI as a function of component state
  render(): TemplateResult {
    return html`
      <div
        class="bg-primary flex-wrap items-center justify-center w-screen h-screen"
      >
        <div class="navbar bg-white">
          <div class="flex-1">
            <a class="btn btn-ghost normal-case"> Hello, ${this.name}!</a>
          </div>
          <div class="flex-none">
            <div class="flex-none">
              <ul class="menu menu-horizontal p-0">
                <li class="mr-6"><a class="btn btn-primary">Share</a></li>
                <li><a class="btn btn-secondary">Presentation</a></li>
              </ul>
            </div>
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
