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
          <div class="basis-1/5">
            <ul class="menu bg-base-100 w-auto p-2 mt-10 rounded-box">
              <li class="menu-title">
                <span>Page Title</span>
              </li>
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
              <li class="menu-title">
                <span>Page Title</span>
              </li>
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
              <li class="menu-title">
                <span>Page Title</span>
              </li>
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
              <li class="menu-title">
                <span>Page Title</span>
              </li>
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
              <li class="menu-title">
                <span>Page Title</span>
              </li>
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
          <div class="basis-4/5">
            <div
              class="artboard artboard-horizontal bg-white rounded-box w-10/12 h-auto mt-10 m-auto"
            >
              <div class="hero h-max">
                <div class="hero-content text-center">
                  <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Hello there</h1>
                    <p class="py-6">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut
                      assumenda excepturi exercitationem quasi. In deleniti
                      eaque aut repudiandae et a id nisi.
                    </p>
                    <button class="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
              <div class="hero">
                <div class="hero-content flex-col lg:flex-row">
                  <img
                    src="https://placeimg.com/260/400/arch"
                    class="max-w-sm rounded-lg shadow-2xl"
                  />
                  <div>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut
                      assumenda excepturi exercitationem quasi. In deleniti
                      eaque aut repudiandae et a id nisi.
                    </p>
                    <button class="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
