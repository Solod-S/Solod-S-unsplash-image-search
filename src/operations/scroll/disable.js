import { preventScroll } from './preventScroll';
const disable = () =>
  document
    .querySelector('#modal-root')
    .addEventListener(
      'wheel',
      preventScroll.bind(document.querySelector('#modal-root'))
    );

export default disable;
