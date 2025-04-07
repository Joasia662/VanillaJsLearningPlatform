function changeSliderColorNext() {
  if (!window.sliderState)
    window.sliderState = 0

  window.sliderState = (window.sliderState + 1) % 3
  document.querySelector('.slider').style.backgroundImage = 'url(assets/img/slide' + window.sliderState.toString() + '.png)'
  console.log(window.sliderState)
}

function changeSliderColorPrevious() {
  if (!window.sliderState)
    window.sliderState = 0

  if (window.sliderState == 0)
    window.sliderState = 2;
  else
    window.sliderState = window.sliderState - 1
  document.querySelector('.slider').style.backgroundImage = 'url(assets/img/slide' + window.sliderState.toString() + '.png)'
  console.log(window.sliderState)
}