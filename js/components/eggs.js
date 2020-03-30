(() => {
  const $separators = document.querySelectorAll('.separator-egg-dininho');
  const key = document.querySelector('.key')
  const blackBackground = document.querySelector('.black-background')
  let counter = 0;
  const goalShowKey = $separators.length;

  $separators.forEach(($separator) => {
    $separator.addEventListener('click', function() {
      !this.classList.contains('-clicked') && counter++;
      this.classList.add('-clicked');
      counter === goalShowKey && showKey();
    });
  });

  function showKey() {
    counter = 0;
    key.setAttribute('visibility','true')
    blackBackground.setAttribute('visibility','true')
  }

  blackBackground.addEventListener('click', () => {
    key.setAttribute('visibility','false')
    blackBackground.setAttribute('visibility','false')
  })

  key.addEventListener('click', () => {
    key.setAttribute('visibility','false')
    blackBackground.setAttribute('visibility','false')
  })
})();