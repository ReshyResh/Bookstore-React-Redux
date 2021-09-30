/* eslint-disable */
export default (message, color) => {
  const error = document.createElement('aside');
  error.textContent = message;
  error.id = 'error-popup';
  error.classList.add(color);
  setTimeout(() => {
    error.classList.add('fade');
  }, 500);
  document.getElementById('root').appendChild(error);
  setTimeout(() => {
    document.getElementById('root').removeChild(document.getElementById('error-popup'));
  }, 2500);
};
