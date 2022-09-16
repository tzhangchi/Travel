import { html } from 'lit';
import type { TemplateResult } from 'lit';

import { customElement, property } from 'lit/decorators.js';
import { TwLitElement } from './common/TwLitElement';

@customElement('d-canvas')
export class DCanvas extends TwLitElement {
  // Declare reactive properties
  @property()
  name?: string = 'd-canvas';

  // Render the UI as a function of component state
  render(): TemplateResult {
    return html` <style>
        .root {
          width: 100vw;
          height: 100vh;
        }
        .container {
          display: flex;
        }
        .toc {
          display: flex;
          flex: 1;
          background-color: white;
          height: 100vh;
        }
        .surfaces {
          display: flex;
          flex: 7;
          text-align: center;
          flex-direction: column;
          align-items: center;
          // background-color: #f3f4f6;
        }
        .surface {
          display: flex;
          background-color: white;
          margin-top: 10px;
          border-radius: 10px;
          text-align: center;
          width: 640px;
          height: 320px;
        }
      </style>
      <div class="root">
        <div class="container">
          <div class="toc">
            <div>Tables of Content</div>
          </div>
          <div class="surfaces bg-blue-50">
            <div class="surface text-3xl">Hello, ${this.name}!</div>
          </div>
        </div>
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'd-canvas': DCanvas;
  }
}
