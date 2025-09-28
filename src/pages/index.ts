import { Hero } from '@/components';
import { html, useTSCollection, useTSElements, useTSMetaData } from '@devwareng/vanilla-ts';

export default function MainPage(DOM: HTMLElement) {

  useTSMetaData({
    name: 'index',
    description: '',
    author: ''
  });

  const ui = useTSElements(
    DOM,
    html`
      <div class="w-full min-h-screen bg-cover bg-no-repeat animate__animated animate__fadeIn overflow-x-hidden">
        <div id="hero"></div>
      </div>
    `
  );

  const sections = ["hero"]
  const components = [Hero]

  useTSCollection(sections, DOM, components)

  return ui
}