// asset_path は使えない

alert('vegas')

$('#vegas-slider').vegas({
  overlay: true,
  transition: 'blur',
  transitionDuration: 2000,
  delay: 10000,
  animationDuration: 20000,
  animation: 'kenburns',
  // slides: [{ src: "#{asset_path 'vegas1.webp'}"},
  //          { src: "#{asset_path 'vegas2.webp'}"},
  //          { src: "#{asset_path 'vegas3.webp'}"},
  //          { src: "#{asset_path 'vegas4.webp'}"},
  //          { src: "#{asset_path 'vegas5.webp'}"}]
  slides: [{ src: 'vegas1.webp'},
           { src: 'vegas2.webp'},
           { src: 'vegas3.webp'},
           { src: 'vegas4.webp'},
           { src: 'vegas5.webp'}]
});
