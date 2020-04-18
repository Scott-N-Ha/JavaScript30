const pressed = [];
const secretCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
  'Enter',
]

function checkSecret() {
  return (pressed.length === secretCode.length && pressed.join('') === secretCode.join(''));
}

window.addEventListener('keyup', e => {
  pressed.push(e.key)
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (checkSecret()) console.log('Secret activated')
});