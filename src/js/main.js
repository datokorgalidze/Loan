 import MainSlider from "./modules/slider/slider-main";
 import VideoPlayer from "./modules/videoPlayer";
 import MiniSlider from "./modules/slider/slider-mini";
 import AddCards from "./modules/addCards";
 import Form from "./modules/forms";
 import ShowInfo from "./modules/showinfo";
 import Download from "./modules/download";



   window.addEventListener('DOMContentLoaded', () => {
        
       const slider = new MainSlider({ btns: '.next', container: '.page'});
       slider.render();
       const secondPageSlider = new MainSlider({container:'.moduleapp', btns: '.next'});
       secondPageSlider.render(); 
       
       const palyer = new VideoPlayer('.showup .play', '.overlay');
       palyer.play();
       new VideoPlayer('.module__video-item .play', '.overlay').play();
       new VideoPlayer('.video .play', '.overlay').play();

       const minislider = new MiniSlider({
         container:'.showup__content-slider',
         next:'.showup__next',
         prev: '.showup__prev',
         activeClass: 'card-active',
         animate: true
       })

       minislider.init();


       const modulesSlider = new MiniSlider({
              container: '.modules__content-slider',
              prev: '.modules__info-btns .slick-prev',
              next: '.modules__info-btns .slick-next',
              activeClass: 'card-active',
              animate: true,
              autoPlay: true

       })

       modulesSlider.init();
       
       
       const feedSlider = new MiniSlider({
            container: '.feed__slider',
            prev: '.feed__slider .slick-prev',
            next: '.feed__slider .slick-next',
            activeClass: 'feed__item-active'
       })

       feedSlider.init();

      new AddCards('.officerold', '.officernew', '.officer__card-item').init();
      new Form('.form').init();
      new ShowInfo('.plus__content').init();
      new Download('.download').init();

   });



  