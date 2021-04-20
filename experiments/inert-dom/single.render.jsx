import { render, Fragment, h } from 'preact';

const thousand = Array.from({ length: 1000 });
const app = (
  <Fragment>
    {thousand.map(() => { 
       return  (<p>
          <span><b><i>Hello </i></b></span>
          <span><b><i>Hello </i></b></span>
          <span><b><i>Hello </i></b></span>
        </p>)
    })}
  </Fragment>
);

window.addEventListener('DOMContentLoaded', (event) => {
  const start = performance.now()
  console.time('render');
  render(app, document.body);
  console.timeEnd('render');

  const message = `Render took: ${performance.now() - start}ms`
  const h2 = document.createElement('h2');
  h2.innerText = message;
  document.body.prepend(h2);
});
