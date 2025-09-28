import { html, useTSElements, useTSMetaData } from '@devwareng/vanilla-ts';

export default function NotFound(DOM: HTMLElement) {
  useTSMetaData({
    name: 'notfound',
    description: '',
    author: ''
  });


  const ui = useTSElements(
    DOM,
    html`
      <div class="p-4 animate__animated animate__fadeIn duration-300">
        <h1>404 | Page Not Found</h1>
      
      </div>
    `
  );

  return ui
}