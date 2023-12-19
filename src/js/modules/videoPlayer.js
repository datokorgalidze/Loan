export default class VideoPlayer{
     constructor(triggers , modal){
         this.btns = document.querySelectorAll(triggers);
         this.modal = document.querySelector(modal);
         this.close = this.modal.querySelector('.close');
         this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
     }
     
     
     createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`,
            events: {
                'onStateChange': this.onPlayerStateChange
              }
    
        });

        this.modal.style.display = 'flex';
    } 
       
    onPlayerStateChange(state){
        try {

            const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling;
            const playBtn = this.activeBtn.querySelector('svg').cloneNode(true);
   
            if(state.data === 0){
               if (blockedElem.querySelector('.play__circle').classList.contains('closed')){
                   blockedElem.querySelector('.play__circle').classList.remove('closed');
                   blockedElem.querySelector('svg').remove();
                   blockedElem.querySelector('.play__circle').appendChild(playBtn);
                   blockedElem.querySelector('.play__text').textContent = 'play video';
                   blockedElem.querySelector('.play__text').classList.remove('attention');
                   blockedElem.style.opacity = 1;
                   blockedElem.style.filter = 'none';
   
                   blockedElem.setAttribute('data-disabled', 'false');
   
               }
            }
        }catch(e){}
        
    }    
     

    bindTriggers(){
        this.btns.forEach((btn, i) => {
            try{
                const blockedElem = btn.closest('.module__video-item').nextElementSibling;
                if (i % 2 == 0){
                    blockedElem.setAttribute('data-disabled', 'true');
                }
            }catch(e){}
           

            btn.addEventListener('click', () => {
                if(!btn.closest('.module__video-item') || btn.closest('.module__video-item').getAttribute('data-disabled') !== 'true'){
                    this.activeBtn = btn;
                    if (document.querySelector('iframe#frame')){
                        this.modal.style.display = 'flex';
                        if(this.path !== btn.getAttribute('data-url')){
                            this.path = btn.getAttribute('data-url')
                            if (this.player){
                                this.player.loadVideoById({videoId:this.path});   
                            }else{
                                console.log('eror');
                            }       
                            
                        }
    
                    }else{
                        this.path = btn.getAttribute('data-url');
                        this.createPlayer(this.path);
                    }

                }        

            })
        })

    }
     
     closeBtn(){
        this.close.addEventListener('click', () => {
            this.modal.style.display = 'none';
            if(this.player){
                this.player.stopVideo();
            }
           
        })
     }


     play(){
         
        if(this.btns.length > 0 ){
           
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      
    
    
            this.bindTriggers();
            this.closeBtn();
        }
         
       
     }


} 