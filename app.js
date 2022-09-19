const sliderContainer = document.querySelector('.slider-container');
const sliderRight = document.querySelector('.right-slide');
const sliderLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = sliderRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

// getting the index of the last slide since length is 4
// the first text element takes the last picture
sliderLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  // clientHeight gives the height of the container
  if (direction === 'up') {
    activeSlideIndex++;
    // when we get to last slide, set active slide to the first one; go to the beginning
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }
  // make image and text move by moving both the slide left and slide right elements
  sliderRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  sliderLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
