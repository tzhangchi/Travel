# Travel

Building travels and blocks , presentation like a doc, travel is written by react+ lit + yjs + vite + tailwind.css

<img  src="./assets/cover@2x.png">

Painted by [excaildraw](https://excalidraw.com/#json=faGt5VMKqyC9vLKKfYD5F,NLJIrxaXHrHQ-KuW-rPX0Q)

## Development

Setting up basic local environment:

```bash
# install dependencies
pnpm i

# start vite playground
pnpm dev
```

To test locally, please make sure browser binaries are already installed via `npx playwright install` and Vite playground is started with `pnpm dev`. Then there are multi commands to choose from:

```bash
# run tests in headless mode in in another terminal window
pnpm test

# or run tests in headed mode for debugging
pnpm test:headed
```

In headed mode, `await page.pause()` can be used in test cases to suspend the test runner.

# Useful Links

We would also like to give thanks to open-source projects that make Travel possible:

- [AFFiNE](https://github.com/toeverything/AFFiNE) -- a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use
- [BlockSuite](https://github.com/toeverything/blocksuite) -- BlockSuite is a collaborative editing framework designed to reliably reconcile any Web content.
- [tailwindcss](https://tailwindcss.com/) -- A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup
- [daisyui](https://daisyui.com/docs/install/) - The most popular, free and open-source
- [yjs
  ](https://github.com/yjs/yjs) & [Yrs](https://github.com/y-crdt/y-crdt) -- Fundamental support of CRDTs for our implementation on state management and data sync.
  Tailwind CSS component library
- [React](https://github.com/facebook/react) -- View layer support and web GUI framework.
- [Lit](https://lit.dev/) -- Simple. Fast. Web Components..
- [quilljs](https://quilljs.com/) - powerful rich text editor.
- [vite](https://vitejs.dev/) -- Next Generation Frontend Tooling.
- [playwright](https://playwright.dev/) - enables reliable end-to-end testing for modern web apps.
- [icons](https://heroicons.com/) - use heroicons
- Other [dependencies](https://github.com/tzhangchi/Travel/network/dependencies)

## License

[Apache 2.0](./LICENSE)
