import { html, useTSComponent, useTSElements, useTSNoReload, useTSSSRHydration } from '@devwareng/vanilla-ts'
import { Router } from './routes/__root';
import "./css/index.css"
import "animate.css"

export default function App(DOM?: HTMLElement) {
  const { isDOM } = useTSSSRHydration(DOM!)
  if (!isDOM) return

  const ui = useTSElements(
    isDOM,
    html`
      <div class="min-h-screen text-white bg-black">
        <main id="routes"></main>
      </div>
    `
  )

  useTSNoReload(isDOM)
  useTSComponent("routes", isDOM, Router)

  return ui
}