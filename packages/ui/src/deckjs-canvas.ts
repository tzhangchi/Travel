import { html } from 'lit';
import type { TemplateResult } from 'lit';

import { customElement, property, eventOptions } from 'lit/decorators.js';
import { TwLitElement } from './common/TwLitElement';

interface Slide {
  title: string;
  id: string;
}
const _uuid = (): string => Math.floor(Math.random() * 1000) + '';

const _slideTitle = (_id?: string) => 'Slide ' + (_id || _uuid());
const _newSlide = function (): Slide {
  const id = _uuid();
  const title = _slideTitle(id);
  return {
    id,
    title,
  };
};
@customElement('deckjs-canvas')
export class DeckjsCanvas extends TwLitElement {
  // Declare reactive properties
  @property()
  name?: string = 'Presentation Title';

  @property({ type: Array })
  slides: Slide[] = [_newSlide()];

  // Render the UI as a function of component state
  render(): TemplateResult {
    const slidesTemplates = [];
    const menuTemplates = [];
    for (const i of this.slides) {
      slidesTemplates.push(html` <div
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

              <a
                href="#"
                class="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
                >More</a
              >
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
      menuTemplates.push(html` <li>
        <a
          >${i.title}
          <svg
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
    console.log(slidesTemplates);
    return html`
      <div
        class="bg-primary flex-wrap items-center justify-center w-screen h-screen overflow-auto"
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
              ${menuTemplates}
            </ul>
          </div>
          <div class="basis-4/5">
            <div class="text-center mt-4">
              ${slidesTemplates}
              <a class="btn btn-accent" @click=${this._onAddPage}>Add Page</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  @eventOptions({ capture: true })
  _onAddPage() {
    this.slides = [...this.slides, _newSlide()];

    console.log(this.slides);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'deckjs-canvas': DeckjsCanvas;
  }
}
