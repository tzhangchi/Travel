import { html } from 'lit';
import type { TemplateResult } from 'lit';

import { customElement, property, eventOptions } from 'lit/decorators.js';
import { TwLitElement } from './common/TwLitElement';

import { store } from './store';
interface Surface {
  title: string;
  id: string;
  type:
    | string
    | 'image'
    | 'article'
    | 'code'
    | 'counterdown'
    | 'stat'
    | 'embed';
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
const _newSurface = function (
  newType = ['image', 'article', 'code', 'counterdown', 'stat', 'embed'][
    Math.floor(Math.random() * 5)
  ]
): Surface {
  const id = _uuid();
  const title = _surfaceTitle(id);
  const type = newType;
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
  } else if (type === 'stat') {
    return html`<div
      class="stats shadow  flex items-center justify-center gap-2"
    >
      <div class="stat">
        <div class="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div class="stat-title">Total Likes</div>
        <div class="stat-value text-primary">25.6K</div>
        <div class="stat-desc">21% more than last month</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div class="stat-title">Page Views</div>
        <div class="stat-value text-secondary">2.6M</div>
        <div class="stat-desc">21% more than last month</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <div class="avatar online">
            <div class="w-16 rounded-full">
              <img src="https://placeimg.com/128/128/people" />
            </div>
          </div>
        </div>
        <div class="stat-value">86%</div>
        <div class="stat-title">Tasks done</div>
        <div class="stat-desc text-secondary">31 tasks remaining</div>
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
  } else if (type == 'counterdown') {
    return html`<div
      class="preview border-base-300  rounded-b-box rounded-tr-box flex flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 undefined"
    >
      <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div
          class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"
        >
          <span class="countdown font-mono text-5xl">
            <span style="--value:15;"></span>
          </span>
          days
        </div>
        <div
          class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"
        >
          <span class="countdown font-mono text-5xl">
            <span style="--value:10;"></span>
          </span>
          hours
        </div>
        <div
          class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"
        >
          <span class="countdown font-mono text-5xl">
            <span style="--value:24;"></span>
          </span>
          min
        </div>
        <div
          class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"
        >
          <span class="countdown font-mono text-5xl">
            <span style="--value:56;"></span>
          </span>
          sec
        </div>
      </div>
    </div>`;
  } else if (type === 'embed') {
    return html`<div class="embed">
      <iframe
        src="http://affine.pro/"
        class="w-full h-96"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>`;
  }
};

const defaultStore = store.getStore();
@customElement('travel-canvas')
export class TravelCanvas extends TwLitElement {
  // Declare reactive properties
  @property()
  title?: string = defaultStore.title;

  @property({ type: Boolean })
  isPresentationMode?: boolean = false;

  @property({ type: Array })
  surfaces: Surface[] = defaultStore.surfaces || [
    _newSurface('article'),
    _newSurface('stat'),
    _newSurface('embed'),
    _newSurface('image'),
    _newSurface('counterdown'),
    _newSurface('code'),
  ];

  @property({ type: String, reflect: true })
  activeSurfaceId?: string;

  constructor() {
    super();
    this.activeSurfaceId = this.surfaces[0].id;
    store.saveStore({
      title: this.title,
      surfaces: this.surfaces,
    });
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
        <div class="navbar bg-base-100">
          <a class="btn btn-ghost normal-case text-xl">${i.title}</a>
        </div>
        ${_getSurfaceContent(i.type)}
      </div>`);

      menuTemplates.push(html` <li
        @click=${() => this._onClickMenuItem(i.id, index)}
        class="${this.activeSurfaceId == i.id ? 'bg-primary text-white ' : ''}"
      >
        <a
          >${i.title}
          <svg
            @click=${(e: Event) => {
              this._onAddPage(e, index);
            }}
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
            <a class="btn btn-ghost normal-case">Travel</a>
          </div>
          <div class="navbar-center w-6/12">
            <input
              id="title"
              class="input w-full text-center focus:border-none"
              value="${this.title}"
            />
          </div>
          <div class="navbar-end">
            <a class="btn btn-primary mr-4">Share</a>
            <a
              class="btn btn-secondary"
              @click=${() => (this.isPresentationMode = true)}
              >Presentation</a
            >
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
      <div
        class="${!this.isPresentationMode
          ? 'hidden'
          : 'block'} fixed h-screen w-screen z-50 bg-primary overflow-auto "
        style="top:0px;"
      >
        <div class="navbar">
          <div class="flex-1">
            <a class="text-white  text-xl">${this.title}</a>
          </div>
          <div class="flex-none">
            <a
              class="btn float-right"
              @click=${() => (this.isPresentationMode = false)}
              >Exit Presentation</a
            >
          </div>
        </div>
        <div class="pt-4 pb-20">${surfacesTemplates}</div>
      </div>
    `;
  }
  _onClickMenuItem(id: string, index: number) {
    this.activeSurfaceId = id;
    const eleId = `surface${id}`;
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
        (this.renderRoot.querySelector('#surfaceScrollContainer')?.scrollTop ||
          0);
    }

    this.renderRoot
      .querySelector('#surfaceScrollContainer')
      ?.scrollTo({ top: newTop, behavior: 'smooth' });
  }

  @eventOptions({ capture: true })
  _onAddPage(e: Event, index: number) {
    // const array: Surface[] = this.surfaces;
    const newSurface = _newSurface('article');
    const newIndex = index + 1;
    this.surfaces.splice(newIndex, 0, newSurface);
    this.surfaces = [...this.surfaces];

    store.saveStore({
      title: this.title,
      surfaces: this.surfaces,
    });
    e.stopPropagation();

    setTimeout(() => {
      this._onClickMenuItem(newSurface.id, newIndex);
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'travel-canvas': TravelCanvas;
  }
}
