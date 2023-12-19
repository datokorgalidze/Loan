 
 export default class Form{
     constructor(forms){
         this.forms = document.querySelectorAll(forms);
         this.inputs = document.querySelectorAll('input');
         this.message = {
            loading:'Loading...',
            success:'Thank you! We will contact you soon',
            failure:'Something went wrong',
         }

         this.path = 'assets/question.php';
     }


     async postData(url, data){
         let res = fetch(url,{
            method:'POST',
            body:data
         })
      }

      clearInputs(){
         this.inputs.forEach(input => {
            input.value = ''; 
         })
      }

      checkMailInputs(){
        const mailInputs = document.querySelectorAll('[type="email"]');
    
        mailInputs.forEach(input => {
            input.addEventListener('keypress', function(e) {
                if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
                    e.preventDefault();
                }
            });
        });
     }

       init(){ 

          this.checkMailInputs();
         
         this.forms.forEach(form => {
            form.addEventListener('submit', (e) =>{
                e.preventDefault();

                const statusMessage = document.createElement('div');
                console.log(statusMessage);
                statusMessage.classList.add('animated','slideInUp');
                console.log( statusMessage);
                statusMessage.style.cssText = `
                margin-top: 15px;
                font-size: 22px;
                color: black;
            `;
               form.parentNode.appendChild(statusMessage);

               statusMessage.textContent = this.message.loading;

               const formData = new FormData(form)

               this.postData(this.path, formData)
                  .then(res=> {
                    console.log(res);
                    statusMessage.textContent = this.message.success;
                   
                  })
                  .catch(() => {
                     statusMessage.tagName = this.message.failure;
                  })
                  .finally(()=>{
                    form.classList.add('animated','slideInUp');
                    form.reset();
                     setTimeout(() => {
                        form.classList.remove('animated', 'slideInUp');
                        statusMessage.remove();
                       
                     },5000)
                  })
            })
         });

       }
 }