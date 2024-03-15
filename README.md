# [DEMO] Vite + MSW

Demo Environment

- Vite 5.x
- Vue 3.4
- MSW 2.x ([Mock Service Worker](https://mswjs.io/) - API mocking library)

## Mock Service Worker

Install MSW

- https://mswjs.io/docs/getting-started

```
npm install msw@latest --save-dev
```

### Setup network handlers and browser integration

Create `src/mocks/handlers.js`
- https://mswjs.io/docs/concepts/request-handler
- https://mswjs.io/docs/basics/mocking-responses

Create `src/mocks/browser.js`
- https://mswjs.io/docs/integrations/browser

### Create Service Worker

Generate `mockServiceWorker.js` in public directory

- https://mswjs.io/docs/integrations/browser

```
npx msw init public --save
```

### Start worker

Make sure worker is ready for frontend app

```js
// src/main.js
import { createApp } from 'vue'
import App from './App.vue'

async function enableMocking() {
  if (!import.meta.env.DEV) {
    return
  }
  const { worker } = await import('./mocks/browser')
  return worker.start()
}

enableMocking().then(() => {
    createApp(App).mount('#app')
})
```
