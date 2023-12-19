 
import Slider from './slider-classes';

  export default class MiniSlider extends Slider {
       constructor (container, next , prev, activeClass , animate, autoPlay ){
          super(container, next , prev, activeClass , animate, autoPlay );
       }


       decorSlides(){
           this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
         });
          
         if (!this.slides[0].closest('button')) {
            this.slides[0].classList.add(this.activeClass);
        }
        
           if(this.animate){
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';

           }
       }
        
    
    nextSlide() {
        // Find the first non-button slide
        const firstNonButtonSlide = Array.from(this.slides).find(slide => slide.tagName !== 'BUTTON');
    
        if (firstNonButtonSlide) {
            // Append the first non-button slide
            
                this.container.appendChild(firstNonButtonSlide);
                this.slides[this.slideIndex -1].classList.remove('animated', 'slideInLeft');
                firstNonButtonSlide.classList.add('animated', 'slideInRight');
                
               
            
         
            
            if (this.slides[0].tagName === 'BUTTON') {
                // If the first slide is a button, append it too
                this.container.appendChild(this.slides[0]);
            }
            firstNonButtonSlide.classList.remove('animated', 'slideInRight');
            this.slides[this.slideIndex -1].classList.add('animated', 'slideInLeft');
            // console.log(this.slides[this.slideIndex -1]);
    
            this.decorSlides();
         }
       
      }


        bindTriggers() {
            this.next.addEventListener('click', () => this.nextSlide());

            this.prev.addEventListener('click', () => {

                for (let i = this.slides.length - 1; i > 0; i--) {
                    if (this.slides[i].tagName !== "BUTTON") {
                        let active = this.slides[i];
                        this.container.insertBefore(active, this.slides[0]);
                        this.decorSlides();
                        break;
                    }
                }

            
            });
        }


       init(){
            try{
                this.container.style.cssText = `
                display: flex;
                flex-wrap: wrap;
                overflow: hidden;
                align-items: flex-start;
            `;

            this.bindTriggers();
            this.decorSlides();
          
            


                if (this.autoPlay) {
                    setInterval(() => this.nextSlide(), 2000);
                }
            }catch(e){}
               
       }
  }