import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Enable mocking in development
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
