import { html } from 'lit';
import type { TemplateResult } from 'lit';

import { customElement, property, eventOptions } from 'lit/decorators.js';
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
              class="artboard artboard-horizontal bg-white rounded-box w-10/12 h-auto mt-10 m-auto "
            >
              <div class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
                  <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <div>
                      <div
                        class="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg"
                      >
                        <img
                          src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                          loading="lazy"
                          alt="Photo by Martin Sanchez"
                          class="w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>

                    <div class="md:pt-8">
                      <p
                        class="text-indigo-500 font-bold text-center md:text-left"
                      >
                        Who we are
                      </p>

                      <h1
                        class="text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6"
                      >
                        Our competitive advantage
                      </h1>

                      <p class="text-gray-500 sm:text-lg mb-6 md:mb-8">
                        This is a section of some simple filler text, also known
                        as placeholder text. It shares some characteristics of a
                        real written text but is random or otherwise generated.
                        It may be used to display a sample of fonts or generate
                        text for testing. Filler text is dummy text which has no
                        meaning however looks very similar to real text.<br /><br />

                        This is a section of some simple filler text, also known
                        as placeholder text. It shares some characteristics of a
                        real written text but is
                        <a
                          href="#"
                          class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 underline transition duration-100"
                          >random</a
                        >
                        or otherwise generated. It may be used to display a
                        sample of fonts or generate text for testing. Filler
                        text is dummy text which has no meaning however looks
                        very similar to real text.
                      </p>

                      <h2
                        class="text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4"
                      >
                        About us
                      </h2>

                      <p class="text-gray-500 sm:text-lg mb-6 md:mb-8">
                        This is a section of some simple filler text, also known
                        as placeholder text. It shares some characteristics of a
                        real written text but is random or otherwise generated.
                        It may be used to display a sample of fonts or generate
                        text for testing. Filler text is dummy text which has no
                        meaning however looks very similar to real text.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="artboard artboard-horizontal bg-white rounded-box w-10/12 h-auto mt-10 m-auto "
            >
              <div class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
                  <div
                    class="flex justify-between items-center gap-8 mb-4 sm:mb-8 md:mb-12"
                  >
                    <div class="flex items-center gap-12">
                      <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold">
                        Gallery
                      </h2>

                      <p class="max-w-screen-sm hidden md:block text-gray-500">
                        This is a section of some simple filler text, also known
                        as placeholder text. It shares some characteristics of a
                        real written text.
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

                    <!-- image - start -->
                    <a
                      href="#"
                      class="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                        loading="lazy"
                        alt="Photo by Martin Sanchez"
                        class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                      />

                      <div
                        class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"
                      ></div>

                      <span
                        class="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3"
                        >Dev</span
                      >
                    </a>
                    <!-- image - end -->

                    <!-- image - start -->
                    <a
                      href="#"
                      class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                        loading="lazy"
                        alt="Photo by Lorenzo Herrera"
                        class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                      />

                      <div
                        class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"
                      ></div>

                      <span
                        class="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3"
                        >Retro</span
                      >
                    </a>
                    <!-- image - end -->
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-4" @click=${this._onAddPage}>
              <a class="btn btn-accent">Add Page</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  @eventOptions({ capture: true })
  _onAddPage() {
    console.log(222);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'deckjs-canvas': DeckjsCanvas;
  }
}
