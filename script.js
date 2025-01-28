let items = document.querySelectorAll('.allowActive');
let listTab = document.querySelectorAll('.tab');
let containerFuild = document.querySelector('.container-fuild');


containerFuild.addEventListener('scroll', ()=>{
    items.forEach(item => {
        if(item.offsetTop - containerFuild.scrollTop < window.innerHeight*(3/4)){
            item.classList.add('active');
        }else{
            item.classList.remove('active');
        }
    })

     listTab.forEach(tab =>{
         if(tab.offsetTop - containerFuild.scrollTop < window.innerHeight*(3/4)){
             tab.classList.add('active');
         }else{
             tab.classList.remove('active');
         }
     })
})



