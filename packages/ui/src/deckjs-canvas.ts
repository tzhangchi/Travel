import { html } from 'lit';
import type { TemplateResult } from 'lit';

import { customElement, property, eventOptions } from 'lit/decorators.js';
import { TwLitElement } from './common/TwLitElement';

interface Surface {
  title: string;
  id: string;
  type: string | 'image' | 'article' | 'code';
}

const _uuid = (): string => Math.floor(Math.random() * 1000) + '';

const _randomTitle = () =>
  [
    'Chapter1',
    'Chapter2',
    'Chapter3',
    'Chapter4',
    'Chapter5',
    'Chapter6',
    'Chapter7',
    'Chapter8',
    'Chapter9',
    'Chapter10',
  ][Math.floor(Math.random() * 10)];
const _surfaceTitle = (_id?: string) =>
  'S-' + (_id || _uuid()) + ' ' + _randomTitle();
const _newSurface = function (newType = 'article'): Surface {
  const id = _uuid();
  const title = _surfaceTitle(id);
  const type =
    newType || ['image', 'article', 'code'][Math.floor(Math.random() * 3)];
  return {
    id,
    title,
    type,
  };
};
const _getSurfaceContent = (type: string) => {
  if (type === 'article' || !type) {
    return html`<div class="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/400/arch" alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>`;
  } else if (type == 'code') {
    return html`<div class="mockup-code">
      <pre data-prefix="$"><code>npm i daisyui</code></pre>
      <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
      <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
    </div>`;
  } else if (type == 'image') {
    return html`<div class="carousel w-full">
        <div id="item1" class="carousel-item w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
        </div>
        <div id="item2" class="carousel-item w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
        </div>
        <div id="item3" class="carousel-item w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
        </div>
        <div id="item4" class="carousel-item w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
        </div>
      </div>
      <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="btn btn-xs">1</a>
        <a href="#item2" class="btn btn-xs">2</a>
        <a href="#item3" class="btn btn-xs">3</a>
        <a href="#item4" class="btn btn-xs">4</a>
      </div>`;
  }
};
@customElement('deckjs-canvas')
export class DeckjsCanvas extends TwLitElement {
  // Declare reactive properties
  @property()
  name?: string = 'Building decks and blocks , presentation like a doc';

  @property({ type: Array })
  surfaces: Surface[] = [
    _newSurface('article'),
    _newSurface('image'),
    _newSurface('code'),
  ];

  @property({ type: String, reflect: true })
  activeSurfaceId?: string;

  constructor() {
    super();
    this.activeSurfaceId = this.surfaces[0].id;
  }
  // Render the UI as a function of component state
  render(): TemplateResult {
    const surfacesTemplates = [];
    const menuTemplates = [];
    for (let index = 0; index < this.surfaces.length; index++) {
      const i = this.surfaces[index];
      surfacesTemplates.push(html`<div
        id="surface${i.id}"
        class="artboard artboard-horizontal bg-white rounded-box w-10/12 h-auto mt-10 m-auto "
      >
        ${_getSurfaceContent(i.type)}
      </div>`);

      menuTemplates.push(html` <li
        @click=${() => {
          this.activeSurfaceId = i.id;
          const eleId = `surface${i.id}`;
          console.log(eleId);
          let newTop = this.renderRoot
            .querySelector('#' + eleId)
            ?.getBoundingClientRect().y;
          // debugger;

          if (index === 0) {
            newTop = 0;
          } else {
            newTop =
              -72 +
              (newTop || 0) +
              (this.renderRoot.querySelector('#surfaceScrollContainer')
                ?.scrollTop || 0);
          }

          // console.log(
          //   this.renderRoot.querySelector('#' + eleId)?.getBoundingClientRect()
          // );
          // debugger;
          this.renderRoot
            .querySelector('#surfaceScrollContainer')
            ?.scrollTo({ top: newTop, behavior: 'smooth' });
        }}
        class="${this.activeSurfaceId == i.id
          ? 'bg-primary text-white te'
          : ''}"
      >
        <a
          >${i.title}
          <svg
            @click=${this._onAddPage}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </a>
      </li>`);
    }
    // console.log(surfacesTemplates);
    return html`
      <div
        class="bg-base-200 flex-wrap items-center justify-center w-screen h-screen overflow-auto bg-top"
        style="background-image: radial-gradient(hsla(215 28% 17%/.2) .5px,hsla(0 0% 95%/1) .5px);background-size: 5px 5px;"
        id="surfaceScrollContainer"
      >
        <div class="navbar bg-white fixed z-50">
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
          <div class="w-72 fixed " style="top:72px">
            <ul
              class="menu bg-base-100 w-auto p-2 mt-10 rounded-box overflow-y-auto"
            >
              ${menuTemplates}
            </ul>
          </div>
          <div class="basis-4/5 ml-72  pt-4" style="margin-top:72px">
            ${surfacesTemplates}
            <div class="text-center mt-2">
              <a class="btn btn-accent" @click=${this._onAddPage}>Add Page</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  @eventOptions({ capture: true })
  _onAddPage(e: Event) {
    this.surfaces = [...this.surfaces, _newSurface()];

    console.log(this.surfaces);
    e.stopPropagation();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'deckjs-canvas': DeckjsCanvas;
  }
}
