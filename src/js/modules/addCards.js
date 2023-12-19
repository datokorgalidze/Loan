 export default class AddCards{
     constructor(oldSelector, newSelector, items){
        try {
            this.oldSelector = document.querySelector(oldSelector);
            this.newSelector = document.querySelector(newSelector);
            this.oldItems = this.oldSelector.querySelectorAll(items);
            this.newItems = this.newSelector.querySelectorAll(items);
            this.oldCounter = 0;
            this.newCounter = 0;
        }catch(e){}
        
     }

      bindTriggers(container, items , counter){
          container.querySelector('.plus').addEventListener('click', () => {
             if(counter !== items.length - 2){
                items[counter].style.display = 'flex';
                items[counter].classList.add('animated','slideInUp')
                counter ++;
             }else{
                items[counter].style.display = 'flex';
                items[items.length - 1].remove();
             } 
          })

      }

            
            hideItems(items) {
                items.forEach((item, i, arr) => {
                    if (i !== arr.length - 1) {
                        item.style.display = 'none';
                    }
                });
            }


      init(){
        try {
            this.hideItems(this.newItems);
            this.hideItems(this.oldItems);

           this.bindTriggers(this.oldSelector, this.oldItems, this.oldCounter);
           this.bindTriggers(this.newSelector, this.newItems, this.newCounter );
        }catch(e){}
          
      }
 } 