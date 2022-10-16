import { html } from 'lit';
import type { TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TwLitElement } from './common/TwLitElement';
import { store } from './store';
import type { Surface } from './surface';
import { newSurface, newSurfaceHtml } from './surface';
export * from './LitPager';

const defaultStore = store.getStore();
type SceneKeys = 'Pager' | 'Travel' | 'Edgeless' | undefined;

@customElement('travel-canvas')
export class TravelCanvas extends TwLitElement {
  // Declare reactive properties
  @property()
  travelTitle?: string = defaultStore.travelTitle;

  @property({ type: String })
  scene?: SceneKeys;

  @property({ type: Boolean })
  isFullscreenMode?: boolean = false;

  @property({ type: Array })
  surfaces: Surface[] = defaultStore.surfaces || [
    newSurface('article'),
    newSurface('stat'),
    newSurface('embed'),
    newSurface('image'),
    newSurface('counterdown'),
    newSurface('code'),
  ];

  constructor() {
    super();

    // this.scene = 'Travel';
    this.scene = 'Pager';

    store.saveStore({
      travelTitle: this.travelTitle,
      surfaces: this.surfaces,
    });
  }
  // Render the UI as a function of component state
  render(): TemplateResult {
    const surfacesTemplates = [];
    const travelTemplates = [];

    for (let index = 0; index < this.surfaces.length; index++) {
      const i = this.surfaces[index];
      surfacesTemplates.push(html`<div
        id="surface${i.id}"
        class="artboard artboard-horizontal bg-white rounded-box w-10/12 h-auto m-auto mt-8"
      >
        <div class="navbar bg-base-100">
          <a class="btn btn-ghost normal-case text-xl">${i.title}</a>
        </div>
        ${newSurfaceHtml(i.type)}
      </div>`);
      travelTemplates.push(html`<div
        style="width:1024px;height:768px"
        class="flex bg-white rounded-md shadow mr-10"
      >
        <div class="m-auto">
          <div class="navbar bg-base-100">
            <a class="btn btn-ghost normal-case text-xl">${i.title}</a>
          </div>
          ${newSurfaceHtml(i.type)}
        </div>
      </div> `);
    }
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
            <div class="btn-group">
              <button
                class="${this.scene === 'Pager'
                  ? 'btn-active'
                  : ''} btn  btn-sm"
                @click=${() => {
                  this._onSwitchScene('Pager');
                }}
              >
                Pager
              </button>
              <button
                class="${this.scene === 'Travel'
                  ? 'btn-active'
                  : ''} btn btn-sm"
                @click=${() => {
                  this._onSwitchScene('Travel');
                }}
              >
                Travel
              </button>
              <button
                class="${this.scene === 'Edgeless'
                  ? 'btn-active'
                  : ''} btn btn-sm"
                @click=${() => {
                  this._onSwitchScene('Edgeless');
                }}
              >
                Edgeless
              </button>
            </div>
            <input
              id="title"
              class="input w-full text-center focus:border-none"
              value="${this.travelTitle}"
            />
          </div>
          <div class="navbar-end">
            <a
              class="mr-4 cursor-pointer tooltip tooltip-bottom"
              data-tip="New a travel"
              @click=${this._onNewTravel}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                />
              </svg>
            </a>
            <a
              class="mr-4 cursor-pointer tooltip tooltip-bottom"
              data-tip="Share to Twitter"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </a>
            <a
              class="mr-12 cursor-pointer tooltip tooltip-bottom"
              data-tip="Enter Fullscreen"
              @click=${() => (this.isFullscreenMode = true)}
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="flex flex-row ">
          <div class="${this.scene === 'Pager' ? 'block' : 'hidden'} ">
            <pager-menus
              .activeSurfaceId=${this.surfaces[0].id}
              .surfaces=${this.surfaces}
              .canvasEl=${this.renderRoot}
            ></pager-menus>

            <div class="basis-4/5 ml-72 mt-28  pb-96">${surfacesTemplates}</div>
          </div>
          <div
            class="${this.scene === 'Travel'
              ? 'block container mt-28 m-auto'
              : 'hidden'} "
          >
            <div
              class="overflow-x-auto flex flex-row flex-nowrap"
              style="width:${1024 * this.surfaces.length}px"
            >
              ${travelTemplates}
            </div>
          </div>
          <div
            class="${this.scene === 'Edgeless'
              ? 'block container mt-24 m-auto'
              : 'hidden'} "
          >
            Edgeless
          </div>
        </div>
      </div>
      <div
        class="${!this.isFullscreenMode
          ? 'hidden'
          : 'block'} fixed h-screen w-screen z-50 bg-primary overflow-auto "
        style="top:0px;"
      >
        <div class="flex flex-row h-16 p-1">
          <div class="basis-1/4 flex">
            <a
              class="btn ml-4 m-auto"
              @click=${() => (this.isFullscreenMode = false)}
              >Exit FullScreen</a
            >
          </div>
          <div class="basis-1/2 flex">
            <div class="text-white text-xl m-auto">${this.travelTitle}</div>
          </div>
          <div class="basis-1/4"></div>
        </div>
        <div class="pt-4 pb-20">${surfacesTemplates}</div>
      </div>
    `;
  }

  _onSwitchScene(newScene: SceneKeys) {
    this.scene = newScene;
    console.log(this.scene);
  }
  _onNewTravel() {
    this.surfaces = [
      newSurface('article'),
      newSurface('stat'),
      newSurface('embed'),
      newSurface('image'),
      newSurface('counterdown'),
      newSurface('code'),
    ];
    store.saveStoreSurfaces(this.surfaces);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'travel-canvas': TravelCanvas;
  }
}
