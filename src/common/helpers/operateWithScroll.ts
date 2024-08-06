export function disableScrolling() {
  if(typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
  }
}

export function enableScrolling() {
  if(typeof document !== 'undefined') {
    document.body.style.overflow = 'visible';
    document.body.style.height = 'unset';
  }
}
