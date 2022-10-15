import { uuid } from './util/util';
import { html } from 'lit';

type SurfaceType =
  | string
  | 'image'
  | 'article'
  | 'code'
  | 'counterdown'
  | 'stat'
  | 'embed';
interface Surface {
  title: string;
  id: string;
  type: SurfaceType;
}

const newSurfaceTitle = (_id?: string) => 'S-' + (_id || uuid());
const newSurface = function (
  newType: SurfaceType = [
    'image',
    'article',
    'code',
    'counterdown',
    'stat',
    'embed',
  ][Math.floor(Math.random() * 5)]
): Surface {
  const id = uuid();
  const title = newSurfaceTitle(id);
  const type = newType;
  return {
    id,
    title,
    type,
  };
};
const newSurfaceHtml = (type: string) => {
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

export type { Surface };
export { newSurface, newSurfaceHtml };
