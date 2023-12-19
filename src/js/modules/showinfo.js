export default class ShowInfo{
     constructor(triggers){
        this.btn = document.querySelectorAll(triggers)
     }


     init(){
         this.btn.forEach(btn => {
            btn.addEventListener('click', () => {
            const sibling = btn.closest('.module__info-show').nextElementSibling;
            
            sibling.classList.toggle('msg')
            sibling.style.marginTop = '20px';
            sibling.classList.add('animated','slideInRight');

            })
         }) 
     }
}