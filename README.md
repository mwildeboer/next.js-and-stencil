# Next.js + Stencil proof of concept

A small dummy demo that allows us to build a Web Components library in [Stencil](https://stenciljs.com) and use these components in a [Next.js](https://nextjs.org) app. Quite potent I would say! The component library and app are linked using [Rush](https://rushjs.io).

## Installation
Follow these steps to run the app.

1. Install Rush `npm install -g @microsoft/rush`
2. Make sure the `rushVersion` and `npmVersion` are correct in the `rush.json` file.
3. Run `rush update --full` to install and link all the (dev)dependencies.
4. Run `npm run components:build` to build the component library.
5. Run `npm run app:dev` to start to Next.js app.

When you open the app in your browser, you should see an ugly title and button. These are the Web Components. This setup should get you started to build some serious stuff.