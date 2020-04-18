function debounce(func, wait = 15, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  sliderImages.forEach(image => {
    const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
    const slideOutAt = image.offsetTop + image.height;
    
    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPast = window.scrollY < slideOutAt;
    if (isHalfShown && isNotScrolledPast) image.classList.add('active');
    else image.classList.remove('active');
  });
}

window.addEventListener('scroll', debounce(checkSlide));