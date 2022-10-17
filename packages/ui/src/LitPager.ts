import { html } from 'lit';
import type { TemplateResult } from 'lit';
import { customElement, property, eventOptions } from 'lit/decorators.js';
import { TwLitElement } from './common/TwLitElement';
import { store } from './store';
import type { Surface } from './surface';
import { newSurface } from './surface';

@customElement('pager-menus')
export class PagerMenus extends TwLitElement {
  @property()
  canvasEl!: HTMLElement;

  @property()
  onSurfacesChange: ((data: Surface[]) => void) | undefined;

  @property()
  surfaces: Surface[] = [];

  @property()
  activeSurfaceId: string | undefined;

  constructor() {
    super();
  }

  _onAddPage(e: Event, index: number) {
    const _newSurface = newSurface('article');
    const newIndex = index + 1;
    this.surfaces.splice(newIndex, 0, _newSurface);
    this.surfaces = [...this.surfaces];
    this.onSurfacesChange && this.onSurfacesChange(this.surfaces);

    e.stopPropagation();

    setTimeout(() => {
      this._onClickMenuItem(_newSurface.id, newIndex);
    });
  }
  @eventOptions({ capture: true })
  _onClickMenuItem(id: string, index: number) {
    this.activeSurfaceId = id;
    const eleId = `surface${id}`;
    let newTop =
      this.canvasEl.querySelector('#' + eleId)?.getBoundingClientRect().y || 0;
    const containerScrollTop =
      this.canvasEl.querySelector('#surfaceScrollContainer')?.scrollTop || 0;
    if (index === 0) {
      newTop = 0;
    } else {
      newTop = -72 + newTop + containerScrollTop;
    }
    // debugger;
    this.canvasEl
      .querySelector('#surfaceScrollContainer')
      ?.scrollTo({ top: newTop, behavior: 'smooth' });
  }
  render(): TemplateResult {
    const menuTemplates = [];
    for (let index = 0; index < this.surfaces.length; index++) {
      const i = this.surfaces[index];

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
    return html`<div class="w-72 fixed" style="top:72px">
      <ul class="menu bg-base-100 w-auto p-2 mt-10 rounded-box overflow-y-auto">
        ${menuTemplates}
      </ul>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pager-menus': PagerMenus;
  }
}
