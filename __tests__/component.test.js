/**
 * @jest-environment jsdom
 */

import component from '../src/modules/component.js';

beforeAll(() => {
  document.body.innerHTML = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wbpack Exercise</title>
  </head>
  <body>
    <h1>Hello webpack!</h1>
  </body>
  </html>
  `;
});

describe('default HTML', () => {
  it('contains h1 header', () => {
    const header = document.createElement('h1');
    header.textContent = 'Hello webpack!';
    expect(document.body.innerHTML.includes(header.outerHTML)).toBe(true);
  });
});

describe('DOM manipulation', () => {
  it('create element', () => {
    document.body.appendChild(component());
    expect(document.body.querySelector('.hello').nodeName).toBe('DIV');
  });
});