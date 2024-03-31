const splash = document.querySelector('.splash');
const intro = document.querySelector('.intro');
const mission = document.querySelector('.web-mission')

document.addEventListener('DOMContentLoaded',(e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
        intro.classList.add('display-none'); 
        mission.classList.add('display-none');
        


        window.location.href = "..//shop/w1965221_student1_shop.html"
              
    },8000);
});


