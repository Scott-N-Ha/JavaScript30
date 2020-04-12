const checkBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
let prevClick;
let shiftHeld = false;

checkBoxes.forEach(check => {
  check.addEventListener('click', e => {
    if (shiftHeld && prevClick) {
      let firstIdx = checkBoxes.findIndex(el => el === prevClick);
      let secondIdx = checkBoxes.findIndex(el => el === e.target);

      if (secondIdx < firstIdx)[firstIdx, secondIdx] = [secondIdx, firstIdx];

      for (let i = firstIdx; i <= secondIdx; i++) {
        checkBoxes[i].checked = true;
      }

      prevClick = null;
    } else {
      prevClick = check;
    }
  })
})

document.addEventListener('keydown', e => {
  if (e.keyCode === 16) shiftHeld = true;
});

document.addEventListener('keyup', e => {
  if (e.keyCode === 16) shiftHeld = false;
})