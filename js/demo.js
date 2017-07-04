var mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  // autoplay : 3000,
  // 如果需要分页器
  pagination: '.swiper-pagination',
})
$('a').click(function(e){
  e.preventDefault()
})
