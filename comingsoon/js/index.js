anime({
  targets: '.name .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInQuad',
  duration: 1500,
  delay: function(el, i) {return i *250 },
  direction: 'alternate',
  loop: true,
  translateY: 50
});
