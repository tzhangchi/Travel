import { html } from 'lit';
import type { TemplateResult } from 'lit';

import { customElement, property, eventOptions } from 'lit/decorators.js';
import { TwLitElement } from './common/TwLitElement';

interface Surface {
  title: string;
  id: string;
}
const _uuid = (): string => Math.floor(Math.random() * 1000) + '';

const _surfaceTitle = (_id?: string) => 'Surface ' + (_id || _uuid());
const _newSurface = function (): Surface {
  const id = _uuid();
  const title = _surfaceTitle(id);
  return {
    id,
    title,
  };
};
@customElement('deckjs-canvas')
export class DeckjsCanvas extends TwLitElement {
  // Declare reactive properties
  @property()
  name?: string = 'Building decks and blocks , presentation like a doc';

  @property({ type: Array })
  surfaces: Surface[] = new Array(5).fill(undefined).map(() => _newSurface());

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
      surfacesTemplates.push(html` <div
        id="surface${i.id}"
        class="artboard artboard-horizontal bg-white rounded-box w-10/12 h-auto mt-10 m-auto "
      >
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div
              class="flex justify-between items-center gap-8 mb-4 sm:mb-8 md:mb-12"
            >
              <div class="flex items-center gap-12">
                <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold">
                  ${i.title}
                </h2>

                <p class="max-w-screen-sm hidden md:block text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>
              </div>
            </div>

            <div
              class="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8"
            >
              <!-- image - start -->
              <a
                href="#"
                class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />

                <div
                  class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"
                ></div>

                <span
                  class="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3"
                  >VR</span
                >
              </a>
              <!-- image - end -->

              <!-- image - start -->
              <a
                href="#"
                class="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                  loading="lazy"
                  alt="Photo by Magicle"
                  class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />

                <div
                  class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"
                ></div>

                <span
                  class="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3"
                  >Tech</span
                >
              </a>
              <!-- image - end -->
            </div>
          </div>
        </div>
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
          ? 'bg-secondary text-white te'
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
        class="bg-primary flex-wrap items-center justify-center w-screen h-screen overflow-auto"
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
          <div class="basis-4/5 ml-72 text-center pt-4" style="margin-top:72px">
            ${surfacesTemplates}
            <a class="btn btn-accent" @click=${this._onAddPage}>Add Page</a>
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
