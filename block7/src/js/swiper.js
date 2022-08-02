import Swiper, {Pagination} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

Swiper.use([Pagination]);
let swiper = Swiper;
let init = false;



function swiperMode() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
  if (mobile.matches) {
    if (!init) {
      init = true;
      let swiper = new Swiper('.swiper', {
        modules: [Pagination],
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      });
    }
  } else {
    console.log(swiper);
    swiper.destroy();
    init = false;
  }
}

window.addEventListener('load', function () {
  swiperMode();
  console.log('load')
});
window.addEventListener('resize', function () {
  swiperMode();
  console.log('resize')

});
