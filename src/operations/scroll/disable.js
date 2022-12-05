import { preventScroll } from './preventScroll';
const disable = () =>
  document
    .querySelector('#modal-root')
    .removeEventListener(
      'wheel',
      preventScroll.bind(document.querySelector('#modal-root'))
    );

export default disable;
