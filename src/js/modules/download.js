export default class Download{
    constructor(triggers){
        this.btn = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg';
     }

      downloadItem(path){
        console.log('Download item clicked');
         const link = document.createElement('a')
          
         link.setAttribute('href', path)
         link.setAttribute('download', 'picture')
         link.style.display = 'none'
         document.body.appendChild(link)

         link.click()

        //  document.body.removeChild(link)

        setTimeout(() => {
            document.body.removeChild(link);
        }, 100);
      }

     init(){
        this.btn.forEach(item => {
            item.addEventListener('click',(e) => {
                e.preventDefault();
                this.downloadItem(this.path) 
               
            })
        })
     }
}