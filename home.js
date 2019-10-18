// burger-icon
let  navContent = document.querySelector('.nav-content');
let closeBtn = document.querySelector('.close-btn');
let burgerIcon = document.querySelector('.burgar-icon');

//    ADDEVENTLISTNER
burgerIcon.addEventListener('click', function(){
     navContent.classList.add('nav-open')
})

closeBtn.addEventListener('click', function(){
    navContent.classList.remove('nav-open')
})