import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function Hero(DOM: HTMLElement) {

    const ui = useTSElements(
        DOM,
        html`
        <section class="min-h-720px w-full bg-slate bg-cover bg-no-repeat">
            <div class="container">
                <!-- Navbar Section -->
                <!-- Hero Section -->
                <div class="grid-cols-1 md:grid-cols-2">
                    <p>This is the hero</p>
                </div>
            </div>
        </section>
        `
    );
    return ui
}