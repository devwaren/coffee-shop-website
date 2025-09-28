import { html, useTSElements, useTSMetaData } from '@devwareng/vanilla-ts';

export default function AboutPage(DOM: HTMLElement) {

  useTSMetaData({
    name: 'index',
    description: '',
    author: ''
  });


  const ui = useTSElements(
    DOM,
    html`
      <div class="p-4 animate__animated animate__fadeIn duration-300">
        <h1>About Page</h1>
      </div>
    `
  );

  return ui
}