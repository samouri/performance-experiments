import { hydrate, h } from 'preact';

const c1 = <p id="COMPONENT1">
  <span><b><i>Hello </i></b></span>
  <span><b><i>Hello </i></b></span>
  <span><b><i>Hello </i></b></span>
</p>
const c2 = <p id="COMPONENT2">
  <span><b><i>Hello </i></b></span>
  <span><b><i>Hello </i></b></span>
  <span><b><i>Hello </i></b></span>
</p>

window.addEventListener('DOMContentLoaded', (event) => {
  const start = performance.now()
  console.time('renders');
  hydrate(c1, document.getElementById('mount1'));
  hydrate(c2, document.getElementById('mount2'));
  console.timeEnd('renders');

  const message = `Renders took: ${performance.now() - start}ms`
  const h2 = document.createElement('h2');
  h2.innerText = message;
  document.body.prepend(h2);
  console.log(h2)
});
